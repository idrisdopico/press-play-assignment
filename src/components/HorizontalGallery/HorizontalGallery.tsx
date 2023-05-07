import React, { useMemo } from "react";
import { FlatList, ListRenderItem, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { ImageSourcePropType } from "react-native/Libraries/Image/Image";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import Heading from "../Heading";
import Image from "../Image";

export interface MovieDetailsProps {
  title: string;
  image: ImageSourcePropType;
  duration: number;
  category: string;
  description: string;
}

export interface GalleryProps {
  data: MovieDetailsProps[],
  style?: StyleProp<ViewStyle>;
  onPress: (item: MovieDetailsProps) => void;
}

const BOX_HORIZONTAL_MARGIN = 10;
const BODY_HORIZONTAL_MARGIN = 20;
const IMAGE_WIDTH = 128;
const IMAGE_HEIGHT = 182;

const Spacer = () => <View style={{ width: BOX_HORIZONTAL_MARGIN }} />;
const BodySpacer = () => <View style={{ width: BODY_HORIZONTAL_MARGIN }} />;

const renderItem = (onPress: GalleryProps['onPress']): ListRenderItem<MovieDetailsProps> =>
  ({ item }) =>
    (
      <TouchableWithoutFeedback style={styles.pressable} onPress={() => onPress(item)}>
        <Image src={item.image} style={styles.image} />
      </TouchableWithoutFeedback>
    );

const HorizontalGallery = ({ data, onPress, style }: GalleryProps) => {
  const renderItemMemoized = useMemo(
    () => renderItem(onPress),
    [onPress],
  );

  return (
    <View style={style}>
      <Heading title={'NEW MOVIES'} style={styles.heading} />
      <FlatList
        data={data}
        renderItem={renderItemMemoized}
        keyExtractor={item => item.title}
        horizontal
        directionalLockEnabled
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={Spacer}
        ListHeaderComponent={BodySpacer}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    marginBottom: 20,
    paddingLeft: 20,
  },
  pressable: {
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
  },
});

export default HorizontalGallery;
