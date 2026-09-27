import transporter from '../config/mailer';
import logger from '../config/logger';

const FROM = `MakeMeFit <${process.env.EMAIL_USER}>`;

export const EmailService = {

  // Welcome email after registration
  sendWelcome: async (to: string, name: string) => {
    try {
      await transporter.sendMail({
        from:    FROM,
        to,
        subject: '🎉 Welcome to MakeMeFit!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0d1f1e; color: #ffffff; padding: 30px; border-radius: 12px;">
            <h1 style="color: #00FFFF;">Welcome to MakeMeFit, ${name}! 🎉</h1>
            <p>Your account has been created successfully.</p>
            <p>You have <strong style="color: #00FFFF;">15 days free trial</strong> to explore all premium features!</p>
            <h3 style="color: #00FFFF;">What you can do:</h3>
            <ul>
              <li>🍎 Scan food with AI</li>
              <li>💪 Follow workout plans</li>
              <li>👣 Track your steps</li>
              <li>🌸 Monitor your cycle</li>
              <li>💧 Track water intake</li>
            </ul>
            <p>Start your fitness journey today!</p>
            <p style="color: #888;">— MakeMeFit Team</p>
          </div>
        `,
      });
      logger.info(`Welcome email sent to ${to}`);
    } catch (e) {
      logger.error(`Failed to send welcome email to ${to}: ${e}`);
    }
  },

  // Subscription confirmation
  sendSubscriptionConfirmation: async (
    to:     string,
    name:   string,
    plan:   string,
    amount: number,
    expiresAt: Date,
  ) => {
    try {
      await transporter.sendMail({
        from:    FROM,
        to,
        subject: '✅ Subscription Confirmed — MakeMeFit',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0d1f1e; color: #ffffff; padding: 30px; border-radius: 12px;">
            <h1 style="color: #00FFFF;">Subscription Confirmed! ✅</h1>
            <p>Hi ${name},</p>
            <p>Your subscription has been activated successfully.</p>
            <div style="background: #0a2e2a; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Plan:</strong> ${plan}</p>
              <p><strong>Amount Paid:</strong> ₹${amount}</p>
              <p><strong>Valid Until:</strong> ${expiresAt.toDateString()}</p>
            </div>
            <p>Enjoy all premium features!</p>
            <p style="color: #888;">— MakeMeFit Team</p>
          </div>
        `,
      });
      logger.info(`Subscription confirmation sent to ${to}`);
    } catch (e) {
      logger.error(`Failed to send subscription email to ${to}: ${e}`);
    }
  },

  // Trial expiry reminder
  sendTrialExpiryReminder: async (
    to:       string,
    name:     string,
    daysLeft: number,
  ) => {
    try {
      await transporter.sendMail({
        from:    FROM,
        to,
        subject: `⏳ Your free trial expires in ${daysLeft} days — MakeMeFit`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0d1f1e; color: #ffffff; padding: 30px; border-radius: 12px;">
            <h1 style="color: #FF9800;">Trial Ending Soon! ⏳</h1>
            <p>Hi ${name},</p>
            <p>Your free trial expires in <strong style="color: #FF9800;">${daysLeft} days</strong>.</p>
            <p>Upgrade now to continue enjoying:</p>
            <ul>
              <li>🍎 AI Food Scanner</li>
              <li>💪 Custom Workout Plans</li>
              <li>📊 Nutrition Tracking</li>
            </ul>
            <div style="margin: 20px 0;">
              <p><strong style="color: #00FFFF;">Plans starting from ₹249/month</strong></p>
            </div>
            <p style="color: #888;">— MakeMeFit Team</p>
          </div>
        `,
      });
      logger.info(`Trial expiry reminder sent to ${to}`);
    } catch (e) {
      logger.error(`Failed to send trial expiry email to ${to}: ${e}`);
    }
  },

  // Payment receipt
  sendPaymentReceipt: async (
    to:        string,
    name:      string,
    amount:    number,
    paymentId: string,
    plan:      string,
  ) => {
    try {
      await transporter.sendMail({
        from:    FROM,
        to,
        subject: '🧾 Payment Receipt — MakeMeFit',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0d1f1e; color: #ffffff; padding: 30px; border-radius: 12px;">
            <h1 style="color: #00FFFF;">Payment Receipt 🧾</h1>
            <p>Hi ${name},</p>
            <p>Thank you for your payment!</p>
            <div style="background: #0a2e2a; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Payment ID:</strong> ${paymentId}</p>
              <p><strong>Plan:</strong> ${plan}</p>
              <p><strong>Amount:</strong> ₹${amount}</p>
              <p><strong>Date:</strong> ${new Date().toDateString()}</p>
              <p><strong>Status:</strong> <span style="color: #4CAF50;">Successful ✅</span></p>
            </div>
            <p style="color: #888;">— MakeMeFit Team</p>
          </div>
        `,
      });
      logger.info(`Payment receipt sent to ${to}`);
    } catch (e) {
      logger.error(`Failed to send payment receipt to ${to}: ${e}`);
    }
  },

  // Data deletion confirmation
  sendDataDeletionConfirmation: async (to: string, name: string) => {
    try {
      await transporter.sendMail({
        from:    FROM,
        to,
        subject: '🗑️ Account Deletion Confirmed — MakeMeFit',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0d1f1e; color: #ffffff; padding: 30px; border-radius: 12px;">
            <h1 style="color: #EF5350;">Account Deleted 🗑️</h1>
            <p>Hi ${name},</p>
            <p>Your account and all associated data have been permanently deleted from MakeMeFit.</p>
            <p>This includes:</p>
            <ul>
              <li>Personal information</li>
              <li>Nutrition logs</li>
              <li>Step history</li>
              <li>Workout history</li>
              <li>Cycle logs</li>
            </ul>
            <p>We're sorry to see you go. If you change your mind, you can always create a new account.</p>
            <p style="color: #888;">— MakeMeFit Team</p>
          </div>
        `,
      });
      logger.info(`Data deletion confirmation sent to ${to}`);
    } catch (e) {
      logger.error(`Failed to send deletion email to ${to}: ${e}`);
    }
  },
};