import React from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import RootNavigator from "./src/navigation/RootNavigatior";
import { useCachedResources } from "./src/hooks/useCachedResources";

import { fonts } from "./src/theme/fonts";

const fontMap = {
  [fonts.workSans.regular]: require('./src/assets/fonts/WorkSans-Regular.ttf'),
  [fonts.workSans.medium]: require('./src/assets/fonts/WorkSans-Medium.ttf'),
  [fonts.workSans.bold]: require('./src/assets/fonts/WorkSans-Bold.ttf'),
  [fonts.workSans.semiBold]: require('./src/assets/fonts/WorkSans-SemiBold.ttf'),
  [fonts.canopee.regular]: require('./src/assets/fonts/Canopee-Regular.otf'),
};


export default function App() {
  const isLoadingComplete = useCachedResources(fontMap);

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <RootNavigator />
    </SafeAreaProvider>
  );
}
