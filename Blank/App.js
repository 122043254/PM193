import { ScrollView, StatusBar, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React, { useRef } from "react";

const App = () => {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView style={styles.ScrollView} horizontal>
          <Text style={styles.text}>
            Este es el texto que utilizara todo el espacio
            Este es el texto que utilizara todo el espacio
            Este es el texto que utilizara todo el espacio
            Este es el texto que utilizara todo el espacio
            Este es el texto que utilizara todo el espacio
            Este es el texto que utilizara todo el espacio
            Este es el texto que utilizara todo el espacio
            Este es el texto que utilizara todo el espacio
            Este es el texto que utilizara todo el espacio
            Este es el texto que utilizara todo el espacio
            Este es el texto que utilizara todo el espacio
            Este es el texto que utilizara todo el espacio
            Este es el texto que utilizara todo el espacio
            Este es el texto que utilizara todo el espacio
            Este es el texto que utilizara todo el espacio
            Este es el texto que utilizara todo el espacio
            Este es el texto que utilizara todo el espacio
            Este es el texto que utilizara todo el espacio
            Este es el texto que utilizara todo el espacio
            Este es el texto que utilizara todo el espacio
          </Text>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: StatusBar.currentHeight,

  },
  ScrollView: {
    backgroundColor: 'green',
  },
  text: {
    fontSize: 50,
    padding: 20,
  }
});

export default App;