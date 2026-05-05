import prisma from '../config/database';

export const CustomWorkoutDao = {

  getAllByUser: async (userId: string) => {
    return prisma.customWorkoutPlan.findMany({
      where:   { userId },
      include: { exercises: { orderBy: { order: 'asc' } } },
      orderBy: { createdAt: 'desc' },
    });
  },

  getById: async (id: string, userId: string) => {
    return prisma.customWorkoutPlan.findFirst({
      where:   { id, userId },
      include: { exercises: { orderBy: { order: 'asc' } } },
    });
  },

  create: async (
    userId: string,
    data: {
      name:         string;
      category:     string;
      difficulty:   string;
      durationMin:  number;
      caloriesBurn: number;
      description?: string;
      exercises: {
        name:         string;
        sets:         number;
        reps:         number;
        weight:       string;
        muscle:       string;
        restSec:      number;
        instruction?: string;
        order:        number;
      }[];
    },
  ) => {
    const { exercises, ...planData } = data;
    return prisma.customWorkoutPlan.create({
      data: {
        userId,
        ...planData,
        exercises: {
          create: exercises,
        },
      },
      include: { exercises: { orderBy: { order: 'asc' } } },
    });
  },

  update: async (
    id:     string,
    userId: string,
    data: {
      name?:         string;
      category?:     string;
      difficulty?:   string;
      durationMin?:  number;
      caloriesBurn?: number;
      description?:  string;
      exercises?: {
        name:         string;
        sets:         number;
        reps:         number;
        weight:       string;
        muscle:       string;
        restSec:      number;
        instruction?: string;
        order:        number;
      }[];
    },
  ) => {
    const { exercises, ...planData } = data;

    // Update plan details
    await prisma.customWorkoutPlan.update({
      where: { id },
      data:  planData,
    });

    // If exercises provided — replace all
    if (exercises) {
      await prisma.customExercise.deleteMany({
        where: { planId: id },
      });
      await prisma.customExercise.createMany({
        data: exercises.map((e) => ({ ...e, planId: id })),
      });
    }

    return prisma.customWorkoutPlan.findFirst({
      where:   { id, userId },
      include: { exercises: { orderBy: { order: 'asc' } } },
    });
  },

  delete: async (id: string, userId: string) => {
    return prisma.customWorkoutPlan.delete({
      where: { id },
    });
  },
};