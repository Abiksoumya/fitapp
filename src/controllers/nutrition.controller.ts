import { Response } from 'express';
import { AuthRequest } from '../types';
import { NutritionService } from '../services/nutrition.service';
import { ScannerService } from '../services/scanner.service';
import { sendSuccess, sendCreated } from '../utils/response.utils';
import { AppError } from '../utils/errors.utils';
import { SubscriptionService } from '../services/subscription.service';

export const NutritionController = {
  getToday: async (req: AuthRequest, res: Response) => {
    const data = await NutritionService.getTodayNutrition(req.user!.id);
    sendSuccess(res, data);
  },

  logMeal: async (req: AuthRequest, res: Response) => {
    const meal = await NutritionService.logMeal(req.user!.id, req.body);
    sendCreated(res, meal, 'Meal logged successfully');
  },

  deleteMeal: async (req: AuthRequest, res: Response) => {
  const id = req.params.id as string;
  await NutritionService.deleteMeal(id, req.user!.id);
  sendSuccess(res, null, 'Meal deleted successfully');
},

  logWater: async (req: AuthRequest, res: Response) => {
    const log = await NutritionService.logWater(
      req.user!.id,
      req.body.glasses,
    );
    sendCreated(res, log, 'Water logged');
  },

  scanFood: async (req: AuthRequest, res: Response) => {
  if (!req.file) throw new AppError('No image provided', 400);

  // Consume one scan (quota already verified by middleware)
  await SubscriptionService.consumeScan(req.user!.id);

  // Run AI scan
  const result = await ScannerService.analyzeFood(
    req.file.buffer,
    req.file.mimetype,
  );

  // Get fresh quota after consumption
  const updatedQuota = await SubscriptionService.getScanQuotaStatus(
    req.user!.id,
  );

  sendSuccess(
    res,
    {
      ...result,
      quota: {
        scansRemaining: updatedQuota.totalRemaining,
        showTopUpOffer: updatedQuota.showTopUpOffer,
        topUpMessage: updatedQuota.showTopUpOffer
          ? `Only ${updatedQuota.totalRemaining} scans left! Buy 30 more for ₹49.`
          : null,
      },
    },
    'Food analysed successfully',
  );
},
};