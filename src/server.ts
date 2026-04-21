import app from './app';
import env from './config/env';
import prisma from './config/database';

const start = async () => {
  try {
    await prisma.$connect();
    console.log('✅ Database connected');

    app.listen(env.PORT, () => {
      console.log(`🚀 Server running on port ${env.PORT}`);
      console.log(`📱 Environment: ${env.NODE_ENV}`);
      console.log(`🏥 Health: http://localhost:${env.PORT}/health`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

start();

process.on('SIGTERM', async () => {
  console.log('SIGTERM — shutting down gracefully');
  await prisma.$disconnect();
  process.exit(0);
});