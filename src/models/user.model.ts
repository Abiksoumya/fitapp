export interface UserModel {
  id:             string;
  email:          string;
  name:           string;
  age?:           number;
  gender:         string;
  fitnessLevel:   string;
  fitnessGoal:    string;
  dailyStepGoal:  number;
  dailyCalGoal:   number;
  dailyWaterGoal: number;
  weightKg?:      number;
  heightCm?: number;
  dailyProteinGoal:  number;
  dailyCarbsGoal:    number;
  dailyFatGoal:      number;
  units: string;
  fcmToken?:             string;    // ← add
  workoutReminderTime?:  string;    // ← add
  workoutReminderOn?:    boolean;   // ← add
  createdAt:      Date;
  updatedAt:      Date;
}

export type UserPublic = Omit<UserModel, 'password'>;

export interface UserCreateInput {
  email:       string;
  password:    string;
  name:        string;
  age?:        number;
  gender:      string;
  fitnessLevel: string;
  fitnessGoal: string;
  weightKg?:   number;
  heightCm?:   number;
  dailyCalGoal: number;
  dailyProteinGoal: number;
  dailyCarbsGoal:   number;
  dailyFatGoal:     number;
  
}

export interface UserUpdateInput {
  name?:          string;
  age?:           number;
  fitnessLevel?:  string;
  fitnessGoal?:   string;
  dailyStepGoal?: number;
  dailyCalGoal?:  number;
  dailyWaterGoal?: number;
  weightKg?:      number;
  heightCm?:      number;
  units?: string;
  fcmToken?:            string;    // ← add
  workoutReminderTime?: string;    // ← add
  workoutReminderOn?: boolean;
  dailyProteinGoal?: number;
  dailyCarbsGoal?:   number;
  dailyFatGoal?:     number;
}