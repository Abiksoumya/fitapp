import app from './app';
import env from './config/env';
import prisma from './config/database';
import { execSync } from 'child_process';

const start = async () => {
  try {
    // Run migrations automatically on deploy
    if (process.env.NODE_ENV === 'production') {
      console.log('🔄 Running database migrations...');
      execSync('npx prisma migrate deploy', { stdio: 'inherit' });
      console.log('✅ Migrations complete');
    }

    // Test DB connection
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