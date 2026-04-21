import dotenv from 'dotenv';
dotenv.config();

const env = {
  NODE_ENV:               process.env.NODE_ENV || 'development',
  PORT:                   parseInt(process.env.PORT || '5000'),
  DATABASE_URL:           process.env.DATABASE_URL || '',
  JWT_SECRET:             process.env.JWT_SECRET || '',
  JWT_REFRESH_SECRET:     process.env.JWT_REFRESH_SECRET || '',
  JWT_EXPIRES_IN:         process.env.JWT_EXPIRES_IN || '15m',
  JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
  OPENAI_API_KEY:         process.env.OPENAI_API_KEY || '',
  CLOUDINARY_CLOUD_NAME:  process.env.CLOUDINARY_CLOUD_NAME || '',
  CLOUDINARY_API_KEY:     process.env.CLOUDINARY_API_KEY || '',
  CLOUDINARY_API_SECRET:  process.env.CLOUDINARY_API_SECRET || '',
  RAZORPAY_KEY_ID:        process.env.RAZORPAY_KEY_ID || '',
  RAZORPAY_KEY_SECRET:    process.env.RAZORPAY_KEY_SECRET || '',
  RAZORPAY_WEBHOOK_SECRET: process.env.RAZORPAY_WEBHOOK_SECRET || '',
};

// Only require critical vars
const required = ['DATABASE_URL', 'JWT_SECRET', 'JWT_REFRESH_SECRET'];

required.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});

export default env;