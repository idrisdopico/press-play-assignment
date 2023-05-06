import React from "react";
import Title from "../../components/Title";
import {StyleSheet, View} from "react-native";

const AnywhereScreen = () => {
  return (
    <View style={styles.container}>
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
