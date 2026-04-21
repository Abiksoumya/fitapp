import prisma from '../config/database';

export const WorkoutDao = {
  logWorkout: async (
    userId: string,
    data: {
      workoutName:    string;
      durationMin:    number;
      caloriesBurned: number;
      exercises:      object[];
    },
  ) => {
    return prisma.workoutLog.create({
      data: { userId, ...data },
    });
  },

  getHistory: async (userId: string, limit = 10) => {
    return prisma.workoutLog.findMany({
      where: { userId },
      orderBy: { completedAt: 'desc' },
      take: limit,
    });
  },

  getTotalCount: async (userId: string) => {
    return prisma.workoutLog.count({
      where: { userId },
    });
  },
};