import { Response, NextFunction } from 'express';
import { AuthRequest }            from '../types';
import { SubscriptionDao }        from '../dao/subscription.dao';
import { ForbiddenError }         from '../utils/errors.utils';
import { getPlan, PlanId }        from '../config/plan';

type Feature = keyof ReturnType<typeof getPlan>['features'];

const FEATURE_MESSAGES: Record<string, string> = {
  foodScanner:
    'AI food scanner requires a premium plan. Upgrade from ₹349/month to get 90 scans/month.',
  cycleTracker:
    'Cycle tracker is a premium feature. Upgrade to track your period, ovulation and fertile window.',
  workoutPlans:
    'Workout plans are a premium feature. Upgrade to access AI-powered workout recommendations.',
  progressCharts:
    'Progress charts are a premium feature. Upgrade to track your fitness trends over time.',
  aiCoach:
    'AI coach is available on the Yearly plan only. Upgrade to yearly for full access.',
  prioritySupport:
    'Priority support is available on 6-month and yearly plans.',
  unlimitedLogs:
    'Unlimited meal logging is a premium feature. Free plan allows 5 meals/day.',
};

const TRIAL_EXPIRED_MESSAGE =
  'Your 15-day free trial has ended. Subscribe from ₹349/month to continue using premium features.';

const SUBSCRIPTION_EXPIRED_MESSAGE =
  'Your subscription has expired. Please renew to continue using premium features.';

export const requireFeature =
  (feature: Feature) =>
  async (req: AuthRequest, _res: Response, next: NextFunction) => {
    try {
      const sub = await SubscriptionDao.getByUserId(req.user!.id);
      const now = new Date();

      if (!sub) {
        return next(
          new ForbiddenError(
            'No subscription found. Please log out and register again.',
          ),
        );
      }

      // Determine effective plan
      let effectivePlan: PlanId = 'free';
      let isExpiredTrial        = false;
      let isExpiredPaid         = false;

      if (sub.plan === 'trial' || sub.plan === 'free') {
        if (sub.trialEndDate && sub.trialEndDate > now) {
          // Trial active — all premium features allowed
          effectivePlan = 'trial' as PlanId;
        } else {
          // Trial expired
          effectivePlan  = 'free';
          isExpiredTrial = true;
        }
      } else {
        // Paid plan
        const isStillActive = sub.currentPeriodEnd
          ? sub.currentPeriodEnd > now
          : false;

        if (isStillActive) {
          effectivePlan = sub.plan as PlanId;
        } else {
          effectivePlan   = 'free';
          isExpiredPaid   = true;
        }
      }

      // Check feature access
      // Trial gets all premium features
      if (effectivePlan === 'trial') {
        return next();
      }

      const plan      = getPlan(effectivePlan);
      const hasAccess = plan.features[feature];

      if (!hasAccess) {
        let message = FEATURE_MESSAGES[feature] ??
          'This feature requires a premium subscription.';

        if (isExpiredTrial) {
          message = `${TRIAL_EXPIRED_MESSAGE} ${FEATURE_MESSAGES[feature] ?? ''}`.trim();
        } else if (isExpiredPaid) {
          message = `${SUBSCRIPTION_EXPIRED_MESSAGE} ${FEATURE_MESSAGES[feature] ?? ''}`.trim();
        }

        return next(new ForbiddenError(message));
      }

      next();
    } catch (err) {
      next(err);
    }
  };