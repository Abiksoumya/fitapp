import { z } from 'zod';

export const logPeriodSchema = z.object({
  body: z.object({
    periodStart: z.string().datetime(),
  }),
});

export const logSymptomsSchema = z.object({
  body: z.object({
    symptoms: z
      .array(z.string())
      .min(1, 'At least one symptom required'),
  }),
});