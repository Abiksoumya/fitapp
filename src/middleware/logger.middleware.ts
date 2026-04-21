import morgan from 'morgan';
import { Request, Response } from 'express';

const format = process.env.NODE_ENV === 'production'
  ? 'combined'
  : ':method :url :status :res[content-length] - :response-time ms';

export const logger = morgan(format, {
  skip: (_req: Request, res: Response) => {
    return process.env.NODE_ENV === 'test';
  },
});