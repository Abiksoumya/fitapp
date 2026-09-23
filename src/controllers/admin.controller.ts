import { Response } from 'express';
import { AuthRequest } from '../types';
import { AdminDao } from '../dao/admin.dao';
import { sendSuccess } from '../utils/response.utils';
import prisma from '../config/database';
import { sendNotification } from '../config/firebase';
export const AdminController = {

  getOverview: async (req: AuthRequest, res: Response) => {
    const { from, to } = req.query;
    const fromDate = from ? new Date(from as string) : undefined;
    const toDate   = to   ? new Date(to   as string) : undefined;
    const data = await AdminDao.getOverviewStats(fromDate, toDate);
    sendSuccess(res, data);
  },

  getUsers: async (req: AuthRequest, res: Response) => {
    const page   = parseInt(req.query.page   as string) || 1;
    const limit  = parseInt(req.query.limit  as string) || 20;
    const search = req.query.search as string | undefined;
    const plan   = req.query.plan   as string | undefined;
    const data   = await AdminDao.getUsers(page, limit, search, plan);
    sendSuccess(res, data);
  },

getUserDetail: async (req: AuthRequest, res: Response) => {
    const id   = req.params.id as string;
    const data = await AdminDao.getUserDetail(id);
    sendSuccess(res, data);
  },

  getRevenueOverview: async (req: AuthRequest, res: Response) => {
    const { from, to } = req.query;
    const fromDate = from ? new Date(from as string) : undefined;
    const toDate   = to   ? new Date(to   as string) : undefined;
    const data = await AdminDao.getRevenueOverview(fromDate, toDate);
    sendSuccess(res, data);
  },

  getDailyRevenue: async (req: AuthRequest, res: Response) => {
    const to   = req.query.to   ? new Date(req.query.to   as string) : new Date();
    const from = req.query.from
      ? new Date(req.query.from as string)
      : new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const data = await AdminDao.getDailyRevenue(from, to);
    sendSuccess(res, data);
  },

  getRevenuePlans: async (req: AuthRequest, res: Response) => {
    const { from, to } = req.query;
    const fromDate = from ? new Date(from as string) : undefined;
    const toDate   = to   ? new Date(to   as string) : undefined;
    const data = await AdminDao.getRevenueOverview(fromDate, toDate);
    sendSuccess(res, { revenueByPlan: data.revenueByPlan });
  },

  getSubscriptions: async (req: AuthRequest, res: Response) => {
    const page   = parseInt(req.query.page   as string) || 1;
    const limit  = parseInt(req.query.limit  as string) || 20;
    const status = req.query.status as string | undefined;
    const data   = await AdminDao.getSubscriptions(page, limit, status);
    sendSuccess(res, data);
  },

  sendNotification: async (req: AuthRequest, res: Response) => {
    const { title, body, screen } = req.body;
    // Get all users with FCM tokens
    const users = await prisma.user.findMany({
      where: { fcmToken: { not: null } },
      select: { fcmToken: true },
    });
    
    await Promise.all(
      users.map(u => sendNotification(
        u.fcmToken!,
        title,
        body,
        { screen },
      ))
    );
    sendSuccess(res, null, `Notification sent to ${users.length} users`);
  },
};