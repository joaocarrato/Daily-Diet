import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface IDietStore {
  meals: IDiet[];
  addMeal: (meal: IDiet) => void;
  removeMeal: (name: string) => void;
  mealsRegister: number;
  addMealsRegister: () => void;
  removeMealsRegister: () => void;
}

export const useDietStore = create(
  persist<IDietStore>(
    set => ({
      meals: [],
      addMeal: (meal: IDiet) =>
        set(state => ({
          meals: [...state.meals, meal],
        })),
      removeMeal: (name: string) =>
        set(state => ({
          meals: state.meals.filter(value => value.name !== name),
        })),
      mealsRegister: 0,
      addMealsRegister: () =>
        set(state => ({
          mealsRegister: state.mealsRegister + 1,
        })),
      removeMealsRegister: () =>
        set(state => ({
          mealsRegister: (state.mealsRegister = 0),
        })),
    }),
    {
      name: 'diet-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
