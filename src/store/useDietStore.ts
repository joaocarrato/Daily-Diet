import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface IDietStore {
  meals: IDiet[];
  addMeal: (meal: IDiet) => void;
  removeMeal: (id: string) => void;
  mealsRegister: number;
  addMealsRegister: () => void;
  removeOneMeal: () => void;
  removeAllMeals: () => void;
}

export const useDietStore = create(
  persist<IDietStore>(
    set => ({
      meals: [],
      addMeal: (meal: IDiet) =>
        set(state => ({
          meals: [...state.meals, meal],
        })),
      removeMeal: (id: string) =>
        set(state => ({
          meals: state.meals.filter(value => value.id !== id),
        })),

      mealsRegister: 0,
      addMealsRegister: () =>
        set(state => ({
          mealsRegister: state.mealsRegister + 1,
        })),
      removeOneMeal: () =>
        set(state => ({
          mealsRegister: state.mealsRegister - 1,
        })),
      removeAllMeals: () =>
        set(state => ({
          meals: [],
        })),
    }),
    {
      name: 'diet-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
