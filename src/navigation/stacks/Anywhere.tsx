import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Screens } from '../Screens';
import { StackNavigatorParamList } from '../types';
import AnywhereScreen from "../../screens/Anywhere";

const Stack = createStackNavigator<StackNavigatorParamList>();

export const Anywhere = (): React.ReactElement => {
  return (
    <Stack.Navigator initialRouteName={Screens.Anything}>
      <Stack.Screen
        name={Screens.Anywhere}
        component={AnywhereScreen}
        options={{
          title: 'Anywhere',
        }}
      />
    </Stack.Navigator>
  );
};

export default Anywhere;
