import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { validate } from '../middleware/validate.middleware';
import { asyncHandler } from '../utils/async.utils';
import {
  registerSchema,
  loginSchema,
  refreshSchema,
} from '../schemas/auth.schema';
import rateLimit from 'express-rate-limit';


const authLimiter = rateLimit({
  windowMs:        15 * 60 * 1000,
  max:             5,
  standardHeaders: true,
  legacyHeaders:   false,
  keyGenerator:    (req) => req.ip || 'unknown',
  handler: (_req, res) => {
    res.status(429).json({
      success: false,
      message: 'Too many attempts. Please try again after 15 minutes.',
    });
  },
});

const router = Router();

router.post('/register', authLimiter, validate(registerSchema), asyncHandler(AuthController.register));
router.post('/login',    authLimiter, validate(loginSchema),    asyncHandler(AuthController.login));
router.post('/refresh',  validate(refreshSchema),  asyncHandler(AuthController.refresh));
router.post('/logout',   asyncHandler(AuthController.logout));

export default router;