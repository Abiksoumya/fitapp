import { Router } from 'express';
import { authenticate } from '../middleware/auth.middleware';
import { asyncHandler } from '../utils/async.utils';
import { requireFeature } from '../middleware/feature.middleware';
import { WorkoutController } from '../controllers/workout.controller';

const router = Router();

router.use(authenticate);
router.use(asyncHandler(requireFeature('workoutPlans')));

router.get('/today',    asyncHandler(WorkoutController.getToday));
router.get('/history',  asyncHandler(WorkoutController.getHistory));
router.post('/complete', asyncHandler(WorkoutController.complete));

export default router;