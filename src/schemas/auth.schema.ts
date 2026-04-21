import { z } from 'zod';

export const registerSchema = z.object({
  body: z.object({
    email: z
      .string()
      .email('Invalid email address')
      .toLowerCase(),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'Password must contain uppercase, lowercase and number',
      ),
    name: z
      .string()
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name too long'),
    age: z.number().min(13).max(100).optional(),
    gender: z
      .enum(['female', 'male', 'other'])
      .default('other'),
    fitnessLevel: z
      .enum(['beginner', 'intermediate', 'advanced'])
      .default('beginner'),
    fitnessGoal: z
      .enum([
        'lose_weight',
        'build_muscle',
        'stay_fit',
        'boost_energy',
        'improve_health',
      ])
      .default('stay_fit'),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email:    z.string().email().toLowerCase(),
    password: z.string().min(1, 'Password required'),
  }),
});

export const refreshSchema = z.object({
  body: z.object({
    refreshToken: z.string().min(1, 'Refresh token required'),
  }),
});