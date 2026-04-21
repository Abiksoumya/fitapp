import prisma from '../config/database';

export const CycleDao = {
  logPeriod: async (
    userId: string,
    periodStart: Date,
  ) => {
    return prisma.cycleLog.create({
      data: { userId, periodStart },
    });
  },

  getLatest: async (userId: string) => {
    return prisma.cycleLog.findFirst({
      where: { userId },
      orderBy: { periodStart: 'desc' },
    });
  },

  getHistory: async (userId: string, months = 6) => {
    const from = new Date();
    from.setMonth(from.getMonth() - months);

    return prisma.cycleLog.findMany({
      where: {
        userId,
        periodStart: { gte: from },
      },
      orderBy: { periodStart: 'desc' },
    });
  },

  logSymptoms: async (userId: string, symptoms: string[]) => {
    return prisma.symptom.create({
      data: { userId, symptoms },
    });
  },

  getTodaySymptoms: async (userId: string) => {
    const start = new Date();
    start.setHours(0, 0, 0, 0);

    return prisma.symptom.findFirst({
      where: {
        userId,
        loggedAt: { gte: start },
      },
      orderBy: { loggedAt: 'desc' },
    });
  },
};