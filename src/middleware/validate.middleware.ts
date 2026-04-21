import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';
import { ValidationError } from '../utils/errors.utils';

export const validate =
  (schema: ZodSchema) =>
  (req: Request, _res: Response, next: NextFunction): void => {
    try {
      schema.parse({
        body:   req.body,
        query:  req.query,
        params: req.params,
      });
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        const message = (err as ZodError).issues
          .map((e) => `${e.path.join('.')}: ${e.message}`)
          .join(', ');
        throw new ValidationError(message);
      }
      next(err);
    }
  };