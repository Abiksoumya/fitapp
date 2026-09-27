import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host:   'smtp.zoho.in',  // India server
  port:   465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

export default transporter;