import { z } from 'zod';

export const logMealSchema = z.object({
  body: z.object({
    name:      z.string().min(1).max(200),
    mealType:  z.enum(['breakfast', 'lunch', 'dinner', 'snack']),
    calories:  z.number().min(0).max(5000),
    protein:   z.number().min(0).max(500).default(0),
    carbs:     z.number().min(0).max(500).default(0),
    fat:       z.number().min(0).max(500).default(0),
    fibre:     z.number().min(0).max(100).default(0),
    imageUrl:  z.string().url().optional(),
    aiScanned: z.boolean().default(false),
  }),
});

export const logWaterSchema = z.object({
  body: z.object({
    glasses: z.number().int().min(1).max(20),
  }),
});

export const deleteMealSchema = z.object({
  params: z.object({
    id: z.string().min(1),
  }),
});