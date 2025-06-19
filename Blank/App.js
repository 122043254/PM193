/* ZONA 1: Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

// componente Propio Texto
const Texto= ({style})=>{
  const [contenido,setContenido]=useState("Hola Mundo");
  const actualizaTexto=()=>{setContenido("Estado modificado")}
  return (
    <Text style={[styles.text,style]} onPress={actualizaTexto}> {contenido} </Text>
  );
}

const Boton = () => {
  const [contenido, setContenido] = useState("Presioname");
  const actualizarBoton = () => { setContenido("Me Presionas muy fuerte"); };
  return (
    <Button title={contenido} onPress={actualizarBoton}/>
  );
};

/* ZONA 2: Main */
export default function App() {
  return (

    <View style={styles.container}>

      <StatusBar style="auto" />
      <Texto style={styles.rosa}> Hola </Texto>
      <Texto style={styles.azul}> Mundo </Texto>
      <Texto style={styles.negro}> React Native </Texto>
      {/*<Button title="Presionar"> </Button>*/}
      {/*<Boton/>*/}

    </View>

  );
}

/* ZONA 3: Estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alineamiento de izquierda a derecha
    //flex-start lo posiciona en la parte izquierda
    //flex-end lo posiciona en la parte derecha
    alignItems: 'center',
    //flex-start lo posiciona en la parte superior
    //flex-end lo posiciona en la parte inferior
    // justify va de arriba para abajo
    // space-between separa entre sí los elementos
    // space-around alinea los elementos entre sí
    // space-evenly alinea los elementos entre sí igual
    justifyContent: 'center',
    // flex 0 significa que no se ocupa ningun espacio
  },
  text: {
    color:"white",
    fontSize:27,
    height:120,
    width:120,
  },
  azul:{backgroundColor:"blue", flex:1},
  negro:{backgroundColor:"black", flex:3},
  rosa:{backgroundColor:"pink", flex:2},
});