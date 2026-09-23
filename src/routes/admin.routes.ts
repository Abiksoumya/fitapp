import { Router } from 'express';
import { authenticate } from '../middleware/auth.middleware';
import { asyncHandler } from '../utils/async.utils';
import { AdminController } from '../controllers/admin.controller';
import { requireAdmin } from '../middleware/admin.middleware';

const router = Router();

// All admin routes require auth + admin role
router.use(authenticate);
router.use(asyncHandler(requireAdmin));

// Overview
router.get('/stats/overview',      asyncHandler(AdminController.getOverview));

// Users
router.get('/users',               asyncHandler(AdminController.getUsers));
router.get('/users/:id',           asyncHandler(AdminController.getUserDetail));

// Revenue
router.get('/revenue/overview',    asyncHandler(AdminController.getRevenueOverview));
router.get('/revenue/daily',       asyncHandler(AdminController.getDailyRevenue));
router.get('/revenue/plans',       asyncHandler(AdminController.getRevenuePlans));

// Subscriptions
router.get('/subscriptions',       asyncHandler(AdminController.getSubscriptions));

// Notifications
router.post('/notifications/send', asyncHandler(AdminController.sendNotification));

export default router;