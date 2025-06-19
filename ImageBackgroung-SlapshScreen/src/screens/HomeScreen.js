import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require('/Users/lotso/Documents/9NO CUATRIMESTRE/PM193/PM193/ImageBackgroung-SlapshScreen/src/assets/background.jpeg')}
      style={styles.background}
    >
      <SafeAreaView style={styles.content}>
        <Text style={styles.text}>Pantalla Principal</Text>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
});