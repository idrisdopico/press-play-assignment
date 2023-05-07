import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Screens } from '../Screens';
import { StackNavigatorParamList } from '../types';
import AnythingScreen from "../../screens/Anything";

const Stack = createStackNavigator<StackNavigatorParamList>();

export const Anything = (): React.ReactElement => {
  return (
    <Stack.Navigator initialRouteName={Screens.Anything}>
      <Stack.Screen
        name={Screens.Anything}
        component={AnythingScreen}
        options={{
          title: 'Anything',
        }}
      />
    </Stack.Navigator>
  );
};

export default Anything;
