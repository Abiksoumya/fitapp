import { Response, NextFunction } from 'express';
import { AuthRequest } from '../types';
import { SubscriptionDao } from '../dao/subscription.dao';
import { ForbiddenError } from '../utils/errors.utils';
import { getPlan, PlanId } from '../config/plan';

type Feature = keyof ReturnType<typeof getPlan>['features'];

export const requireFeature =
  (feature: Feature) =>
  async (req: AuthRequest, _res: Response, next: NextFunction) => {
    const sub = await SubscriptionDao.getByUserId(req.user!.id);

    if (!sub) {
      return next(new ForbiddenError('No subscription found. Please register again.'));
    }

    // If paid plan is expired — treat as free
    const isExpired =
      sub.plan !== 'free' &&
      sub.currentPeriodEnd != null &&
      new Date() > sub.currentPeriodEnd;

    const effectivePlan: PlanId = isExpired ? 'free' : (sub.plan as PlanId);
    const plan = getPlan(effectivePlan);
    const hasAccess = plan.features[feature];

    if (!hasAccess) {
      const featureMessages: Record<string, string> = {
        foodScanner:
          'Food scanner requires a premium plan. Upgrade from ₹349/month.',
        cycleTracker:
          'Cycle tracker is a premium feature. Upgrade to access period tracking, ovulation and fertility insights.',
        workoutPlans:
          'Workout plans are a premium feature. Upgrade to access AI-powered workout plans.',
        progressCharts:
          'Progress charts are a premium feature. Upgrade to track your weight, steps and fitness trends.',
        aiCoach:
          'AI coach is available on the Yearly plan only.',
        prioritySupport:
          'Priority support is available on 6-month and yearly plans.',
        unlimitedLogs:
          'Unlimited logging is a premium feature. Upgrade for unlimited meal and water tracking.',
      };

      return next(
        new ForbiddenError(
          isExpired
            ? `Your subscription expired. ${featureMessages[feature] || 'Renew to continue.'}`
            : featureMessages[feature] || 'This feature requires a premium subscription.',
        ),
      );
    }

    next();
  };