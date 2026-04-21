import { Router } from 'express';
import { NutritionController } from '../controllers/nutrition.controller';
import { authenticate } from '../middleware/auth.middleware';
import { validate } from '../middleware/validate.middleware';
import { upload } from '../middleware/upload.middleware';
import { asyncHandler } from '../utils/async.utils';
import { requireFeature } from '../middleware/feature.middleware';
import { checkScanQuota } from '../middleware/scan-quota.middleware';
import { checkMealLimit } from '../middleware/meal-limit.middleware';

import {
  logMealSchema,
  logWaterSchema,
  deleteMealSchema,
} from '../schemas/nutrition.schema';

const router = Router();

router.use(authenticate);

router.get('/today',       asyncHandler(NutritionController.getToday));
// update the meal log route
router.post(
  '/meal',
  asyncHandler(checkMealLimit),   // ← add this
  validate(logMealSchema),
  asyncHandler(NutritionController.logMeal),
);router.delete('/meal/:id', validate(deleteMealSchema), asyncHandler(NutritionController.deleteMeal));
router.post('/water',      validate(logWaterSchema),   asyncHandler(NutritionController.logWater));

// Food scanner — check feature → check quota → upload → scan
router.post(
  '/scan',
  asyncHandler(requireFeature('foodScanner')), // has foodScanner feature?
  asyncHandler(checkScanQuota),                // has scans remaining?
  upload.single('image'),                      // only upload if both pass
  asyncHandler(NutritionController.scanFood),  // run AI scan
);

export default router;