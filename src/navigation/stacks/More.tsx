import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Screens } from '../Screens';
import { StackNavigatorParamList } from '../types';
import MoreScreen from "../../screens/More";

const Stack = createStackNavigator<StackNavigatorParamList>();

export const More = (): React.ReactElement => {
  return (
    <Stack.Navigator initialRouteName={Screens.Anything}>
      <Stack.Screen
        name={Screens.More}
        component={MoreScreen}
        options={{
          title: 'More',
        }}
      />
    </Stack.Navigator>
  );
};

export default More;
