import prisma from '../config/database';

export const AdminDao = {

  // ── Overview Stats ────────────────────────────────────────
  getOverviewStats: async (from?: Date, to?: Date) => {
    const dateFilter = from && to
      ? { createdAt: { gte: from, lte: to } }
      : {};

    const [
      totalUsers,
      activeSubscriptions,
      trialUsers,
      expiredUsers,
      totalRevenueData,
      newUsersToday,
    ] = await Promise.all([

      prisma.user.count({
        where: { role: 'user' },
      }),

      prisma.subscription.count({
        where: {
          status: 'active',
          plan:   { notIn: ['trial', 'free'] },
          ...dateFilter,
        },
      }),

      prisma.subscription.count({
        where: {
          plan:   'trial',
          status: 'active',
          ...dateFilter,
        },
      }),

      prisma.subscription.count({
        where: {
          status: 'expired',
          ...dateFilter,
        },
      }),

      prisma.payment.aggregate({
        where: {
          status: 'captured',
          ...dateFilter,
        },
        _sum: { amount: true },
      }),

      prisma.user.count({
        where: {
          role:      'user',
          createdAt: {
            gte: new Date(new Date().setHours(0,  0,  0,  0)),
            lte: new Date(new Date().setHours(23, 59, 59, 999)),
          },
        },
      }),
    ]);

    return {
      totalUsers,
      activeSubscriptions,
      trialUsers,
      expiredUsers,
      totalRevenue: (totalRevenueData._sum.amount || 0) / 100,
      newUsersToday,
    };
  },

  // ── Users ─────────────────────────────────────────────────
  getUsers: async (
    page:    number,
    limit:   number,
    search?: string,
    plan?:   string,
  ) => {
    const skip  = (page - 1) * limit;
    const where: any = { role: 'user' };

    if (search) {
      where.OR = [
        { name:  { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (plan) {
      where.subscription = { plan };
    }

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        skip,
        take:    limit,
        orderBy: { createdAt: 'desc' },
        select: {
          id:        true,
          name:      true,
          email:     true,
          gender:    true,
          createdAt: true,
          subscription: {
            select: {
              plan:      true,
              status:    true,
              expiresAt: true,
            },
          },
        },
      }),
      prisma.user.count({ where }),
    ]);

    return {
      users,
      total,
      pages: Math.ceil(total / limit),
      page,
    };
  },

  // ── User Detail ───────────────────────────────────────────
  getUserDetail: async (userId: string) => {
    return prisma.user.findUnique({
      where: { id: userId },
      select: {
        id:        true,
        name:      true,
        email:     true,
        gender:    true,
        weightKg:  true,
        heightCm:  true,
        createdAt: true,
        subscription: {
          select: {
            plan:      true,
            status:    true,
            expiresAt: true,
          },
        },
        scanQuota: {
          select: {
            scansUsed:  true,
            scansLimit: true,
            extraScans: true,
          },
        },
        stepLogs: {
          orderBy: { loggedAt: 'desc' },
          take:    7,
          select: {
            steps:    true,
            loggedAt: true,
          },
        },
        payments: {
          orderBy: { createdAt: 'desc' },
          take:    5,
          select: {
            amount:    true,
            status:    true,
            type:      true,
            plan:      true,
            createdAt: true,
          },
        },
      },
    });
  },

  // ── Revenue Overview ──────────────────────────────────────
  getRevenueOverview: async (from?: Date, to?: Date) => {
    const dateFilter = from && to
      ? { createdAt: { gte: from, lte: to } }
      : {};

    const [totalData, revenueByPlan, topUpData] = await Promise.all([

      prisma.payment.aggregate({
        where: {
          status: 'captured',
          ...dateFilter,
        },
        _sum: { amount: true },
      }),

      prisma.payment.groupBy({
        by:    ['plan'],
        where: {
          status: 'captured',
          type:   'subscription',
          ...dateFilter,
        },
        _sum:   { amount: true },
        _count: { id: true },
      }),

      prisma.payment.aggregate({
        where: {
          status: 'captured',
          type:   'topup',
          ...dateFilter,
        },
        _sum: { amount: true },
      }),
    ]);

    return {
      totalRevenue:  (totalData._sum.amount   || 0) / 100,
      topUpRevenue:  (topUpData._sum.amount   || 0) / 100,
      revenueByPlan: revenueByPlan.map(r => ({
        plan:    r.plan,
        revenue: (r._sum.amount || 0) / 100,
        count:   r._count.id,
      })),
    };
  },

  // ── Daily Revenue ─────────────────────────────────────────
  getDailyRevenue: async (from: Date, to: Date) => {
    const payments = await prisma.payment.findMany({
      where: {
        status:    'captured',
        createdAt: { gte: from, lte: to },
      },
      select: {
        amount:    true,
        plan:      true,
        type:      true,
        createdAt: true,
      },
      orderBy: { createdAt: 'asc' },
    });

    const grouped: Record<string, number> = {};
    for (const payment of payments) {
      const date      = payment.createdAt.toISOString().substring(0, 10);
      grouped[date]   = (grouped[date] || 0) + (payment.amount / 100);
    }

    return Object.entries(grouped).map(([date, revenue]) => ({
      date,
      revenue,
    }));
  },

  // ── Subscriptions ─────────────────────────────────────────
  getSubscriptions: async (
    page:    number,
    limit:   number,
    status?: string,
  ) => {
    const skip  = (page - 1) * limit;
    const where: any = {};
    if (status) where.status = status;

    const [subscriptions, total] = await Promise.all([
      prisma.subscription.findMany({
        where,
        skip,
        take:    limit,
        orderBy: { createdAt: 'desc' },
        include: {
          user: {
            select: {
              name:  true,
              email: true,
            },
          },
        },
      }),
      prisma.subscription.count({ where }),
    ]);

    return {
      subscriptions,
      total,
      pages: Math.ceil(total / limit),
      page,
    };
  },
};