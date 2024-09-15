import React, { useEffect } from 'react';
import { View, Text, StyleSheet, BackHandler } from 'react-native';

export default function SecondScreen({navigation }) {
  useEffect (() => {
    BackHandler.addEventListener('hardwareBackPress', close)
    return() => {
      BackHandler.removeEventListener('hardwareBackPress', close)
    }
  }, [] )

  close = () => {
    navigation.goBack(null)
    return true
  }
  return (
    <View style={styles.container}>
      <Text>SecondScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
