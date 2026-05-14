export type PlanId = 'free' | 'trial' | 'monthly' | 'quarterly' | 'biannual' | 'yearly';

export interface Plan {
  id:            PlanId;
  name:          string;
  priceInPaise:  number;
  priceDisplay:  string;
  durationDays:  number;
  scansPerMonth: number;
  features: {
    foodScanner:     boolean;
    cycleTracker:    boolean;
    workoutPlans:    boolean;
    customPlans:     boolean;
    stepsTracking:   boolean;
    nutritionLog:    boolean;
    prioritySupport: boolean;
  };
}

export const PLANS: Record<PlanId, Plan> = {
  free: {
    id:            'free',
    name:          'Free',
    priceInPaise:  0,
    priceDisplay:  '₹0',
    durationDays:  0,
    scansPerMonth: 0,
    features: {
      foodScanner:     false,
      cycleTracker:    true,
      workoutPlans:    true,
      customPlans:     false,
      stepsTracking:   true,
      nutritionLog:    true,
      prioritySupport: false,
    },
  },
  trial: {
    id:            'trial',
    name:          'Free Trial',
    priceInPaise:  0,
    priceDisplay:  '₹0',
    durationDays:  15,
    scansPerMonth: 30,
    features: {
      foodScanner:     true,
      cycleTracker:    true,
      workoutPlans:    true,
      customPlans:     true,
      stepsTracking:   true,
      nutritionLog:    true,
      prioritySupport: false,
    },
  },
  monthly: {
    id:            'monthly',
    name:          'Monthly',
    priceInPaise:  24900,   // ← ₹249
    priceDisplay:  '₹249/mo',
    durationDays:  30,
    scansPerMonth: 90,
    features: {
      foodScanner:     true,
      cycleTracker:    true,
      workoutPlans:    true,
      customPlans:     true,
      stepsTracking:   true,
      nutritionLog:    true,
      prioritySupport: false,
    },
  },
  quarterly: {
    id:            'quarterly',
    name:          '3 Months',
    priceInPaise:  69900,   // ← ₹699
    priceDisplay:  '₹699 / 3 months',
    durationDays:  90,
    scansPerMonth: 90,
    features: {
      foodScanner:     true,
      cycleTracker:    true,
      workoutPlans:    true,
      customPlans:     true,
      stepsTracking:   true,
      nutritionLog:    true,
      prioritySupport: false,
    },
  },
  biannual: {
    id:            'biannual',
    name:          '6 Months',
    priceInPaise:  139900,  // ← ₹1,399
    priceDisplay:  '₹1,399 / 6 months',
    durationDays:  180,
    scansPerMonth: 90,
    features: {
      foodScanner:     true,
      cycleTracker:    true,
      workoutPlans:    true,
      customPlans:     true,
      stepsTracking:   true,
      nutritionLog:    true,
      prioritySupport: true,
    },
  },
  yearly: {
    id:            'yearly',
    name:          'Yearly',
    priceInPaise:  259900,  // ← ₹2,599
    priceDisplay:  '₹2,599 / year',
    durationDays:  365,
    scansPerMonth: 90,
    features: {
      foodScanner:     true,
      cycleTracker:    true,
      workoutPlans:    true,
      customPlans:     true,
      stepsTracking:   true,
      nutritionLog:    true,
      prioritySupport: true,
    },
  },
};

export const TOPUP_PACK = {
  scans:        30,
  priceInPaise: 4900,  // ₹49
  priceDisplay: '₹49',
};

export const getPlan    = (planId: PlanId): Plan => PLANS[planId];
export const isPremium  = (planId: PlanId): boolean => planId !== 'free';