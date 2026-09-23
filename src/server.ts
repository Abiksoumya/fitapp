import app from './app';
import env from './config/env';
import prisma from './config/database';
import { startNotificationCrons } from './services/notification.service';
import logger from './config/logger';

const start = async () => {
  try {
    await prisma.$connect();
logger.info('✅ Database connected');

    app.listen(env.PORT, () => {
logger.info(`🚀 Server running on port ${env.PORT}`);
      logger.info(`📱 Environment: ${env.NODE_ENV}`);
      logger.info(`🏥 Health: http://localhost:${env.PORT}/health`);
    });
  } catch (error) {
    logger.error('❌ Failed to start server:', error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

start();
startNotificationCrons();

process.on('SIGTERM', async () => {
  logger.info('SIGTERM — shutting down gracefully');
  await prisma.$disconnect();
  process.exit(0);
});