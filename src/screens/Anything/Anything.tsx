import React from "react";
import { StyleSheet, View } from "react-native";

import Title from "../../components/Title";

const AnythingScreen = () => {
  return (
    <View style={styles.container}>
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
