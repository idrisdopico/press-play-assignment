import React from 'react';
import { StyleProp, ViewStyle, Text } from 'react-native';

interface Props {
  title: string;
  style?: StyleProp<ViewStyle>;
}

const Title = ({ title, style }: Props) => <Text style={[style, { fontFamily: 'SpaceMono' }]}>{title}</Text>

export default Title;
