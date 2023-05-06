import React from "react";
import { Text, StyleProp, ViewStyle } from "react-native";
import theme from "../../theme";

interface Props {
  title: string;
  style?: StyleProp<ViewStyle>;
}

const Title = ({ title, style }: Props) => {
  return (
    <Text style={[theme.typography.title, style]}>{title}</Text>
  )
}

export default Title;
