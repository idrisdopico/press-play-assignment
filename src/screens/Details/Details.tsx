import React from "react";
import {Pressable, StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import Header from "../../components/Header/Header";

import { StackScreenProps } from "@react-navigation/stack";
import { StackNavigatorParamList } from "../../navigation/types";
import { Screens } from "../../navigation/Screens";
import theme from "../../theme";

type Props = StackScreenProps<StackNavigatorParamList, Screens.Details>;

const DetailsScreen = ({
  route: {
    params: {
      movieDetails
    }
  }}: Props) => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ position: 'relative' }}>
      {/*
        Not inline with design, but the scrollView makes it "impossible/hard" to close the modal on iOS.
        This button is the solution for now, but maybe we can think of another solution. :^)
      */}
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton} hitSlop={10}>
        <Ionicons
          name="arrow-down"
          size={24}
          color={theme.colors.white}
        />
      </Pressable>
      <Header details={movieDetails} imageSource={movieDetails.image} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  }
});

export default DetailsScreen;
