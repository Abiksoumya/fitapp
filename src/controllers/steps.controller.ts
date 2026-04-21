import { Response } from 'express';
import { AuthRequest } from '../types';
import { StepsDao } from '../dao/steps.dao';
import { sendSuccess, sendCreated } from '../utils/response.utils';

export const StepsController = {
  sync: async (req: AuthRequest, res: Response) => {
    const { steps, distance, calories, activeMin, loggedAt } = req.body;
    const log = await StepsDao.sync(req.user!.id, {
      steps,
      distance:  distance  || 0,
      calories:  calories  || 0,
      activeMin: activeMin || 0,
      loggedAt:  loggedAt ? new Date(loggedAt) : new Date(),
    });
    sendCreated(res, log, 'Steps synced');
  },

  getWeekly: async (req: AuthRequest, res: Response) => {
    const data = await StepsDao.getWeekly(req.user!.id);
    sendSuccess(res, data);
  },

  getToday: async (req: AuthRequest, res: Response) => {
    const data = await StepsDao.getToday(req.user!.id);
    sendSuccess(res, data || { steps: 0, distance: 0, calories: 0, activeMin: 0 });
  },
};