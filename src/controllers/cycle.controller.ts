import { Response } from 'express';
import { AuthRequest } from '../types';
import { CycleService } from '../services/cycle.service';
import { sendSuccess, sendCreated } from '../utils/response.utils';

export const CycleController = {
  getCurrent: async (req: AuthRequest, res: Response) => {
    const status = await CycleService.getCurrentStatus(req.user!.id);
    sendSuccess(res, status);
  },

  logPeriod: async (req: AuthRequest, res: Response) => {
    const log = await CycleService.logPeriod(
      req.user!.id,
      new Date(req.body.periodStart),
    );
    sendCreated(res, log, 'Period logged');
  },

  getHistory: async (req: AuthRequest, res: Response) => {
    const history = await CycleService.getHistory(req.user!.id);
    sendSuccess(res, history);
  },

  logSymptoms: async (req: AuthRequest, res: Response) => {
    const log = await CycleService.logSymptoms(
      req.user!.id,
      req.body.symptoms,
    );
    sendCreated(res, log, 'Symptoms logged');
  },
};