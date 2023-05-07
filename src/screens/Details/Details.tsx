import React from "react";
import { View } from "react-native";
import Header from "../../components/Header/Header";
import Title from "../../components/Title";

import { StackScreenProps } from "@react-navigation/stack";
import { StackNavigatorParamList } from "../../navigation/types";
import { Screens } from "../../navigation/Screens";

type Props = StackScreenProps<StackNavigatorParamList, Screens.Details>;

const DetailsScreen = ({
  route: {
    params: {
      movieDetails
    }
  }}: Props) => {
  const { title, image, description, category, duration } = movieDetails;

  return (
    <View>
      <Title title={title} />
      <Header title={title} imageSource={image} />
    </View>
  )
}

export default DetailsScreen;
