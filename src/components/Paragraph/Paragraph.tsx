import theme from "../../theme";
import {StyleProp, Text, ViewStyle} from "react-native";
import React from "react";

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
