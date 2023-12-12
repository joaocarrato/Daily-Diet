import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type StackParams = {
  Home: undefined;
  MealStats: {
    percentage: string;
  };
  RegisterMeal: undefined;
  NoDiet: undefined;
  YesDiet: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackParams>;
