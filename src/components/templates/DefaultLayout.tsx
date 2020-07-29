import React from 'react';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from '../../navigators';

export const DefaultLayout: React.FC = () => {
  return (
    <NavigationContainer>
      <DefaultLayoutView>
        <RootNavigator />
      </DefaultLayoutView>
    </NavigationContainer>
  );
};

const DefaultLayoutView = styled.View`
  height: 100%;
`;
