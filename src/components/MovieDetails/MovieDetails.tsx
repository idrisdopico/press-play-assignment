import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

import { HeadingVariant } from "../Heading/Heading";

import Heading from "../Heading";
import theme from "../../theme";
import Paragraph from "../Paragraph";

interface Props {
  title: string;
  duration: number;
  category: string;
  style?: StyleProp<ViewStyle>;
}

const MovieDetails = ({ title, duration, category, style }: Props) => (
  <View style={style}>
    <Heading
      title={title.toUpperCase()}
      style={[styles.descriptionTitle, theme.typography.descriptionTitle ]}
      variant={HeadingVariant.Bold}
    />
    <View style={styles.container}>
      <Paragraph title={`${duration} min`} style={styles.paragraph} />
      <View style={styles.divider} />
      <Paragraph title={category} style={styles.paragraph} />
    </View>
  </View>
)


const styles = StyleSheet.create({
  descriptionTitle: {
    marginBottom: 8,
    paddingHorizontal: 24,
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
  },
  divider: {
    width: 9,
  },
  paragraph: {
    opacity: 0.5,
  }
});

export default MovieDetails;
