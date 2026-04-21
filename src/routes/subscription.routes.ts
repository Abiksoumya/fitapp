import { Router } from 'express';
import { SubscriptionController } from '../controllers/subscription.controller';
import { authenticate } from '../middleware/auth.middleware';
import { asyncHandler } from '../utils/async.utils';

const router = Router();

router.use(authenticate);

router.get('/status',         asyncHandler(SubscriptionController.getStatus));
router.get('/plans',          asyncHandler(SubscriptionController.getPlans));
router.get('/quota',          asyncHandler(SubscriptionController.getQuota));
router.post('/order',         asyncHandler(SubscriptionController.createOrder));
router.post('/verify',        asyncHandler(SubscriptionController.verifyPayment));
router.post('/topup/order',   asyncHandler(SubscriptionController.createTopUpOrder));
router.post('/topup/verify',  asyncHandler(SubscriptionController.verifyTopUp));
router.post('/cancel',        asyncHandler(SubscriptionController.cancel));

export default router;