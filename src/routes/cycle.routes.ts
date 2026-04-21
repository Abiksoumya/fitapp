import { Router } from 'express';
import { CycleController } from '../controllers/cycle.controller';
import { authenticate } from '../middleware/auth.middleware';
import { validate } from '../middleware/validate.middleware';
import { asyncHandler } from '../utils/async.utils';
import { requireFeature } from '../middleware/feature.middleware';
import { logPeriodSchema, logSymptomsSchema } from '../schemas/cycle.schema';

const router = Router();

router.use(authenticate);

// All cycle routes require cycleTracker feature
router.use(asyncHandler(requireFeature('cycleTracker')));

router.get('/current',   asyncHandler(CycleController.getCurrent));
router.get('/history',   asyncHandler(CycleController.getHistory));
router.post('/period',   validate(logPeriodSchema),   asyncHandler(CycleController.logPeriod));
router.post('/symptoms', validate(logSymptomsSchema), asyncHandler(CycleController.logSymptoms));

export default router;