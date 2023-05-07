import React from 'react';
import { StyleProp, ViewStyle, Text } from 'react-native';
import theme from "../../theme";

enum HeadingVariant {
  Bold = 'bold',
  Medium = 'medium',
}

interface Props {
  title: string;
  style?: StyleProp<ViewStyle>;
  variant?: HeadingVariant;
}

const Heading = ({ title, style, variant }: Props) => (
  <Text style={[variant === HeadingVariant.Medium ? theme.typography.headingMedium : theme.typography.headingBold, style]}>
    {title}
  </Text>
)

export default Heading;
