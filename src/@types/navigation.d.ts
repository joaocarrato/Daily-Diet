import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type StackParams = {
  Home: undefined;
  MealStats: {
    percentage: string;
  };
};

export type StackTypes = NativeStackNavigationProp<StackParams>;
