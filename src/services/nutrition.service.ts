import { NutritionDao } from '../dao/nutrition.dao';
import { MealCreateInput } from '../models/nutrition.model';
import { NotFoundError } from '../utils/errors.utils';

export const NutritionService = {
  getTodayNutrition: async (userId: string) => {
    const today = new Date();
    const meals = await NutritionDao.getMealsByDate(userId, today);
    const water = await NutritionDao.getWaterByDate(userId, today);

    const totals = meals.reduce(
  (
    acc: {
      totalCalories: number;
      totalProtein:  number;
      totalCarbs:    number;
      totalFat:      number;
      totalFibre:    number;
    },
    meal: {
      calories: number;
      protein:  number;
      carbs:    number;
      fat:      number;
      fibre:    number;
    },
  ) => ({
    totalCalories: acc.totalCalories + meal.calories,
    totalProtein:  acc.totalProtein  + meal.protein,
    totalCarbs:    acc.totalCarbs    + meal.carbs,
    totalFat:      acc.totalFat      + meal.fat,
    totalFibre:    acc.totalFibre    + meal.fibre,
  }),
  {
    totalCalories: 0,
    totalProtein:  0,
    totalCarbs:    0,
    totalFat:      0,
    totalFibre:    0,
  },
);

    return {
      ...totals,
      meals,
      water: water._sum.glasses || 0,
    };
  },

  logMeal: async (userId: string, data: MealCreateInput) => {
    return NutritionDao.createMeal(userId, data);
  },

  deleteMeal: async (id: string, userId: string) => {
    const meal = await NutritionDao.deleteMeal(id, userId).catch(() => {
      throw new NotFoundError('Meal not found');
    });
    return meal;
  },

  logWater: async (userId: string, glasses: number) => {
    return NutritionDao.logWater(userId, glasses);
  },
};