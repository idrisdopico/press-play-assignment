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

  return (
    <NavigationContainer ref={navigator}>
      <RootStack />
    </NavigationContainer>
  );
};

export default RootNavigator;
