import crypto          from 'crypto';
import razorpay        from '../config/razorpay';
import { PLANS, TOPUP_PACK, getPlan, PlanId } from '../config/plan';
import { SubscriptionDao } from '../dao/subscription.dao';
import { ScanQuotaDao }    from '../dao/scan-quota.dao';
import { PaymentDao }      from '../dao/payment.dao';
import { AppError, NotFoundError } from '../utils/errors.utils';
import { ScanQuotaStatus } from '../models/subscription.model';
import env from '../config/env';
import prisma from '../config/database';

// Helper — determine if subscription is currently active
const resolveStatus = (sub: Awaited<ReturnType<typeof SubscriptionDao.getByUserId>>) => {
  const now = new Date();

  if (!sub) {
    return {
      isActive:      false,
      isTrial:       false,
      trialDaysLeft: 0,
      trialEndDate:  null,
      effectivePlan: 'free' as PlanId,
      planName:      'Free',
      scansPerMonth: PLANS.free.scansPerMonth,
      isExpired:     false,
    };
  }

  // Trial plan
  if (sub.plan === 'trial' || sub.plan === 'free') {
    if (sub.trialEndDate && sub.trialEndDate > now) {
      const trialDaysLeft = Math.ceil(
        (sub.trialEndDate.getTime() - now.getTime()) /
        (1000 * 60 * 60 * 24),
      );
      return {
        isActive:      true,
        isTrial:       true,
        trialDaysLeft,
        trialEndDate:  sub.trialEndDate,
        effectivePlan: 'trial' as PlanId,
        planName:      'Trial',
        scansPerMonth: 30,
        isExpired:     false,
      };
    }
    // Trial expired — treat as free
    return {
      isActive:      false,
      isTrial:       false,
      trialDaysLeft: 0,
      trialEndDate:  sub.trialEndDate,
      effectivePlan: 'free' as PlanId,
      planName:      'Free',
      scansPerMonth: PLANS.free.scansPerMonth,
      isExpired:     true,
    };
  }

  // Paid plan
  const planConfig  = getPlan(sub.plan as PlanId);
  const isStillActive = sub.currentPeriodEnd
    ? sub.currentPeriodEnd > now
    : false;

  return {
    isActive:      isStillActive,
    isTrial:       false,
    trialDaysLeft: 0,
    trialEndDate:  null,
    effectivePlan: isStillActive ? (sub.plan as PlanId) : 'free' as PlanId,
    planName:      isStillActive ? planConfig.name : 'Expired',
    scansPerMonth: isStillActive ? planConfig.scansPerMonth : PLANS.free.scansPerMonth,
    isExpired:     !isStillActive,
  };
};

export const SubscriptionService = {

  // Called on user register — give 15 day trial
  initFreeUser: async (userId: string) => {
    await SubscriptionDao.createTrial(userId);

    // 30 scans for trial period
    const periodEnd = new Date();
    periodEnd.setDate(periodEnd.getDate() + 30);
    await ScanQuotaDao.create(userId, 30, periodEnd);
  },

  // Get current subscription status
  getStatus: async (userId: string) => {
    const sub    = await SubscriptionDao.getByUserId(userId);
    const quota  = await ScanQuotaDao.getByUserId(userId);
    const status = resolveStatus(sub);
    const plan   = getPlan(status.effectivePlan);

    // Build quota
    const scansUsed      = quota?.scansUsed   ?? 0;
    const scansLimit     = quota?.scansLimit  ?? status.scansPerMonth;
    const extraScans     = quota?.extraScans  ?? 0;
    const scansRemaining = Math.max(0, scansLimit - scansUsed);
    const totalRemaining = scansRemaining + extraScans;

    // Show top-up only for paid (non-trial) premium users
    const showTopUpOffer = status.isActive &&
      !status.isTrial &&
      totalRemaining <= 10;

    return {
      plan:             sub?.plan ?? 'free',
      planName:         status.planName,
      status:           status.isExpired ? 'expired' : (sub?.status ?? 'active'),
      isActive:         status.isActive,
      isTrial:          status.isTrial,
      trialDaysLeft:    status.trialDaysLeft,
      trialEndDate:     status.trialEndDate,
      currentPeriodEnd: sub?.currentPeriodEnd ?? null,
      scansPerMonth:    status.scansPerMonth,
      features:         plan.features,
      quota: {
        scansUsed,
        scansLimit,
        extraScans,
        scansRemaining,
        totalRemaining,
        periodEnd:      quota?.periodEnd ?? new Date(),
        canScan:        totalRemaining > 0 && status.isActive,
        showTopUpOffer,
      },
    };
  },

  // Get scan quota status
  getScanQuotaStatus: async (userId: string): Promise<ScanQuotaStatus> => {
    const quota = await ScanQuotaDao.getByUserId(userId);
    if (!quota) throw new NotFoundError('Quota not found');

    // Reset if period has ended
    if (new Date() > quota.periodEnd) {
      const sub    = await SubscriptionDao.getByUserId(userId);
      const status = resolveStatus(sub);
      const newEnd = new Date();
      newEnd.setDate(newEnd.getDate() + 30);
      await ScanQuotaDao.reset(userId, status.scansPerMonth, newEnd);
      return SubscriptionService.getScanQuotaStatus(userId);
    }

    const scansRemaining  = Math.max(0, quota.scansLimit - quota.scansUsed);
    const totalRemaining  = scansRemaining + quota.extraScans;
    const canScan         = totalRemaining > 0;

    const sub    = await SubscriptionDao.getByUserId(userId);
    const status = resolveStatus(sub);
    const showTopUpOffer = status.isActive && !status.isTrial && totalRemaining <= 10;

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
  createSubscriptionOrder: async (userId: string, planId: PlanId) => {
    if (planId === 'free' || planId === 'trial') {
      throw new AppError('Cannot purchase this plan', 400);
    }

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
      orderId:      order.id,
      amount:       plan.priceInPaise,
      currency:     'INR',
      planId,
      planName:     plan.name,
      priceDisplay: plan.priceDisplay,
      keyId:        env.RAZORPAY_KEY_ID,
    };
  },

  // Create Razorpay order for top-up
  createTopUpOrder: async (userId: string) => {
    const sub    = await SubscriptionDao.getByUserId(userId);
    const status = resolveStatus(sub);

    if (!status.isActive || status.isTrial) {
      throw new AppError(
        'Top-up scans are only available for paid premium subscribers. Please upgrade to a paid plan first.',
        403,
      );
    }

    const quota = await SubscriptionService.getScanQuotaStatus(userId);

    const order = await razorpay.orders.create({
      amount:   TOPUP_PACK.priceInPaise,
      currency: 'INR',
      notes: {
        userId,
        type:       'topup',
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

  // Verify payment and activate subscription
  // verifyAndActivate: async (
  //   userId:            string,
  //   razorpayOrderId:   string,
  //   razorpayPaymentId: string,
  //   razorpaySignature: string,
  // ) => {
  //   // Verify signature
  //   const body     = `${razorpayOrderId}|${razorpayPaymentId}`;
  //   const expected = crypto
  //     .createHmac('sha256', env.RAZORPAY_KEY_SECRET)
  //     .update(body)
  //     .digest('hex');

  //   if (expected !== razorpaySignature) {
  //     throw new AppError(
  //       'Payment verification failed. Please contact support if amount was deducted.',
  //       400,
  //     );
  //   }

  //   const payment = await PaymentDao.findByOrderId(razorpayOrderId);
  //   if (!payment) throw new NotFoundError('Payment record not found');

  //   await PaymentDao.markSuccess(
  //     razorpayOrderId,
  //     razorpayPaymentId,
  //     razorpaySignature,
  //   );

  //   if (payment.type === 'topup') {
  //     await ScanQuotaDao.addExtraScans(userId, TOPUP_PACK.scans);
  //     return {
  //       type:       'topup',
  //       scansAdded: TOPUP_PACK.scans,
  //       message:    `${TOPUP_PACK.scans} extra scans added successfully!`,
  //     };
  //   }

  //   // Activate paid subscription
  //   const planId = payment.plan as PlanId;
  //   const plan   = getPlan(planId);

  //   await SubscriptionDao.upgrade(
  //     userId,
  //     planId,
  //     plan.durationDays,
  //     razorpayOrderId,
  //     razorpayPaymentId,
  //   );

  //   // Reset scan quota for new plan — 30 day period
  //   const periodEnd = new Date();
  //   periodEnd.setDate(periodEnd.getDate() + 30);
  //   await ScanQuotaDao.create(userId, plan.scansPerMonth, periodEnd);

  //   return {
  //     type:     'subscription',
  //     plan:     planId,
  //     planName: plan.name,
  //     message:  `Welcome to ${plan.name}! All premium features are now unlocked.`,
  //   };
  // },
  verifyAndActivate: async (
  userId:            string,
  razorpayOrderId:   string,
  razorpayPaymentId: string,
  razorpaySignature: string,
) => {
  // Verify signature
  const body     = `${razorpayOrderId}|${razorpayPaymentId}`;
  const expected = crypto
    .createHmac('sha256', env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest('hex');

  if (expected !== razorpaySignature) {
    throw new AppError(
      'Payment verification failed. Please contact support if amount was deducted.',
      400,
    );
  }

  // Check topup table first
  const topup = await prisma.topUpPack.findUnique({
    where: { razorpayOrderId },
  });

  if (topup) {
    // It's a top-up payment
    await prisma.topUpPack.update({
      where: { razorpayOrderId },
      data: {
        razorpayPaymentId,
        status: 'paid',
      },
    });
    await ScanQuotaDao.addExtraScans(userId, TOPUP_PACK.scans);
    return {
      type:       'topup',
      scansAdded: TOPUP_PACK.scans,
      message:    `${TOPUP_PACK.scans} extra scans added successfully!`,
    };
  }

  // Check payment table for subscription
  const payment = await PaymentDao.findByOrderId(razorpayOrderId);
  if (!payment) throw new NotFoundError('Payment record not found');

  await PaymentDao.markSuccess(
    razorpayOrderId,
    razorpayPaymentId,
    razorpaySignature,
  );

  // Activate paid subscription
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

  return {
    type:     'subscription',
    plan:     planId,
    planName: plan.name,
    message:  `Welcome to ${plan.name}! All premium features are now unlocked.`,
  };
},

  // Use one scan
  consumeScan: async (userId: string) => {
    const sub    = await SubscriptionDao.getByUserId(userId);
    const status = resolveStatus(sub);

    if (!status.isActive) {
      if (status.isTrial === false && status.isExpired) {
        throw new AppError(
          status.effectivePlan === 'free'
            ? 'Your free trial has ended. Upgrade to a premium plan to continue scanning food.'
            : 'Your subscription has expired. Please renew to continue scanning food.',
          403,
        );
      }
    }

    const quota = await SubscriptionService.getScanQuotaStatus(userId);

    if (!quota.canScan) {
      throw new AppError(
        quota.totalRemaining === 0
          ? status.isTrial
            ? 'You have used all your trial scans. Upgrade to premium for 90 scans/month.'
            : 'You have used all your scans for this month. Buy a top-up pack for ₹49 to get 30 more scans!'
          : 'No scans remaining.',
        403,
      );
    }

    await ScanQuotaDao.incrementScan(userId);
    return quota;
  },
};