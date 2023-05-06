import React from "react";
import Title from "../../components/Title";
import { StyleSheet, View } from "react-native";

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
