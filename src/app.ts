import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { logger } from './middleware/logger.middleware';
import { errorHandler, notFoundHandler } from './middleware/error.middleware';

// Routes
import authRoutes      from './routes/auth.routes';
import userRoutes      from './routes/user.routes';
import stepsRoutes     from './routes/steps.routes';
import cycleRoutes from './routes/cycle.routes';
import nutritionRoutes from './routes/nutrition.routes';
import subscriptionRoutes from './routes/subscription.routes';
import workoutRoutes from './routes/workout.routes';



const app = express();

// Security
app.use(helmet());
app.use(cors({
  origin:      process.env.ALLOWED_ORIGINS?.split(',') || '*',
  credentials: true,
}));

// Parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging
app.use(logger);

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/auth',      authRoutes);
app.use('/api/user',      userRoutes);
app.use('/api/nutrition', nutritionRoutes);
app.use('/api/steps',     stepsRoutes);
app.use('/api/cycle', cycleRoutes);
app.use('/api/subscription', subscriptionRoutes);
app.use('/api/workout', workoutRoutes);



// 404 handler
app.use(notFoundHandler);

// Global error handler — must be last
app.use(errorHandler);

export default app;