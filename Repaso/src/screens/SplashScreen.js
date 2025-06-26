import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('/Users/lotso/Documents/9NO CUATRIMESTRE/PM193/PM193/Repaso/src/assets/image.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>MotorCheck</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    marginTop: 20,
    color: '#eeeeee',
    fontSize: 24,
    fontWeight: 'bold',
  },
});