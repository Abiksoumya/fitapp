import { Request, Response, NextFunction } from 'express';

type AsyncHandler = (
  req: any,
  res: Response,
  next: NextFunction,
) => Promise<any> | any;

export const asyncHandler =
  (fn: AsyncHandler) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      const result = fn(req, res, next);
      if (result && typeof result.catch === 'function') {
        result.catch(next);
      }
    } catch (err) {
      next(err);
    }
  };