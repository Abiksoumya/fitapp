import { Router } from 'express';
import { authenticate } from '../middleware/auth.middleware';
import { asyncHandler } from '../utils/async.utils';
import { sendNotification } from '../config/firebase';
import { sendSuccess } from '../utils/response.utils';
import { AuthRequest } from '../types';
import { Response } from 'express';
import prisma from '../config/database';

const router = Router();
router.use(authenticate);

// Test — send period reminder to yourself
router.post('/test/period', asyncHandler(async (req: AuthRequest, res: Response) => {
  const user = await prisma.user.findUnique({
    where:  { id: req.user!.id },
    select: { fcmToken: true },
  });
  if (!user?.fcmToken) throw new Error('No FCM token found');

  await sendNotification(
    user.fcmToken,
    '🌸 Period reminder',
    'Your period is expected in 2 days. Stock up on essentials and take care of yourself!',
    { screen: 'cycle' },
  );
  sendSuccess(res, null, 'Period reminder sent!');
}));

// Test — send step goal reminder to yourself
router.post('/test/steps', asyncHandler(async (req: AuthRequest, res: Response) => {
  const user = await prisma.user.findUnique({
    where:  { id: req.user!.id },
    select: { fcmToken: true },
  });
  if (!user?.fcmToken) throw new Error('No FCM token found');

  await sendNotification(
    user.fcmToken,
    '👟 Step goal reminder',
    "You're 7,500 steps away from your daily goal! Keep going! 🏃",
    { screen: 'steps' },
  );
  sendSuccess(res, null, 'Step reminder sent!');
}));

// Test — send trial expiry reminder to yourself
router.post('/test/trial', asyncHandler(async (req: AuthRequest, res: Response) => {
  const user = await prisma.user.findUnique({
    where:  { id: req.user!.id },
    select: { fcmToken: true },
  });
  if (!user?.fcmToken) throw new Error('No FCM token found');

  await sendNotification(
    user.fcmToken,
    '⏳ Trial ending soon!',
    'Your free trial ends in 3 days. Subscribe now from ₹299/month to keep all premium features!',
    { screen: 'subscription' },
  );
  sendSuccess(res, null, 'Trial reminder sent!');
}));

export default router;