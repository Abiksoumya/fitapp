import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { logger } from './middleware/logger.middleware';
import { errorHandler, notFoundHandler } from './middleware/error.middleware';
import rateLimit from 'express-rate-limit';

// Routes
import authRoutes      from './routes/auth.routes';
import userRoutes      from './routes/user.routes';
import stepsRoutes     from './routes/steps.routes';
import cycleRoutes from './routes/cycle.routes';
import nutritionRoutes from './routes/nutrition.routes';
import subscriptionRoutes from './routes/subscription.routes';
import workoutRoutes from './routes/workout.routes';
import customWorkoutRoutes from './routes/custom-workout.routes';
import notificationRoutes from './routes/notification.routes';
import adminRoutes from './routes/admin.routes';



const app = express();

// ── Security headers ────────────────────────────────────────
app.use(helmet({
  contentSecurityPolicy:   false, // disabled for mobile API
  crossOriginEmbedderPolicy: false,
}));
app.use(cors({
  origin:      process.env.ALLOWED_ORIGINS?.split(',') || '*',
  credentials: true,
}));


// ── Rate limiters ───────────────────────────────────────────

// General API — 100 req/min per user
const generalLimiter = rateLimit({
  windowMs:         60 * 1000, // 1 minute
  max:              100,
  standardHeaders:  true,
  legacyHeaders:    false,
  keyGenerator:     (req) => {
    // Rate limit per user (JWT) if authenticated, else per IP
    return (req as any).user?.id || req.ip || 'unknown';
  },
  handler: (_req, res) => {
    res.status(429).json({
      success: false,
      message: 'Too many requests. Please slow down.',
    });
  },
});

// Auth endpoints — 5 req/15 min per IP
const authLimiter = rateLimit({
  windowMs:        15 * 60 * 1000, // 15 minutes
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

// OTP — 3 req/hour per IP
const otpLimiter = rateLimit({
  windowMs:        60 * 60 * 1000, // 1 hour
  max:             3,
  standardHeaders: true,
  legacyHeaders:   false,
  keyGenerator:    (req) => req.ip || 'unknown',
  handler: (_req, res) => {
    res.status(429).json({
      success: false,
      message: 'Too many OTP requests. Please try again after 1 hour.',
    });
  },
});

// Food scan — 10 req/min per user
const scanLimiter = rateLimit({
  windowMs:        60 * 1000, // 1 minute
  max:             10,
  standardHeaders: true,
  legacyHeaders:   false,
  keyGenerator:    (req) => (req as any).user?.id || req.ip || 'unknown',
  handler: (_req, res) => {
    res.status(429).json({
      success: false,
      message: 'Too many scan requests. Please wait a moment.',
    });
  },
});
// Steps sync — 10 req/min per user
const stepsLimiter = rateLimit({
  windowMs:        60 * 1000,
  max:             10,
  standardHeaders: true,
  legacyHeaders:   false,
  keyGenerator:    (req) => (req as any).user?.id || req.ip || 'unknown',
  handler: (_req, res) => {
    res.status(429).json({
      success: false,
      message: 'Too many step sync requests.',
    });
  },
});

// Parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging
app.use(logger);

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ── API Routes ──────────────────────────────────────────────
app.use('/api/auth',                authRoutes);
app.use('/api/auth/send-otp',    otpLimiter,    authRoutes);
app.use('/api/user',             generalLimiter, userRoutes);
app.use('/api/nutrition',        generalLimiter, nutritionRoutes);
app.use('/api/nutrition/scan',   scanLimiter,   nutritionRoutes);
app.use('/api/steps',            stepsLimiter,  stepsRoutes);
app.use('/api/cycle',            generalLimiter, cycleRoutes);
app.use('/api/subscription',     generalLimiter, subscriptionRoutes);
app.use('/api/workout',          generalLimiter, workoutRoutes);
app.use('/api/workout/custom',   generalLimiter, customWorkoutRoutes);
app.use('/api/notifications',    generalLimiter, notificationRoutes);
app.use('/api/admin', adminRoutes);


// 404 handler
app.use(notFoundHandler);

// Global error handler — must be last
app.use(errorHandler);

export default app;