import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { sendSuccess, sendCreated } from '../utils/response.utils';

export const AuthController = {
  register: async (req: Request, res: Response) => {
    const result = await AuthService.register(req.body);
    sendCreated(res, result, 'Account created successfully');
  },

  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const result = await AuthService.login(email, password);
    sendSuccess(res, result, 'Login successful');
  },

  refresh: async (req: Request, res: Response) => {
    const { refreshToken } = req.body;
    const result = await AuthService.refresh(refreshToken);
    sendSuccess(res, result, 'Token refreshed');
  },

  logout: async (req: Request, res: Response) => {
    const { refreshToken } = req.body;
    await AuthService.logout(refreshToken);
    sendSuccess(res, null, 'Logged out successfully');
  },
};