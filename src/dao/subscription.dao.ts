import prisma from '../config/database';
import { PlanId } from '../config/plan';

export const SubscriptionDao = {

  getByUserId: async (userId: string) => {
    return prisma.subscription.findUnique({
      where: { userId },
    });
  },

  // Create trial subscription on register — 15 days free
  createTrial: async (userId: string) => {
    const trialEndDate = new Date();
    trialEndDate.setDate(trialEndDate.getDate() + 15);

    return prisma.subscription.create({
      data: {
        userId,
        plan:         'trial',
        status:       'active',
        trialEndDate,
      },
    });
  },

  // Keep for backward compat
  createFree: async (userId: string) => {
    return SubscriptionDao.createTrial(userId);
  },

  upgrade: async (
    userId:           string,
    plan:             PlanId,
    durationDays:     number,
    razorpayOrderId:  string,
    razorpayPaymentId?: string,
  ) => {
    const now = new Date();
    const end = new Date();
    end.setDate(end.getDate() + durationDays);

    return prisma.subscription.upsert({
      where:  { userId },
      update: {
        plan,
        status:             'active',
        razorpayOrderId,
        currentPeriodStart: now,
        currentPeriodEnd:   end,
        cancelledAt:        null,
        updatedAt:          now,
      },
      create: {
        userId,
        plan,
        status:             'active',
        razorpayOrderId,
        currentPeriodStart: now,
        currentPeriodEnd:   end,
      },
    });
  },

  cancel: async (userId: string) => {
    return prisma.subscription.update({
      where: { userId },
      data: {
        status:      'cancelled',
        cancelledAt: new Date(),
      },
    });
  },

  expireOld: async () => {
    return prisma.subscription.updateMany({
      where: {
        status:           'active',
        plan:             { not: 'free', },
        currentPeriodEnd: { lt: new Date() },
      },
      data: { status: 'expired' },
    });
  },
};