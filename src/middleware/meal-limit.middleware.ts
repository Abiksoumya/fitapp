import { Response, NextFunction } from 'express';
import { AuthRequest } from '../types';
import { SubscriptionDao } from '../dao/subscription.dao';
import { NutritionDao } from '../dao/nutrition.dao';
import { AppError } from '../utils/errors.utils';

const FREE_DAILY_MEAL_LIMIT = 5;

export const checkMealLimit = async (
  req: AuthRequest,
  _res: Response,
  next: NextFunction,
) => {
  const sub = await SubscriptionDao.getByUserId(req.user!.id);

  // Premium users — unlimited
  if (sub && sub.plan !== 'free') return next();

  // Check if subscription is still active
  const isExpired = sub?.currentPeriodEnd
    ? new Date() > sub.currentPeriodEnd && sub.plan !== 'free'
    : false;

  if (sub && sub.plan !== 'free' && !isExpired) return next();

  // Free user — check today's meal count
  const todayMeals = await NutritionDao.getMealsByDate(
    req.user!.id,
    new Date(),
  );

  if (todayMeals.length >= FREE_DAILY_MEAL_LIMIT) {
    return next(
      new AppError(
        `Free plan allows ${FREE_DAILY_MEAL_LIMIT} meal logs per day. Upgrade to premium for unlimited logging.`,
        403,
      ),
    );
  }

  next();
};