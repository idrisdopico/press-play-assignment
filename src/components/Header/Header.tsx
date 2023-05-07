import React from "react";
import { View, StyleSheet, ImageSourcePropType, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Title from "../Title";
import Image from "../Image/Image";
import { MovieDetailsProps } from "../HorizontalGallery/HorizontalGallery";

import MovieDetails from "../MovieDetails";

import theme from "../../theme";

export interface HeaderProps {
  title?: string;
  details?: MovieDetailsProps;
  imageSource: ImageSourcePropType;
}

const IMAGE_DETAILS_HEIGHT = 500;

const Header = ({ title, imageSource, details }: HeaderProps) => {
  if (details) {
    const { image, title: detailsTitle, duration, description, category } = details;

    return (
      <View style={styles.container}>
        <Image src={image} imageHeight={IMAGE_DETAILS_HEIGHT}>
          <LinearGradient
            colors={[theme.colors.blacks.black0, theme.colors.blacks.black15, theme.colors.blacks.black70]}
            locations={[0, 0.16, 1]}
            style={styles.linearGradient}
          />
        </Image>
        <MovieDetails
          style={styles.movieDetailsContainer}
          title={detailsTitle}
          duration={duration}
          category={category}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image src={imageSource}>
        <LinearGradient
          colors={[theme.colors.blacks.black0, theme.colors.blacks.black15, theme.colors.blacks.black70]}
          locations={[0, 0.16, 1]}
          style={styles.linearGradient}
        />
      </Image>
      {title && <Title title={title} style={styles.title} />}
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
  },
  movieDetailsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -120,
  }
});

export default Header;
