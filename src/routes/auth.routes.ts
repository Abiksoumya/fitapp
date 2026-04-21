import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { validate } from '../middleware/validate.middleware';
import { asyncHandler } from '../utils/async.utils';
import {
  registerSchema,
  loginSchema,
  refreshSchema,
} from '../schemas/auth.schema';

const router = Router();

router.post('/register', validate(registerSchema), asyncHandler(AuthController.register));
router.post('/login',    validate(loginSchema),    asyncHandler(AuthController.login));
router.post('/refresh',  validate(refreshSchema),  asyncHandler(AuthController.refresh));
router.post('/logout',   asyncHandler(AuthController.logout));

export default router;