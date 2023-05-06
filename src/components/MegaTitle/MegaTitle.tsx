import { Text, StyleProp, ViewStyle } from "react-native";

interface Props {
  title: string;
  style?: StyleProp<ViewStyle>;
}

const MegaTitle = ({ title, style }: Props) => {
  return (
    <Text style={[style, { fontFamily: 'SpaceMono' }]}>{title}</Text>
  )
}

export default MegaTitle;
