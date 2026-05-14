import * as cron from 'node-cron';
import prisma    from '../config/database';
import { sendNotification } from '../config/firebase';

export const startNotificationCrons = () => {

  // ── 1. Period + Ovulation reminder — runs daily at 8 AM ──────────────
  cron.schedule('0 8 * * *', async () => {
    console.log('🌸 Running period + ovulation reminder cron...');
    try {
      const users = await prisma.user.findMany({
        where: {
          fcmToken: { not: null },
          gender:   'female',
        },
        select: { id: true, fcmToken: true, name: true },
      });

      for (const user of users) {
        const latestCycle = await prisma.cycleLog.findFirst({
          where:   { userId: user.id },
          orderBy: { periodStart: 'desc' },
        });

        if (!latestCycle) continue;

        const cycleLength  = latestCycle.cycleLength || 28;
        const periodStart  = new Date(latestCycle.periodStart);
        const today        = new Date();
        today.setHours(0, 0, 0, 0);

        // Next period date
        const nextPeriod = new Date(periodStart);
        nextPeriod.setDate(nextPeriod.getDate() + cycleLength);

        // Ovulation date — typically 14 days before next period
        const ovulationDate = new Date(nextPeriod);
        ovulationDate.setDate(ovulationDate.getDate() - 14);

        const diffToPeriod = Math.round(
          (nextPeriod.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
        );

        const diffToOvulation = Math.round(
          (ovulationDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
        );

        // Period reminder — 2 days before
        if (diffToPeriod === 2) {
          await sendNotification(
            user.fcmToken!,
            '🌸 Period reminder',
            'Your period is expected in 2 days. Stock up on essentials and take care of yourself!',
            { screen: 'cycle' },
          );
          console.log(`✅ Period reminder sent to ${user.id}`);
        }

        // Ovulation reminder — on the day
        if (diffToOvulation === 0) {
          await sendNotification(
            user.fcmToken!,
            '🌕 Ovulation day!',
            'Today is your predicted ovulation day. Your energy is at its peak — great day for an intense workout!',
            { screen: 'cycle' },
          );
          console.log(`✅ Ovulation reminder sent to ${user.id}`);
        }
      }
    } catch (e) {
      console.error('❌ Period/ovulation cron error:', e);
    }
  });

  // ── 2. Step goal reminder — runs daily at 6 PM ───────────────────────
  cron.schedule('0 18 * * *', async () => {
    console.log('👟 Running step goal reminder cron...');
    try {
      const users = await prisma.user.findMany({
        where:  { fcmToken: { not: null } },
        select: {
          id:           true,
          fcmToken:     true,
          name:         true,
          dailyStepGoal: true,
        },
      });

      const todayStart = new Date();
      todayStart.setHours(0, 0, 0, 0);
      const todayEnd = new Date();
      todayEnd.setHours(23, 59, 59, 999);

      for (const user of users) {
        // Get today's step log
        const stepLog = await prisma.stepLog.findFirst({
          where: {
            userId:   user.id,
            loggedAt: { gte: todayStart, lte: todayEnd },
          },
        });

        const stepsToday = stepLog?.steps ?? 0;
        const goal       = user.dailyStepGoal ?? 10000;
        const remaining  = goal - stepsToday;

        // Only send if user hasn't met goal yet
        if (stepsToday < goal) {
          const message = stepsToday === 0
            ? `You haven't walked yet today! Take a ${goal >= 10000 ? '10k' : `${goal / 1000}k`} step walk to hit your goal 💪`
            : `You're ${remaining.toLocaleString()} steps away from your daily goal! Keep going! 🏃`;

          await sendNotification(
            user.fcmToken!,
            '👟 Step goal reminder',
            message,
            { screen: 'steps' },
          );
          console.log(`✅ Step reminder sent to ${user.id} (${stepsToday}/${goal} steps)`);
        }
      }
    } catch (e) {
      console.error('❌ Step goal cron error:', e);
    }
  });

  // ── 3. Trial/subscription expiry reminder — runs daily at 10 AM ──────
  cron.schedule('0 10 * * *', async () => {
    console.log('💳 Running subscription expiry reminder cron...');
    try {
      const users = await prisma.user.findMany({
        where:  { fcmToken: { not: null } },
        select: {
          id:       true,
          fcmToken: true,
          name:     true,
        },
      });

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      for (const user of users) {
        const sub = await prisma.subscription.findUnique({
          where: { userId: user.id },
        });

        if (!sub) continue;

        // Trial expiring in 3 days
        if (sub.trialEndDate) {
          const diffDays = Math.round(
            (sub.trialEndDate.getTime() - today.getTime()) /
            (1000 * 60 * 60 * 24),
          );

          if (diffDays === 3) {
            await sendNotification(
              user.fcmToken!,
              '⏳ Trial ending soon!',
              'Your free trial ends in 3 days. Subscribe now from ₹299/month to keep all premium features!',
              { screen: 'subscription' },
            );
            console.log(`✅ Trial expiry reminder sent to ${user.id}`);
          }

          if (diffDays === 1) {
            await sendNotification(
              user.fcmToken!,
              '🚨 Last day of trial!',
              'Your free trial ends tomorrow! Subscribe now to avoid losing access to premium features.',
              { screen: 'subscription' },
            );
            console.log(`✅ Trial last day reminder sent to ${user.id}`);
          }
        }

        // Paid subscription expiring in 3 days
        if (
          sub.currentPeriodEnd &&
          sub.plan !== 'free' &&
          sub.plan !== 'trial'
        ) {
          const diffDays = Math.round(
            (sub.currentPeriodEnd.getTime() - today.getTime()) /
            (1000 * 60 * 60 * 24),
          );

          if (diffDays === 3) {
            await sendNotification(
              user.fcmToken!,
              '💳 Subscription expiring soon!',
              'Your premium subscription expires in 3 days. Renew now to keep uninterrupted access!',
              { screen: 'subscription' },
            );
            console.log(`✅ Subscription expiry reminder sent to ${user.id}`);
          }
        }
      }
    } catch (e) {
      console.error('❌ Subscription expiry cron error:', e);
    }
  });

  // ── 4. Workout reminder — checks every minute for matching time ───────
  cron.schedule('* * * * *', async () => {
    const now     = new Date();
    const hours   = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeStr = `${hours}:${minutes}`;

    try {
      const users = await prisma.user.findMany({
        where: {
          fcmToken:            { not: null },
          workoutReminderTime: timeStr,
          workoutReminderOn:   true,
        },
        select: { id: true, fcmToken: true, name: true },
      });

      for (const user of users) {
        await sendNotification(
          user.fcmToken!,
          '💪 Time to work out!',
          "Your workout reminder is here. Let's crush today's session!",
          { screen: 'workout' },
        );
        console.log(`✅ Workout reminder sent to ${user.id}`);
      }
    } catch (e) {
      console.error('❌ Workout cron error:', e);
    }
  });
  
// ── 5. Monthly scan quota reset — runs daily at midnight ─────────────
cron.schedule('0 0 * * *', async () => {
  console.log('🔄 Running monthly scan quota reset cron...');
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Find all active paid subscriptions where periodStart was ~30 days ago
    const subscriptions = await prisma.subscription.findMany({
      where: {
        status: 'active',
        plan:   { notIn: ['trial', 'free'] },
      },
      include: {
        user: {
          include: { scanQuota: true },
        },
      },
    });

    for (const sub of subscriptions) {
  if (!sub.user.scanQuota) continue;  // ← sub.user.scanQuota not sub.scanQuota

  const periodStart    = new Date(sub.user.scanQuota.periodStart);
  const daysSinceReset = Math.round(
    (today.getTime() - periodStart.getTime()) / (1000 * 60 * 60 * 24),
  );

  // Reset every 30 days
  if (daysSinceReset >= 30) {
    const nextPeriodEnd = new Date(today);
    nextPeriodEnd.setDate(nextPeriodEnd.getDate() + 30);

    await prisma.scanQuota.update({
      where: { userId: sub.userId },
      data: {
        scansUsed:   0,
        scansLimit:  90,
        periodStart: today,
        periodEnd:   nextPeriodEnd,
      },
    });

    console.log(`✅ Scan quota reset for user ${sub.userId} — fresh 90 scans`);

    if (sub.user.fcmToken) {
      await sendNotification(
        sub.user.fcmToken,
        '🎉 Scans refreshed!',
        'Your monthly food scans have been reset. You have 90 fresh scans available!',
        { screen: 'nutrition' },
      );
    }
  }
}
  } catch (e) {
    console.error('❌ Scan quota reset cron error:', e);
  }
});
  

  console.log('✅ All notification crons started!');
};