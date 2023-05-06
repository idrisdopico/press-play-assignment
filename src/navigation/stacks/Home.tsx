import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Screens } from '../Screens';
import { StackNavigatorParamList } from '../types';
import HomeScreen from "../../screens/Home";

const Stack = createStackNavigator<StackNavigatorParamList>();

export const Home = (): React.ReactElement => {
  return (
    <Stack.Navigator initialRouteName={Screens.Home}>
      <Stack.Screen
        name={Screens.Home}
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
    </Stack.Navigator>
  );
};

export default Home;
