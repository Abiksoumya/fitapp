import { PlanId } from "../config/plan";

export interface SubscriptionModel {
  id:                 string;
  userId:             string;
  plan:               PlanId;
  status:             'active' | 'expired' | 'cancelled';
  razorpaySubId?:     string;
  razorpayOrderId?:   string;
  currentPeriodStart: Date;
  currentPeriodEnd?:  Date;
  cancelledAt?:       Date;
  createdAt:          Date;
  updatedAt:          Date;
}

export interface ScanQuotaModel {
  id:          string;
  userId:      string;
  scansUsed:   number;
  scansLimit:  number;
  extraScans:  number;
  periodStart: Date;
  periodEnd:   Date;
}

export interface ScanQuotaStatus {
  scansUsed:      number;
  scansLimit:     number;
  extraScans:     number;
  scansRemaining: number;
  totalRemaining: number;
  periodEnd:      Date;
  canScan:        boolean;
  showTopUpOffer: boolean;   // true when < 10 scans left
}