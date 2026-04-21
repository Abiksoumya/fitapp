import { Response, NextFunction } from 'express';
import { AuthRequest } from '../types';
import { SubscriptionService } from '../services/subscription.service';
import { AppError } from '../utils/errors.utils';

export const checkScanQuota = async (
  req: AuthRequest,
  _res: Response,
  next: NextFunction,
) => {
  const quota = await SubscriptionService.getScanQuotaStatus(req.user!.id);

  if (!quota.canScan) {
    return next(
      new AppError(
        `You have used all ${quota.scansLimit} scans for this month. Buy 30 more scans for just ₹49!`,
        403,
      ),
    );
  }

  // Attach quota to request so controller can use it
  (req as any).scanQuota = quota;
  next();
};