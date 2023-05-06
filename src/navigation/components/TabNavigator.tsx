import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from "@expo/vector-icons";

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
          options={{
            tabBarIcon: (tabInfo) => (
              <Ionicons
                name="square-outline"
                size={24}
                color={tabInfo.focused ? theme.colors.white : theme.colors.whiteOpacity}
              />
            ),
          }}
        />
        <Tab.Screen
          name={Routes.Anything}
          component={Anything}
          options={{
            tabBarIcon: (tabInfo) => (
              <Ionicons
                name="flower"
                size={24}
                color={tabInfo.focused ? theme.colors.white : theme.colors.whiteOpacity}
              />
            ),
          }}
        />
        <Tab.Screen
          name={Routes.Anywhere}
          component={Anywhere}
          options={{
            tabBarIcon: (tabInfo) => (
              <Ionicons
                name="flower-outline"
                size={24}
                color={tabInfo.focused ? theme.colors.white : theme.colors.whiteOpacity}
              />
            ),
          }}
        />
        <Tab.Screen
          name={Routes.More}
          component={More}
          options={{
            tabBarIcon: (tabInfo) => (
              <Ionicons
                name="beer"
                size={24}
                color={tabInfo.focused ? theme.colors.white : theme.colors.whiteOpacity}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;
