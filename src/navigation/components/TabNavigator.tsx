import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from '../routes';
import Home from '../stacks/Home';
import Anything from '../stacks/Anything';
import Anywhere from '../stacks/Anywhere';
import More from '../stacks/More';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          // tabBarActiveTintColor: theme.colors.purple.base,
          // tabBarInactiveTintColor: theme.colors.purple.base,
          tabBarStyle: {
            borderTopWidth: 1,
            // borderTopColor: theme.colors.grey.s300,
            // backgroundColor: theme.colors.purple.light,
            // shadowColor: theme.colors.purple.dark,
            shadowOpacity: 0.04,
            shadowRadius: 16,
            paddingTop: 15,
            // paddingBottom: insets.bottom === 0 ? 15 : insets.bottom - 15,
            minHeight: 70,
            // shadowOffset: { width: 0, height: -insets.bottom },
          },
        }}
        initialRouteName={Routes.Home}>
        <Tab.Screen
          name={Routes.Home}
          component={Home}
          options={{
            // title: t('screens:overview.title'),
            // tabBarIcon: TabBarIcon(
            //   IconName.DashboardActive,
            //   IconName.DashboardInactive,
            // ),
            // tabBarLabel: TabBarLabel,
          }}
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
