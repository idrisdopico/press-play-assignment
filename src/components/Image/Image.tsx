import React from "react";
import { Image, ImageBackground, ImageProps, StyleSheet, View } from 'react-native';

const IMAGE_HEIGHT = 320;

interface Props {
  src: ImageProps['source'];
  style?: ImageProps['style'];
  children?: React.ReactElement;
  imageHeight?: number;
}

const ImageComponent = ({ src, style, children, imageHeight }: Props) => {
  if (children) {
    return (
      <View style={style}>
        <ImageBackground style={[styles.image, { height: imageHeight || IMAGE_HEIGHT }]} source={src}>
          {children}
        </ImageBackground>
      </View>
    )
  }

  return (
    <View style={style}>
      <Image style={[styles.image, { height: imageHeight || IMAGE_HEIGHT }]} source={src} />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: IMAGE_HEIGHT,
    resizeMode: 'cover',
  }
});

export default ImageComponent;
