import prisma from '../config/database';
import { PlanId } from '../config/plan';

export const SubscriptionDao = {
  // Get user subscription
  getByUserId: async (userId: string) => {
    return prisma.subscription.findUnique({
      where: { userId },
    });
  },

  // Create free subscription on register
  createFree: async (userId: string) => {
    return prisma.subscription.create({
      data: {
        userId,
        plan:   'free',
        status: 'active',
      },
    });
  },

  // Upgrade to paid plan
  upgrade: async (
    userId:          string,
    plan:            PlanId,
    durationDays:    number,
    razorpayOrderId: string,
    razorpayPaymentId?: string,
  ) => {
    const now    = new Date();
    const end    = new Date();
    end.setDate(end.getDate() + durationDays);

    return prisma.subscription.upsert({
      where: { userId },
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

  // Cancel subscription
  cancel: async (userId: string) => {
    return prisma.subscription.update({
      where:  { userId },
      data: {
        status:      'cancelled',
        cancelledAt: new Date(),
      },
    });
  },

  // Mark expired subscriptions
  expireOld: async () => {
    return prisma.subscription.updateMany({
      where: {
        status:           'active',
        plan:             { not: 'free' },
        currentPeriodEnd: { lt: new Date() },
      },
      data: { status: 'expired' },
    });
  },
};