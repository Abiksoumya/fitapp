import prisma from '../config/database';
import { UserCreateInput, UserUpdateInput } from '../models/user.model';

export const UserDao = {
  findById: async (id: string) => {
    return prisma.user.findUnique({
      where: { id },
      omit: { password: true },
    });
  },

  findByEmailWithPassword: async (email: string) => {
  return prisma.user.findUnique({
    where: { email },
  });
},

findByEmail: async (email: string) => {
  return prisma.user.findUnique({
    where: { email },
    omit:  { password: true },
  });
},

  create: async (data: UserCreateInput) => {
    return prisma.user.create({
      data,
      omit: { password: true },
    });
  },

  update: async (id: string, data: UserUpdateInput) => {
    return prisma.user.update({
      where: { id },
      data,
      omit: { password: true },
    });
  },

  saveRefreshToken: async (
    userId: string,
    token: string,
    expiresAt: Date,
  ) => {
    return prisma.refreshToken.create({
      data: { userId, token, expiresAt },
    });
  },

  findRefreshToken: async (token: string) => {
    return prisma.refreshToken.findUnique({
      where: { token },
      include: { user: true },
    });
  },

  deleteRefreshToken: async (token: string) => {
    return prisma.refreshToken.delete({
      where: { token },
    });
  },

  deleteAllRefreshTokens: async (userId: string) => {
    return prisma.refreshToken.deleteMany({
      where: { userId },
    });
  },

  deleteAccount: async (userId: string) => {
  // Delete all user data in correct order
  await prisma.$transaction([
    prisma.waterLog.deleteMany({       where: { userId } }),
    prisma.meal.deleteMany({           where: { userId } }),
    prisma.stepLog.deleteMany({        where: { userId } }),
    prisma.cycleLog.deleteMany({       where: { userId } }),
    prisma.workoutLog.deleteMany({     where: { userId } }),
    prisma.customWorkoutPlan.deleteMany({ where: { userId } }),
    prisma.scanQuota.deleteMany({      where: { userId } }),
    prisma.subscription.deleteMany({   where: { userId } }),
    prisma.refreshToken.deleteMany({   where: { userId } }),
    prisma.user.delete({               where: { id: userId } }),
  ]);
},
};