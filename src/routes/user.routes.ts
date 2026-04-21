import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { authenticate } from '../middleware/auth.middleware';
import { asyncHandler } from '../utils/async.utils';
import { requireFeature } from '../middleware/feature.middleware';

const router = Router();

router.use(authenticate);

// Public — all users
router.get('/me',    asyncHandler(UserController.getMe));
router.put('/me',    asyncHandler(UserController.updateMe));

// Premium only — progress charts
router.get(
  '/stats',
  asyncHandler(requireFeature('progressCharts')),
  asyncHandler(UserController.getStats),
);

export default router;