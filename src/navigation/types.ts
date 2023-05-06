import { Screens } from './Screens';

export enum RootNavigators {
  Tabs = 'TabNavigator',
}

export type StackNavigatorParamList = Readonly<{
  [RootNavigators.Tabs]: undefined;
  [Screens.Home]: undefined;
  [Screens.Anything]: undefined;
  [Screens.Anywhere]: undefined;
  [Screens.More]: undefined;
}>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // use `interface` instead of `type` to enable declaration merging (see https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces)
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends StackNavigatorParamList {}
  }
}
