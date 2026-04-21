import { Router } from 'express';
import { StepsController } from '../controllers/steps.controller';
import { authenticate } from '../middleware/auth.middleware';
import { asyncHandler } from '../utils/async.utils';

const router = Router();

router.use(authenticate);

router.get('/today',  asyncHandler(StepsController.getToday));
router.get('/weekly', asyncHandler(StepsController.getWeekly));
router.post('/sync',  asyncHandler(StepsController.sync));

export default router;