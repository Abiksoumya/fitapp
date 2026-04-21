import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/errors.utils';
import { sendError } from '../utils/response.utils';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  console.error(`[ERROR] ${err.message}`, err.stack);

  if (err instanceof AppError) {
    sendError(res, err.message, err.statusCode);
    return;
  }

  // Prisma errors
  if (err.constructor.name === 'PrismaClientKnownRequestError') {
    const prismaErr = err as any;
    if (prismaErr.code === 'P2002') {
      sendError(res, 'Resource already exists', 409);
      return;
    }
    if (prismaErr.code === 'P2025') {
      sendError(res, 'Resource not found', 404);
      return;
    }
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    sendError(res, 'Invalid token', 401);
    return;
  }

  if (err.name === 'TokenExpiredError') {
    sendError(res, 'Token expired', 401);
    return;
  }

  // Generic fallback
  sendError(
    res,
    'Internal server error',
    500,
    process.env.NODE_ENV === 'development' ? err.message : undefined,
  );
};

export const notFoundHandler = (
  req: Request,
  res: Response,
): void => {
  sendError(res, `Route ${req.originalUrl} not found`, 404);
};