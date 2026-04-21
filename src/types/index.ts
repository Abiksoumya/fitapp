import { Request } from 'express';

export interface AuthRequest extends Request {
  user?: {
    id:     string;
    email:  string;
    gender: string;
  };
}

export interface ApiResponse<T = null> {
  success: boolean;
  message: string;
  data?:   T;
  error?:  string;
}

export type Gender = 'female' | 'male' | 'other';
export type FitnessLevel = 'beginner' | 'intermediate' | 'advanced';
export type FitnessGoal =
  | 'lose_weight'
  | 'build_muscle'
  | 'stay_fit'
  | 'boost_energy'
  | 'improve_health';

export type CyclePhase =
  | 'menstrual'
  | 'follicular'
  | 'ovulation'
  | 'luteal';