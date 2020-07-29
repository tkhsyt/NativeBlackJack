import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainTabNavigator } from './MainTabNavigator';

const Stack = createStackNavigator();

export function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="BlackJack">
      <Stack.Screen name="BlackJack" component={MainTabNavigator} />
    </Stack.Navigator>
  );
}
