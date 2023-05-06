import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement } from "react";
import { RootNavigators, StackNavigatorParamList } from "./types";
import { Screens } from "./Screens";
import TabNavigator from "./components/TabNavigator";

const Stack = createStackNavigator<StackNavigatorParamList>();

const RootStack = (): ReactElement | null => {
  // Add some form of authentication here, for example, use an auth context to check if the user is logged in.
  // This context should be placed around the RootNavigator in src/App.tsx

  return (
    <Stack.Navigator initialRouteName={Screens.Home}>
      <Stack.Screen
        name={RootNavigators.Tabs}
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default RootStack;
