import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/home';
import MealStats from '../screens/mealStats';
import RegisterMeal from '../screens/registerMeal';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MealStats" component={MealStats} />
      <Stack.Screen name="RegisterMeal" component={RegisterMeal} />
    </Stack.Navigator>
  );
};

export default Router;
