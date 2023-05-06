import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../../components/Header";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import HorizontalGallery from "../../components/HorizontalGallery";

const IMAGE_SRC = require('../../assets/images/avengers.jpeg');

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar animated={true} style={'light'}/>
        <Header title={'Get ready for the slam dunk of the summer.'} imageSource={IMAGE_SRC} />
        <HorizontalGallery style={styles.gallery} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gallery: {
    marginTop: -20,
  }
});

export default HomeScreen;
