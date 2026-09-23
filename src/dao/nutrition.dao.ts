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
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return prisma.waterLog.upsert({
    where: {
      userId_loggedAt: {
        userId,
        loggedAt: today,
      },
    },
    update: { glasses },
    create: { userId, glasses, loggedAt: today },
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
  getMonthlyNutrition: async (userId: string) => {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const meals = await prisma.meal.findMany({
    where: {
      userId,
      loggedAt: { gte: thirtyDaysAgo },
    },
    orderBy: { loggedAt: 'asc' },
  });

  // Group by date
  const grouped: Record<string, {
    calories: number;
    protein:  number;
    carbs:    number;
    fat:      number;
    fibre:    number;
    water:    number;
  }> = {};

  for (const meal of meals) {
    const dateKey = meal.loggedAt.toISOString().substring(0, 10);
    if (!grouped[dateKey]) {
      grouped[dateKey] = {
        calories: 0,
        protein:  0,
        carbs:    0,
        fat:      0,
        fibre:    0,
        water:    0,
      };
    }
    grouped[dateKey].calories += meal.calories;
    grouped[dateKey].protein  += meal.protein;
    grouped[dateKey].carbs    += meal.carbs;
    grouped[dateKey].fat      += meal.fat;
    grouped[dateKey].fibre    += meal.fibre;
  }

  // Add water data
  const waterLogs = await prisma.waterLog.findMany({
    where: {
      userId,
      loggedAt: { gte: thirtyDaysAgo },
    },
  });

  for (const log of waterLogs) {
    const dateKey = log.loggedAt.toISOString().substring(0, 10);
    if (grouped[dateKey]) {
      grouped[dateKey].water = log.glasses;
    } else {
      grouped[dateKey] = {
        calories: 0,
        protein:  0,
        carbs:    0,
        fat:      0,
        fibre:    0,
        water:    log.glasses,
      };
    }
  }

  return Object.entries(grouped).map(([date, data]) => ({
    date,
    ...data,
  }));
},
};