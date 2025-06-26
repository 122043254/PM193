import React, { useEffect, useState } from 'react';
import { View, StatusBar } from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula carga de recursos por 2.5 segundos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      {isLoading ? <SplashScreen /> : <HomeScreen />}
    </View>
  );
}