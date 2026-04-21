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
  heightCm?:      number;
  units:          string;
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
  units?:         string;
}