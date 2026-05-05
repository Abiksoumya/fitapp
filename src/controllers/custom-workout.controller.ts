import { Response } from 'express';
import { AuthRequest } from '../types';
import { CustomWorkoutDao } from '../dao/custom-workout.dao';
import { sendSuccess, sendCreated } from '../utils/response.utils';
import { NotFoundError, AppError } from '../utils/errors.utils';

export const CustomWorkoutController = {

  getAll: async (req: AuthRequest, res: Response) => {
    const plans = await CustomWorkoutDao.getAllByUser(req.user!.id);
    sendSuccess(res, plans);
  },

  getById: async (req: AuthRequest, res: Response) => {
    const plan = await CustomWorkoutDao.getById(
      req.params.id as string,
      req.user!.id,
    );
    if (!plan) throw new NotFoundError('Plan not found');
    sendSuccess(res, plan);
  },

  create: async (req: AuthRequest, res: Response) => {
    const {
      name, category, difficulty, durationMin,
      caloriesBurn, description, exercises,
    } = req.body;

    if (!name) throw new AppError('Plan name is required', 400);
    if (!exercises || exercises.length === 0) {
      throw new AppError('At least one exercise is required', 400);
    }

    const plan = await CustomWorkoutDao.create(req.user!.id, {
      name,
      category:     category     || 'strength',
      difficulty:   difficulty   || 'beginner',
      durationMin:  durationMin  || 30,
      caloriesBurn: caloriesBurn || 200,
      description,
      exercises:    exercises.map((e: any, i: number) => ({
        ...e,
        order: i,
      })),
    });

    sendCreated(res, plan, 'Custom workout plan created!');
  },

  update: async (req: AuthRequest, res: Response) => {
    const existing = await CustomWorkoutDao.getById(
      req.params.id as string,
      req.user!.id,
    );
    if (!existing) throw new NotFoundError('Plan not found');

    const plan = await CustomWorkoutDao.update(
      req.params.id as string,
      req.user!.id,
      {
        ...req.body,
        exercises: req.body.exercises?.map(
          (e: any, i: number) => ({ ...e, order: i }),
        ),
      },
    );

    sendSuccess(res, plan, 'Plan updated successfully');
  },

  delete: async (req: AuthRequest, res: Response) => {
    const existing = await CustomWorkoutDao.getById(
      req.params.id as string,
      req.user!.id,
    );
    if (!existing) throw new NotFoundError('Plan not found');

    await CustomWorkoutDao.delete(req.params.id as string, req.user!.id);
    sendSuccess(res, null, 'Plan deleted successfully');
  },
};