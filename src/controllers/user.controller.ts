import { Response } from 'express';
import { AuthRequest } from '../types';
import { UserDao } from '../dao/user.dao';
import { WorkoutDao } from '../dao/workout.dao';
import { sendSuccess } from '../utils/response.utils';
import { NotFoundError } from '../utils/errors.utils';

export const UserController = {
  getMe: async (req: AuthRequest, res: Response) => {
    const user = await UserDao.findById(req.user!.id);
    if (!user) throw new NotFoundError('User not found');
    sendSuccess(res, user);
  },

  updateMe: async (req: AuthRequest, res: Response) => {
    const user = await UserDao.update(req.user!.id, req.body);
    sendSuccess(res, user, 'Profile updated');
  },

  getStats: async (req: AuthRequest, res: Response) => {
    const totalWorkouts = await WorkoutDao.getTotalCount(req.user!.id);
    sendSuccess(res, { totalWorkouts });
  },
};