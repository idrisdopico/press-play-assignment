import {View, StyleSheet, ImageSourcePropType} from "react-native";
import Title from "../Title";
import React from "react";
import Image from "../Image/Image";
import {LinearGradient} from "expo-linear-gradient";
import theme from "../../theme";

export interface HeaderProps {
  title: string;
  imageSource: ImageSourcePropType;
}

const Header = ({ title, imageSource }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Image src={imageSource}>
        <LinearGradient
          colors={[theme.colors.blacks.black0, theme.colors.blacks.black15, theme.colors.blacks.black70]}
          locations={[0, 0.16, 1]}
          style={styles.linearGradient}
        />
      </Image>
      <Title title={title} style={styles.title} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  linearGradient: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  title: {
    position: 'absolute',
    bottom: 72,
    paddingLeft: 20,
    paddingRight: 60,
  }
});

export default Header;
