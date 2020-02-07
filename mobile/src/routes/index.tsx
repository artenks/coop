import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Settings from '~/pages/Settings';
import Appearence from '~/pages/Settings/Appearence';

import Tabs from './tabs';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  const horizontal = {
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };
  const noAnimation = {animationEnabled: false};

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={horizontal}
        />
        <Stack.Screen
          name="Appearence"
          component={Appearence}
          options={noAnimation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
