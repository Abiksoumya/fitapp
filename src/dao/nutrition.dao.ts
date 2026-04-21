import prisma from '../config/database';
import { MealCreateInput } from '../models/nutrition.model';

export const NutritionDao = {
  createMeal: async (userId: string, data: MealCreateInput) => {
    return prisma.meal.create({
      data: { userId, ...data },
    });
  },

  getMealsByDate: async (userId: string, date: Date) => {
    const start = new Date(date);
    start.setHours(0, 0, 0, 0);
    const end = new Date(date);
    end.setHours(23, 59, 59, 999);

    return prisma.meal.findMany({
      where: {
        userId,
        loggedAt: { gte: start, lte: end },
      },
      orderBy: { loggedAt: 'asc' },
    });
  },

  deleteMeal: async (id: string, userId: string) => {
    return prisma.meal.delete({
      where: { id, userId },
    });
  },

  logWater: async (userId: string, glasses: number) => {
    return prisma.waterLog.create({
      data: { userId, glasses },
    });
  },

  getWaterByDate: async (userId: string, date: Date) => {
    const start = new Date(date);
    start.setHours(0, 0, 0, 0);
    const end = new Date(date);
    end.setHours(23, 59, 59, 999);

    return prisma.waterLog.aggregate({
      where: {
        userId,
        loggedAt: { gte: start, lte: end },
      },
      _sum: { glasses: true },
    });
  },
};