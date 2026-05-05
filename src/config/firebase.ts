import * as admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { join } from 'path';

// Load service account safely
const serviceAccount = JSON.parse(
  readFileSync(
    join(__dirname, '../../make-me-fit-4cde4-firebase-adminsdk-fbsvc-8980a46cd3.json'),
    'utf-8',
  ),
);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const fcm = admin.messaging();

export const sendNotification = async (
  fcmToken: string,
  title:    string,
  body:     string,
  data?:    Record<string, string>,
): Promise<void> => {
  try {
    await fcm.send({
      token:        fcmToken,
      notification: { title, body },
      data:         data ?? {},
      apns: {
        payload: {
          aps: {
            sound: 'default',
            badge: 1,
          },
        },
      },
      android: {
        priority:     'high',
        notification: {
          sound:       'default',
          channelId:   'makemefit_channel',
          clickAction: 'FLUTTER_NOTIFICATION_CLICK',
        },
      },
    });
    console.log('✅ Notification sent to ${fcmToken.substring(0, 20)}...');
  } catch (e) {
    console.error('FCM send error:', e);
  }
};