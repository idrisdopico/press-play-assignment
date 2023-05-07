import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootStack from './RootStack';

const RootNavigator = () => (
  <NavigationContainer>
    <RootStack />
  </NavigationContainer>
);


export default RootNavigator;
