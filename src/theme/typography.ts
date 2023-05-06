import { StyleProp, TextStyle } from 'react-native';

import { fonts } from './fonts';

export type TypographyTheme = Readonly<{
  base: StyleProp<TextStyle>;
  title: StyleProp<TextStyle>;
  button: StyleProp<TextStyle>;
  paragraph: StyleProp<TextStyle>;
  headingMedium: StyleProp<TextStyle>;
  headingBold: StyleProp<TextStyle>;
  tabLabel: StyleProp<TextStyle>;
}>;

const base = {
  color: '#fff',
  fontFamily: fonts.workSans.regular,
  fontSize: 12,
  lineHeight: 12,
};

const title = {
  fontFamily: fonts.canopee.regular,
  fontSize: 40,
  lineHeight: 34,
  letterSpacing: -0.88,
};

const headingMedium = {
  fontFamily: fonts.workSans.medium,
  fontSize: 16,
  lineHeight: 17,
};

const headingBold = {
  fontFamily: fonts.workSans.bold,
  fontSize: 16,
  lineHeight: 17,
};

const button = {
  fontFamily: fonts.workSans.medium,
  fontSize: 14,
  lineHeight: 16,
};

export const typography: TypographyTheme = {
  base,
  title: {
    ...base,
    ...title,
  },
  headingMedium: {
    ...base,
    ...headingMedium,
  },
  headingBold: {
    ...base,
    ...headingBold,
  },
  paragraph: {
    ...base,
  },
  button: {
    ...base,
    ...button,
  },
  tabLabel: {
    ...base,
    ...{
      fontSize: 12,
      lineHeight: 18,
    },
  },
};

export default typography;
