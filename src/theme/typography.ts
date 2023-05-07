import { StyleProp, TextStyle } from 'react-native';

import { fonts } from './fonts';

export type TypographyTheme = Readonly<{
  base: StyleProp<TextStyle>;
  title: StyleProp<TextStyle>;
  headingMedium: StyleProp<TextStyle>;
  headingBold: StyleProp<TextStyle>;
  descriptionTitle: StyleProp<TextStyle>;
  descriptionLabel: StyleProp<TextStyle>;
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
  // If we use 34 line-height like in the design, the text will be cut off.
  // We should use 36 instead untill we have a solution.
	lineHeight: 36,
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

const descriptionTitle = {
  fontFamily: fonts.workSans.bold,
  fontSize: 32,
  lineHeight: 32,
  letterSpacing: -1.3,
}

const descriptionLabel = {
  fontSize: 13,
  lineHeight: 20,
}

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
  descriptionTitle: {
    ...base,
    ...descriptionTitle,
  },
  descriptionLabel: {
    ...base,
    ...descriptionLabel,
  },
};

export default typography;
