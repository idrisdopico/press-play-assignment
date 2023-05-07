import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import Header from "../../components/Header/Header";

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
  return (
    <ScrollView>
      <Header details={movieDetails} imageSource={movieDetails.image} />
    </ScrollView>
  )
}

export default DetailsScreen;
