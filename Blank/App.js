/* ZONA 1: Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

// componente Propio Texto
const Texto= ()=>{
  const [contenido,setContenido]=useState("Hola Mundo");
  const actualizaTexto=()=>{setContenido("Estado modificado")}
  return (
    <Text onPress={actualizaTexto}> {contenido} </Text>
  );
}

/* ZONA 2: Main */
export default function App() {
  return (

    <View style={styles.container}>

      <Texto > Hola </Texto>
      <Texto > Mundo </Texto>
      <Texto > React Native </Texto>
      <Button title="Presionar"> </Button>
      <StatusBar style="auto" />

    </View>

  );
}

/* ZONA 3: Estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
