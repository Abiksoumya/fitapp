import { Response } from 'express';
import { AuthRequest } from '../types';
import { SubscriptionService } from '../services/subscription.service';
import { sendSuccess, sendCreated } from '../utils/response.utils';
import { AppError } from '../utils/errors.utils';
import { PlanId, PLANS, TOPUP_PACK } from '../config/plan';

export const SubscriptionController = {

  // GET /api/subscription/status
  getStatus: async (req: AuthRequest, res: Response) => {
    const status = await SubscriptionService.getStatus(req.user!.id);
    sendSuccess(res, status);
  },

  // GET /api/subscription/plans
  getPlans: async (_req: AuthRequest, res: Response) => {
    sendSuccess(res, { plans: PLANS, topup: TOPUP_PACK });
  },

  // GET /api/subscription/quota
  getQuota: async (req: AuthRequest, res: Response) => {
    const quota = await SubscriptionService.getScanQuotaStatus(req.user!.id);
    sendSuccess(res, quota);
  },

  // POST /api/subscription/order
  createOrder: async (req: AuthRequest, res: Response) => {
    const { planId } = req.body;
    if (!planId) throw new AppError('planId is required', 400);

    const order = await SubscriptionService.createSubscriptionOrder(
      req.user!.id,
      planId as PlanId,
    );
    sendCreated(res, order, 'Order created');
  },

  // POST /api/subscription/verify
  verifyPayment: async (req: AuthRequest, res: Response) => {
    const {
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
    } = req.body;

    if (!razorpayOrderId || !razorpayPaymentId || !razorpaySignature) {
      throw new AppError('Missing payment verification fields', 400);
    }

    const result = await SubscriptionService.verifyAndActivate(
      req.user!.id,
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
    );

    sendSuccess(res, result, 'Payment verified and subscription activated');
  },

  // POST /api/subscription/topup/order
  createTopUpOrder: async (req: AuthRequest, res: Response) => {
    const order = await SubscriptionService.createTopUpOrder(req.user!.id);
    sendCreated(res, order, 'Top-up order created');
  },

  // POST /api/subscription/topup/verify
  verifyTopUp: async (req: AuthRequest, res: Response) => {
    const {
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
    } = req.body;

    if (!razorpayOrderId || !razorpayPaymentId || !razorpaySignature) {
      throw new AppError('Missing payment verification fields', 400);
    }

    const result = await SubscriptionService.verifyAndActivate(
      req.user!.id,
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
    );

    sendSuccess(res, result, '30 scans added to your account!');
  },

  // POST /api/subscription/cancel
  cancel: async (req: AuthRequest, res: Response) => {
    const { SubscriptionDao } = await import('../dao/subscription.dao');
    await SubscriptionDao.cancel(req.user!.id);
    sendSuccess(res, null, 'Subscription cancelled. You will retain access until period end.');
  },
};