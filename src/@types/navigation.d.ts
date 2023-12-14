import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type StackParams = {
  Home: undefined;
  MealStats: {
    percentage: string;
  };
  RegisterMeal: undefined;
  NoDiet: undefined;
  YesDiet: undefined;
  MealDetails: {
    id: string;
    name: string;
    description: string | undefined;
    date: string;
    hour: string;
    isDiet: string;
  };
};

export type StackTypes = NativeStackNavigationProp<StackParams>;
