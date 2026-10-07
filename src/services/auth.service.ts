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
import { EmailService } from './email.service';
import { verifyGoogleToken } from './google.auth.service';

export const AuthService = {
  register: async (input: UserCreateInput) => {
    const existing = await UserDao.findByEmail(input.email);
    if (existing) throw new ConflictError('Email already registered');

    const hashedPassword = await hashPassword(input.password);

    const user = await UserDao.create({
      ...input,
      password: hashedPassword,
      privacyConsentAt: new Date(),
  dataConsentAt:    new Date(),
  consentVersion:   '1.0',
    });
    await SubscriptionService.initFreeUser(user.id);
// Send welcome email
EmailService.sendWelcome(user.email, user.name).catch(() => null);

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
  const user = await UserDao.findByEmailWithPassword(email);
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

  googleAuth: async (idToken: string) => {
  const googleUser = await verifyGoogleToken(idToken);

  // Check if user exists
  let existingUser = await UserDao.findByEmail(googleUser.email);
  const isNewUser  = !existingUser;

  if (!existingUser) {
    // Create new user
    existingUser = await UserDao.create({
  email:            googleUser.email,
  name:             googleUser.name,
  password:         '',
  gender:           'other',
  googleId:         googleUser.googleId,
  fitnessGoal:      'stay_fit',
  fitnessLevel:     'beginner',
  dailyCalGoal:     1800,
  dailyProteinGoal: 120,
  dailyCarbsGoal:   250,
  dailyFatGoal:     65,
});

    // Init free trial
    await SubscriptionService.initFreeUser(existingUser.id);

    // Send welcome email
    EmailService.sendWelcome(existingUser.email, existingUser.name).catch(() => null);
  }

  const accessToken  = generateAccessToken({
    id:     existingUser.id,
    email:  existingUser.email,
    gender: existingUser.gender,
  });

  const refreshToken = generateRefreshToken({
    id:     existingUser.id,
    email:  existingUser.email,
    gender: existingUser.gender,
  });

  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 7);
  await UserDao.saveRefreshToken(existingUser.id, refreshToken, expiresAt);

  return {
    accessToken,
    refreshToken,
    isNewUser,
    user: {
      id:     existingUser.id,
      name:   existingUser.name,
      email:  existingUser.email,
      gender: existingUser.gender,
    },
  };
},
};