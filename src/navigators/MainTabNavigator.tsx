import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PAGE_NAMES } from '../domain/const/pagenames';
import { GameTable } from '../components/Screen/GameTable';
import { GameResult } from '../components/Screen/GameResult';
const { Navigator, Screen } = createBottomTabNavigator();

export function MainTabNavigator() {
  return (
    <Navigator initialRouteName={PAGE_NAMES.GAME}>
      <Screen name={PAGE_NAMES.GAME} component={GameTable} />
      <Screen name={PAGE_NAMES.RESULT} component={GameResult} />
    </Navigator>
  );
}
