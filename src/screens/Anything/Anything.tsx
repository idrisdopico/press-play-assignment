import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import Title from "../../components/Title";

const AnythingScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} style={'dark'} />
      <Title title={'Anything'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default AnythingScreen;
