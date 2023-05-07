import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import Title from "../../components/Title";

const AnywhereScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} style={'dark'} />
      <Title title={'Anywhere'} />
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

export default AnywhereScreen;
