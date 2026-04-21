import prisma from '../config/database';

export const StepsDao = {
  sync: async (
  userId: string,
  data: {
    steps:     number;
    distance:  number;
    calories:  number;
    activeMin: number;
    loggedAt:  Date;
  },
) => {
  return prisma.stepLog.upsert({
    where: {
      userId_loggedAt: {
        userId,
        loggedAt: data.loggedAt,
      },
    },
    update: {
      steps:     data.steps,
      distance:  data.distance,
      calories:  data.calories,
      activeMin: data.activeMin,
    },
    create: { userId, ...data },
  });
},

  getWeekly: async (userId: string) => {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    return prisma.stepLog.findMany({
      where: {
        userId,
        loggedAt: { gte: sevenDaysAgo },
      },
      orderBy: { loggedAt: 'asc' },
    });
  },

  getToday: async (userId: string) => {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setHours(23, 59, 59, 999);

    return prisma.stepLog.findFirst({
      where: {
        userId,
        loggedAt: { gte: start, lte: end },
      },
    });
  },
};