import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, TextInput, Switch, Button, Alert } from 'react-native';

const HomeScreen = () => {
  const [nombre, setNombre] = useState('');
  const [emailText, setEmailText] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleRegister = () => {
    if (nombre.trim() === '' || emailText.trim() === '') {
      Alert.alert('Error', 'Por favor, completa todos los campos antes de registrar.');
    } else if (!isValidEmail(emailText)) {
      Alert.alert('Error', 'Por favor, ingresa un correo electrónico válido.');
    } else if (!isEnabled) {
      Alert.alert('Error', 'Debes aceptar los términos y condiciones para continuar.');
    } else {
      Alert.alert('Registro completado', `\nNombre: ${nombre}\nCorreo: ${emailText}`);
    }
  };
  
  return (
    <ImageBackground
      source={require('/Users/lotso/Documents/9NO CUATRIMESTRE/PM193/PM193/Repaso/src/assets/fondo.png')}
      style={styles.background}
    >
      <SafeAreaView style={styles.content}>
        <View style={styles.registroContainer}>
          <Text style={styles.titulo}>Registro de usuario</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            value={nombre}
            onChangeText={setNombre}
          />
          <TextInput
            style={[styles.input, !isValidEmail(emailText) && emailText ? styles.errorInput : null]}
            placeholder="Correo Electrónico"
            keyboardType="email-address"
            value={emailText}
            onChangeText={setEmailText}
            autoCapitalize="none"
          />
          {!isValidEmail(emailText) && emailText !== '' && (
            <Text style={styles.errorText}>Correo no válido</Text>
          )}
          <Text>Aceptar términos y condiciones</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#333" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#767577"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Button title="Registrar" style={styles.boton} onPress={handleRegister} />
        </View>
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
    marginBottom: 20,
  },
  registroContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  boton: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  }
});