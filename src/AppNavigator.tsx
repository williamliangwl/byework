import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { screens } from './screens';

const Stack = createStackNavigator();
const screenOptions: StackNavigationOptions = {
  header: () => null,
};

export default () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {Object.keys(screens).map((k) => (
        <Stack.Screen key={k} name={k} component={screens[k]} />
      ))}
    </Stack.Navigator>
  );
};
