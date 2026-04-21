import prisma from '../config/database';

export const ScanQuotaDao = {
  // Get quota for user
  getByUserId: async (userId: string) => {
    return prisma.scanQuota.findUnique({
      where: { userId },
    });
  },

  // Create quota on subscription start
  create: async (
    userId:      string,
    scansLimit:  number,
    periodEnd:   Date,
  ) => {
    return prisma.scanQuota.upsert({
      where: { userId },
      update: {
        scansUsed:   0,
        scansLimit,
        extraScans:  0,
        periodStart: new Date(),
        periodEnd,
      },
      create: {
        userId,
        scansUsed:   0,
        scansLimit,
        extraScans:  0,
        periodStart: new Date(),
        periodEnd,
      },
    });
  },

  // Increment scan count
  incrementScan: async (userId: string) => {
    const quota = await prisma.scanQuota.findUnique({
      where: { userId },
    });

    if (!quota) throw new Error('Quota not found');

    // Use extra scans first if base quota exhausted
    if (quota.scansUsed >= quota.scansLimit) {
      return prisma.scanQuota.update({
        where: { userId },
        data:  { extraScans: { decrement: 1 } },
      });
    }

    return prisma.scanQuota.update({
      where: { userId },
      data:  { scansUsed: { increment: 1 } },
    });
  },

  // Add top-up scans
  addExtraScans: async (userId: string, scans: number) => {
    return prisma.scanQuota.update({
      where: { userId },
      data:  { extraScans: { increment: scans } },
    });
  },

  // Reset quota (call on billing renewal)
  reset: async (userId: string, scansLimit: number, periodEnd: Date) => {
    return prisma.scanQuota.update({
      where: { userId },
      data: {
        scansUsed:   0,
        scansLimit,
        periodStart: new Date(),
        periodEnd,
      },
    });
  },
};