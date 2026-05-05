import { Router } from 'express';
import { CustomWorkoutController } from '../controllers/custom-workout.controller';
import { authenticate } from '../middleware/auth.middleware';
import { requireFeature } from '../middleware/feature.middleware';
import { asyncHandler } from '../utils/async.utils';

const router = Router();

router.use(authenticate);
router.use(asyncHandler(requireFeature('workoutPlans')));

router.get('/',      asyncHandler(CustomWorkoutController.getAll));
router.get('/:id',   asyncHandler(CustomWorkoutController.getById));
router.post('/',     asyncHandler(CustomWorkoutController.create));
router.put('/:id',   asyncHandler(CustomWorkoutController.update));
router.delete('/:id',asyncHandler(CustomWorkoutController.delete));

export default router;