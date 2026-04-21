export type PlanId = 'free' | 'monthly' | 'quarterly' | 'biannual' | 'yearly';

export interface Plan {
  id:           PlanId;
  name:         string;
  priceInPaise: number;        // Razorpay uses paise (₹1 = 100 paise)
  priceDisplay: string;
  durationDays: number;
  scansPerMonth: number;
  features: {
    foodScanner:     boolean;
    cycleTracker:    boolean;
    workoutPlans:    boolean;
    progressCharts:  boolean;
    aiCoach:         boolean;
    unlimitedLogs:   boolean;
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
    scansPerMonth: 10,
    features: {
      foodScanner:     true,   // limited to 10 scans
      cycleTracker:    false,
      workoutPlans:    false,
      progressCharts:  false,
      aiCoach:         false,
      unlimitedLogs:   false,
      prioritySupport: false,
    },
  },

  monthly: {
    id:            'monthly',
    name:          'Monthly',
    priceInPaise:  34900,      // ₹349
    priceDisplay:  '₹349/mo',
    durationDays:  30,
    scansPerMonth: 90,
    features: {
      foodScanner:     true,
      cycleTracker:    true,
      workoutPlans:    true,
      progressCharts:  true,
      aiCoach:         false,  // future feature
      unlimitedLogs:   true,
      prioritySupport: false,
    },
  },

  quarterly: {
    id:            'quarterly',
    name:          '3 Months',
    priceInPaise:  84900,      // ₹849
    priceDisplay:  '₹849 / 3 months',
    durationDays:  90,
    scansPerMonth: 90,
    features: {
      foodScanner:     true,
      cycleTracker:    true,
      workoutPlans:    true,
      progressCharts:  true,
      aiCoach:         false,
      unlimitedLogs:   true,
      prioritySupport: false,
    },
  },

  biannual: {
    id:            'biannual',
    name:          '6 Months',
    priceInPaise:  159900,     // ₹1,599
    priceDisplay:  '₹1,599 / 6 months',
    durationDays:  180,
    scansPerMonth: 90,
    features: {
      foodScanner:     true,
      cycleTracker:    true,
      workoutPlans:    true,
      progressCharts:  true,
      aiCoach:         false,
      unlimitedLogs:   true,
      prioritySupport: true,
    },
  },

  yearly: {
    id:            'yearly',
    name:          'Yearly',
    priceInPaise:  299900,     // ₹2,999
    priceDisplay:  '₹2,999/year',
    durationDays:  365,
    scansPerMonth: 90,
    features: {
      foodScanner:     true,
      cycleTracker:    true,
      workoutPlans:    true,
      progressCharts:  true,
      aiCoach:         true,   // bonus for yearly
      unlimitedLogs:   true,
      prioritySupport: true,
    },
  },
};

export const TOPUP_PACK = {
  scans:        30,
  priceInPaise: 4900,   // ₹49
  priceDisplay: '₹49',
};

export const getPlan = (planId: PlanId): Plan => PLANS[planId];

export const isPremium = (planId: PlanId): boolean => planId !== 'free';