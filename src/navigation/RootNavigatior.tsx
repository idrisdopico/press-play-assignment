import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import React, { useRef } from 'react';

import RootStack from './RootStack';
import { StackNavigatorParamList } from './types';

const RootNavigator = () => {
  const navigator =
    useRef<NavigationContainerRef<StackNavigatorParamList>>(null);
  const routeNameRef = useRef('startup');

  const logStateChange = () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigator?.current?.getCurrentRoute()?.name;

    routeNameRef.current =
      navigator?.current?.getCurrentRoute()?.name ?? 'unknown';
  };

  return (
    <NavigationContainer
      ref={navigator}
      onStateChange={logStateChange}>
      <RootStack />
    </NavigationContainer>
  );
};

export default RootNavigator;
