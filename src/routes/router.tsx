import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import NoDiet from '../screens/diets/noDiet';
import YesDiet from '../screens/diets/yesDiet';
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
      <Stack.Screen name="NoDiet" component={NoDiet} />
      <Stack.Screen name="YesDiet" component={YesDiet} />
    </Stack.Navigator>
  );
};

export default Router;
