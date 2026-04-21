export interface MealModel {
  id:        string;
  userId:    string;
  name:      string;
  mealType:  'breakfast' | 'lunch' | 'dinner' | 'snack';
  calories:  number;
  protein:   number;
  carbs:     number;
  fat:       number;
  fibre:     number;
  imageUrl?: string;
  aiScanned: boolean;
  loggedAt:  Date;
}

export interface MealCreateInput {
  name:      string;
  mealType:  'breakfast' | 'lunch' | 'dinner' | 'snack';
  calories:  number;
  protein?:  number;
  carbs?:    number;
  fat?:      number;
  fibre?:    number;
  imageUrl?: string;
  aiScanned?: boolean;
}

export interface DailyNutrition {
  totalCalories: number;
  totalProtein:  number;
  totalCarbs:    number;
  totalFat:      number;
  totalFibre:    number;
  meals:         MealModel[];
  water:         number;
}

export interface ScanResult {
  dishName:    string;
  calories:    number;
  protein:     number;
  carbs:       number;
  fat:         number;
  servingSize: string;
  confidence:  string;
  imageUrl:    string;
}