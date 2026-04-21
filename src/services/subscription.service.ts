import crypto from 'crypto';
import razorpay from '../config/razorpay';
import { PLANS, TOPUP_PACK, getPlan, PlanId } from '../config/plan';
import { SubscriptionDao } from '../dao/subscription.dao';
import { ScanQuotaDao } from '../dao/scan-quota.dao';
import { PaymentDao } from '../dao/payment.dao';
import { AppError, NotFoundError } from '../utils/errors.utils';
import { ScanQuotaStatus } from '../models/subscription.model';
import env from '../config/env';

export const SubscriptionService = {

  // Called on user register — give free plan
  initFreeUser: async (userId: string) => {
    await SubscriptionDao.createFree(userId);

    const periodEnd = new Date();
    periodEnd.setFullYear(periodEnd.getFullYear() + 10); // free never expires

    await ScanQuotaDao.create(userId, PLANS.free.scansPerMonth, periodEnd);
  },

  // Get current subscription status
  getStatus: async (userId: string) => {
    const sub = await SubscriptionDao.getByUserId(userId);
    if (!sub) throw new NotFoundError('Subscription not found');

    const plan    = getPlan(sub.plan as PlanId);
    const quota   = await ScanQuotaDao.getByUserId(userId);
    const isActive = sub.status === 'active';
    const isExpired = sub.currentPeriodEnd
      ? new Date() > sub.currentPeriodEnd
      : false;

    return {
      plan:               sub.plan,
      planName:           plan.name,
      status:             isExpired ? 'expired' : sub.status,
      features:           plan.features,
      currentPeriodEnd:   sub.currentPeriodEnd,
      scansPerMonth:      plan.scansPerMonth,
      quota,
      isActive:           isActive && !isExpired,
    };
  },

  // Get scan quota status
  getScanQuotaStatus: async (userId: string): Promise<ScanQuotaStatus> => {
    const quota = await ScanQuotaDao.getByUserId(userId);
    if (!quota) throw new NotFoundError('Quota not found');

    // Reset if period has ended
    if (new Date() > quota.periodEnd) {
      const sub = await SubscriptionDao.getByUserId(userId);
      const plan = getPlan((sub?.plan || 'free') as PlanId);
      const newEnd = new Date();
      newEnd.setDate(newEnd.getDate() + 30);
      await ScanQuotaDao.reset(userId, plan.scansPerMonth, newEnd);
      return SubscriptionService.getScanQuotaStatus(userId);
    }

    const scansRemaining  = Math.max(0, quota.scansLimit - quota.scansUsed);
    const totalRemaining  = scansRemaining + quota.extraScans;
    const canScan         = totalRemaining > 0;
    const showTopUpOffer  = totalRemaining <= 10 && totalRemaining >= 0;

    return {
      scansUsed:      quota.scansUsed,
      scansLimit:     quota.scansLimit,
      extraScans:     quota.extraScans,
      scansRemaining,
      totalRemaining,
      periodEnd:      quota.periodEnd,
      canScan,
      showTopUpOffer,
    };
  },

  // Create Razorpay order for subscription
  createSubscriptionOrder: async (
    userId: string,
    planId: PlanId,
  ) => {
    if (planId === 'free') throw new AppError('Cannot purchase free plan', 400);

    const plan = getPlan(planId);

    const order = await razorpay.orders.create({
      amount:   plan.priceInPaise,
      currency: 'INR',
      notes: {
        userId,
        planId,
        type: 'subscription',
      },
    });

    await PaymentDao.create({
      userId,
      razorpayOrderId: order.id,
      amount:          plan.priceInPaise,
      type:            'subscription',
      plan:            planId,
    });

    return {
      orderId:       order.id,
      amount:        plan.priceInPaise,
      currency:      'INR',
      planId,
      planName:      plan.name,
      priceDisplay:  plan.priceDisplay,
      keyId:         env.RAZORPAY_KEY_ID,
    };
  },

  // Create Razorpay order for top-up
  createTopUpOrder: async (userId: string) => {
    const quota = await SubscriptionService.getScanQuotaStatus(userId);

    // Only allow top-up if premium user
    const sub = await SubscriptionDao.getByUserId(userId);
    if (!sub || sub.plan === 'free') {
      throw new AppError(
        'Top-up is only available for premium users. Please upgrade first.',
        403,
      );
    }

    const order = await razorpay.orders.create({
      amount:   TOPUP_PACK.priceInPaise,
      currency: 'INR',
      notes: {
        userId,
        type: 'topup',
        scansAdded: '30',
      },
    });

    await PaymentDao.createTopUp({
      userId,
      razorpayOrderId: order.id,
    });

    return {
      orderId:      order.id,
      amount:       TOPUP_PACK.priceInPaise,
      currency:     'INR',
      scansAdded:   TOPUP_PACK.scans,
      priceDisplay: TOPUP_PACK.priceDisplay,
      keyId:        env.RAZORPAY_KEY_ID,
      currentScans: quota.totalRemaining,
    };
  },

  // Verify payment signature and activate subscription
  verifyAndActivate: async (
    userId:             string,
    razorpayOrderId:    string,
    razorpayPaymentId:  string,
    razorpaySignature:  string,
  ) => {
    // Verify signature
    const body      = `${razorpayOrderId}|${razorpayPaymentId}`;
    const expected  = crypto
      .createHmac('sha256', env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest('hex');

    if (expected !== razorpaySignature) {
      throw new AppError('Invalid payment signature', 400);
    }

    // Get payment record
    const payment = await PaymentDao.findByOrderId(razorpayOrderId);
    if (!payment) throw new NotFoundError('Payment not found');

    // Mark payment as success
    await PaymentDao.markSuccess(
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
    );

    if (payment.type === 'topup') {
      // Add 30 extra scans
      await ScanQuotaDao.addExtraScans(userId, TOPUP_PACK.scans);
      return { type: 'topup', scansAdded: TOPUP_PACK.scans };
    }

    // Activate subscription
    const planId = payment.plan as PlanId;
    const plan   = getPlan(planId);

    await SubscriptionDao.upgrade(
      userId,
      planId,
      plan.durationDays,
      razorpayOrderId,
      razorpayPaymentId,
    );

    // Reset scan quota for new plan
    const periodEnd = new Date();
    periodEnd.setDate(periodEnd.getDate() + 30);
    await ScanQuotaDao.create(userId, plan.scansPerMonth, periodEnd);

    return { type: 'subscription', plan: planId, planName: plan.name };
  },

  // Use one scan — call before every food scan
  consumeScan: async (userId: string) => {
    const status = await SubscriptionService.getScanQuotaStatus(userId);

    if (!status.canScan) {
      throw new AppError(
        status.totalRemaining === 0
          ? 'You have used all your scans for this month. Buy a top-up pack for ₹49 to get 30 more scans!'
          : 'No scans remaining',
        403,
      );
    }

    await ScanQuotaDao.incrementScan(userId);
    return status;
  },
};