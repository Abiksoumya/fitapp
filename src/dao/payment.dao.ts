import prisma from '../config/database';

export const PaymentDao = {
  create: async (data: {
    userId:         string;
    razorpayOrderId: string;
    amount:         number;
    type:           'subscription' | 'topup';
    plan?:          string;
  }) => {
    return prisma.payment.create({ data });
  },

  findByOrderId: async (orderId: string) => {
    return prisma.payment.findUnique({
      where: { razorpayOrderId: orderId },
    });
  },

  markSuccess: async (
    orderId:    string,
    paymentId:  string,
    signature:  string,
  ) => {
    return prisma.payment.update({
      where: { razorpayOrderId: orderId },
      data: {
        razorpayPaymentId: paymentId,
        razorpaySignature: signature,
        status:            'paid',
      },
    });
  },

  createTopUp: async (data: {
    userId:          string;
    razorpayOrderId: string;
  }) => {
    return prisma.topUpPack.create({
      data: {
        ...data,
        scansAdded: 30,
        amount:     4900,
      },
    });
  },

  markTopUpSuccess: async (
    orderId:   string,
    paymentId: string,
  ) => {
    return prisma.topUpPack.update({
      where: { razorpayOrderId: orderId },
      data: {
        razorpayPaymentId: paymentId,
        status:            'paid',
      },
    });
  },
};