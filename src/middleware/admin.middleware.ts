import { Response, NextFunction } from 'express';
import { AuthRequest } from '../types';
import { ForbiddenError } from '../utils/errors.utils';
import { UserDao } from '../dao/user.dao';

export const requireAdmin = async (
  req:  AuthRequest,
  res:  Response,
  next: NextFunction,
) => {
  const user = await UserDao.findById(req.user!.id);
  if (!user || user.role !== 'admin') {
    throw new ForbiddenError('Admin access required');
  }
  next();
};