import React from "react";
import { Image, ImageBackground, ImageProps, StyleSheet, View } from 'react-native';

const IMAGE_HEIGHT = 320;

interface Props {
  src: ImageProps['source'];
  style?: ImageProps['style'];
  children?: React.ReactElement;
}

const ImageComponent = ({ src, style, children }: Props) => {
  if (children) {
    return (
      <View style={style}>
        <ImageBackground style={styles.image} source={src}>
          {children}
        </ImageBackground>
      </View>
    )
  }

  return (
    <View style={style}>
      <Image style={styles.image} source={src} />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: IMAGE_HEIGHT,
  }
});

export default ImageComponent;
