import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Screens } from '../Screens';
import { StackNavigatorParamList } from '../types';
import HomeScreen from "../../screens/Home";
import theme from "../../theme";

const Stack = createStackNavigator<StackNavigatorParamList>();

export const Home = (): React.ReactElement => {
  return (
    <Stack.Navigator initialRouteName={Screens.Home}>
      <Stack.Screen
        name={Screens.Home}
        component={HomeScreen}
        options={{
          headerShown: false,
          title: 'Home',
          cardStyle: { backgroundColor: theme.colors.black },
        }}
      />
    </Stack.Navigator>
  );
};

export default Home;
