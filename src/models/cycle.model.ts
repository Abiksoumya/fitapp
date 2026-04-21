export type CyclePhase = 'menstrual' | 'follicular' | 'ovulation' | 'luteal';

export interface CycleLogModel {
  id:           string;
  userId:       string;
  periodStart:  Date;
  periodEnd?:   Date;
  cycleLength:  number;
  createdAt:    Date;
}

export interface CycleStatus {
  currentDay:     number;
  currentPhase:   CyclePhase;
  cycleLength:    number;
  periodStart:    Date;
  nextPeriodDate: Date;
  ovulationDate:  Date;
  fertileStart:   Date;
  fertileEnd:     Date;
  daysUntilPeriod: number;
}

export interface SymptomCreateInput {
  symptoms: string[];
}