import { UserDao } from '../dao/user.dao';
import { hashPassword, comparePassword } from '../utils/hash.utils';
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from '../utils/jwt.utils';
import {
  ConflictError,
  UnauthorizedError,
  NotFoundError,
} from '../utils/errors.utils';
import { UserCreateInput } from '../models/user.model';
import { SubscriptionService } from './subscription.service';

export const AuthService = {
  register: async (input: UserCreateInput) => {
    const existing = await UserDao.findByEmail(input.email);
    if (existing) throw new ConflictError('Email already registered');

    const hashedPassword = await hashPassword(input.password);

    const user = await UserDao.create({
      ...input,
      password: hashedPassword,
    });
    await SubscriptionService.initFreeUser(user.id);


    const accessToken  = generateAccessToken({
      id:     user.id,
      email:  user.email,
      gender: user.gender,
    });

    const refreshToken = generateRefreshToken({
      id:     user.id,
      email:  user.email,
      gender: user.gender,
    });

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);
    await UserDao.saveRefreshToken(user.id, refreshToken, expiresAt);

    return { user };
  },

  login: async (email: string, password: string) => {
    const user = await UserDao.findByEmail(email);
    if (!user) throw new UnauthorizedError('Invalid email or password');

    const isValid = await comparePassword(password, user.password);
    if (!isValid) throw new UnauthorizedError('Invalid email or password');

    const accessToken  = generateAccessToken({
      id:     user.id,
      email:  user.email,
      gender: user.gender,
    });

    const refreshToken = generateRefreshToken({
      id:     user.id,
      email:  user.email,
      gender: user.gender,
    });

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);
    await UserDao.saveRefreshToken(user.id, refreshToken, expiresAt);

    const { password: _, ...userWithoutPassword } = user;

    return {  accessToken, refreshToken };
  },

  refresh: async (token: string) => {
    const stored = await UserDao.findRefreshToken(token);
    if (!stored) throw new UnauthorizedError('Invalid refresh token');

    if (stored.expiresAt < new Date()) {
      await UserDao.deleteRefreshToken(token);
      throw new UnauthorizedError('Refresh token expired');
    }

    const payload = verifyRefreshToken(token);

    const accessToken = generateAccessToken({
      id:     payload.id,
      email:  payload.email,
      gender: payload.gender,
    });

    return { accessToken };
  },

  logout: async (token: string) => {
    await UserDao.deleteRefreshToken(token).catch(() => null);
  },
};