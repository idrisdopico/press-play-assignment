import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import HomeScreen from "../../screens/Home";
import DetailsScreen from "../../screens/Details";

import { Screens } from '../Screens';
import { StackNavigatorParamList } from '../types';

import theme from "../../theme";

const Stack = createStackNavigator<StackNavigatorParamList>();

export const Home = (): React.ReactElement => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.Home}
      screenOptions={{ cardStyle: { backgroundColor: theme.colors.black }}}
    >
      <Stack.Screen
        name={Screens.Home}
        component={HomeScreen}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Screens.Details}
        component={DetailsScreen}
        options={{
          title: 'Details',
          headerShown: false,
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
};

export default Home;
