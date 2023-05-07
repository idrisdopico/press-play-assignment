import React from "react";
import { StyleProp, Text, ViewStyle } from "react-native";

import theme from "../../theme";

interface Props {
  title: string;
  style?: StyleProp<ViewStyle>;
}

const Paragraph = ({ title, style }: Props) => (
  <Text style={[style, theme.typography.descriptionLabel ]}>
    {title}
  </Text>
)

export default Paragraph;
