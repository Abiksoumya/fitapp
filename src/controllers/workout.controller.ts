import { Response } from 'express';
import { AuthRequest } from '../types';
import { WorkoutDao } from '../dao/workout.dao';
import { sendSuccess, sendCreated } from '../utils/response.utils';

export const WorkoutController = {

  getToday: async (req: AuthRequest, res: Response) => {
    // For now returns a hardcoded plan
    // Later this will be AI generated based on user goal + cycle phase
    const plan = {
      name:       'Upper Body Strength',
      difficulty: 'moderate',
      durationMin: 45,
      caloriesBurned: 320,
      exercises: [
        { name: 'Bench Press',     sets: 4, reps: 10, weight: '60kg',       muscle: 'Chest',     isDone: false },
        { name: 'Shoulder Press',  sets: 3, reps: 12, weight: '20kg',       muscle: 'Shoulders', isDone: false },
        { name: 'Tricep Dips',     sets: 3, reps: 15, weight: 'Bodyweight', muscle: 'Triceps',   isDone: false },
        { name: 'Cable Flyes',     sets: 3, reps: 12, weight: '15kg',       muscle: 'Chest',     isDone: false },
        { name: 'Lateral Raises',  sets: 3, reps: 15, weight: '8kg',        muscle: 'Shoulders', isDone: false },
        { name: 'Tricep Pushdown', sets: 3, reps: 15, weight: '25kg',       muscle: 'Triceps',   isDone: false },
      ],
    };
    sendSuccess(res, plan);
  },

  getHistory: async (req: AuthRequest, res: Response) => {
    const history = await WorkoutDao.getHistory(req.user!.id);
    sendSuccess(res, history);
  },

  complete: async (req: AuthRequest, res: Response) => {
    const {
      workoutName,
      durationMin,
      caloriesBurned,
      exercises,
    } = req.body;

    const log = await WorkoutDao.logWorkout(req.user!.id, {
      workoutName:    workoutName    || 'Workout',
      durationMin:    durationMin    || 0,
      caloriesBurned: caloriesBurned || 0,
      exercises:      exercises      || [],
    });

    sendCreated(res, log, 'Workout completed! Great job!');
  },
};