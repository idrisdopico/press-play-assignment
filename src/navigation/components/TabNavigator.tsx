import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from '../routes';
import Home from '../stacks/Home';
import Anything from '../stacks/Anything';
import Anywhere from '../stacks/Anywhere';
import More from '../stacks/More';
import theme from "../../theme";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.white,
          tabBarInactiveTintColor: theme.colors.whiteOpacity,
          tabBarStyle: {
            borderTopWidth: 0,
            backgroundColor: theme.colors.blue,
            shadowRadius: 16,
            paddingTop: 8,
            minHeight: 83,
          },
        }}
        initialRouteName={Routes.Home}>
        <Tab.Screen
          name={Routes.Home}
          component={Home}
        />
        <Tab.Screen
          name={Routes.Anything}
          component={Anything}
        />
        <Tab.Screen
          name={Routes.Anywhere}
          component={Anywhere}
        />
        <Tab.Screen
          name={Routes.More}
          component={More}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;
