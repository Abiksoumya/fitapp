import { CycleDao } from '../dao/cycle.dao';
import { CycleStatus, CyclePhase } from '../models/cycle.model';
import { NotFoundError } from '../utils/errors.utils';

const getCyclePhase = (dayOfCycle: number): CyclePhase => {
  if (dayOfCycle <= 5)  return 'menstrual';
  if (dayOfCycle <= 13) return 'follicular';
  if (dayOfCycle === 14) return 'ovulation';
  return 'luteal';
};

export const CycleService = {
  getCurrentStatus: async (userId: string): Promise<CycleStatus> => {
    const latest = await CycleDao.getLatest(userId);
    if (!latest) throw new NotFoundError('No cycle data found. Please log your period first.');

    const today         = new Date();
    const periodStart   = new Date(latest.periodStart);
    const cycleLength   = latest.cycleLength;
    const dayOfCycle    = Math.floor(
      (today.getTime() - periodStart.getTime()) / (1000 * 60 * 60 * 24),
    ) + 1;

    const nextPeriodDate = new Date(periodStart);
    nextPeriodDate.setDate(nextPeriodDate.getDate() + cycleLength);

    const ovulationDate = new Date(periodStart);
    ovulationDate.setDate(ovulationDate.getDate() + 14);

    const fertileStart = new Date(periodStart);
    fertileStart.setDate(fertileStart.getDate() + 10);

    const fertileEnd = new Date(periodStart);
    fertileEnd.setDate(fertileEnd.getDate() + 16);

    const daysUntilPeriod = Math.floor(
      (nextPeriodDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
    );

    return {
      currentDay:     dayOfCycle,
      currentPhase:   getCyclePhase(dayOfCycle),
      cycleLength,
      periodStart,
      nextPeriodDate,
      ovulationDate,
      fertileStart,
      fertileEnd,
      daysUntilPeriod,
    };
  },

  logPeriod: async (userId: string, periodStart: Date) => {
    return CycleDao.logPeriod(userId, periodStart);
  },

  getHistory: async (userId: string) => {
    return CycleDao.getHistory(userId);
  },

  logSymptoms: async (userId: string, symptoms: string[]) => {
    return CycleDao.logSymptoms(userId, symptoms);
  },
};