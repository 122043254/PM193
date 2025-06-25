import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [defaultText, setDefaultText] = useState('');
  const [emailText, setEmailText] = useState('');
  const [numberPadText, setNumberPadText] = useState('');
  const [decimalPadText, setDecimalPadText] = useState('');
  const [numericText, setNumericText] = useState('');
  const [phoneText, setPhoneText] = useState('');
  const [urlText, setUrlText] = useState('');
  const [visiblePassword, setVisiblePassword] = useState('');

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) => /^[0-9]{7,15}$/.test(phone);
  const isValidUrl = (url) => /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})(\/[\w.-])\/?$/.test(url);
  const isNumeric = (value) => /^[0-9]+$/.test(value);
  const isDecimal = (value) => /^[0-9]*\.?[0-9]+$/.test(value);

  const AlertaBasica = () => {
    Alert.alert('Alerta Básica', `Texto ingresado: ${defaultText}`);
  };

  const AlertaConfirmacion = () => {
    Alert.alert(
      'Confirmación',
      '¿Gus es gustambo?',
      [
        { text: 'Sí', onPress: () => Alert.alert('Exactamente') },
        { text: 'No', onPress: () => Alert.alert('¿Cómo que no?') },
      ],
      { cancelable: false }
    );
  };

  const AlertaTexto = () => {
    if (defaultText.trim() !== '') {
      Alert.alert('Texto', `Exactamente, ${defaultText}`);
    } else {
      Alert.alert('Error', 'Por favor, ingresa una respuesta válida.');
    }
  };

  const AlertaConfrimacion = () => {
    const numero = parseInt(numberPadText);
    if (!isNaN(numero) && numero >= 1 && numero <= 70) {
      Alert.alert('Edad', `Tu edad es: ${numero}`);
    } else {
      Alert.alert('Error', 'Edad incorrecta, por favor ingresa un valor válido.');
    }
  };

  const AlertaTimpo = () => {
    setTimeout(() => {
      Alert.alert('Alerta con tiempo', 'Hola, han pasado 5 segundos');
    }, 5000);
  };

  const alertaRedireccion = () => {
    Alert.alert(
      'Redirección',
      '¿Quieres ir a Google?',
      [
        { text: 'Sí', onPress: () => Alert.alert('Redirigiendo a Google...') },
        { text: 'No', onPress: () => Alert.alert('Cancelado') },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>default: </Text>
        <TextInput
          style={styles.input}
          onChangeText={setDefaultText}
          value={defaultText}
          placeholder="Escribe solo texto"
          keyboardType="default"
        />

        <Text style={styles.label}>number pad: </Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe solo números"
          keyboardType="number-pad"
          value={numberPadText}
          onChangeText={(text) => {
            if (isNumeric(text) || text === '') setNumberPadText(text);
          }}
        />

        <Text style={styles.label}>decimal-pad: </Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa números decimales"
          keyboardType="decimal-pad"
          value={decimalPadText}
          onChangeText={(text) => {
            if (isDecimal(text) || text === '') setDecimalPadText(text);
          }}
        />

        <Text style={styles.label}>numeric: </Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe números"
          keyboardType="numeric"
          value={numericText}
          onChangeText={(text) => {
            if (isNumeric(text) || text === '') setNumericText(text);
          }}
        />

        <Text style={styles.label}>Correo: </Text>
        <TextInput
          style={[styles.input, !isValidEmail(emailText) && emailText ? styles.errorInput : null]}
          placeholder="Escribe un correo"
          keyboardType="email-address"
          value={emailText}
          onChangeText={setEmailText}
          autoCapitalize="none"
        />
        {!isValidEmail(emailText) && emailText !== '' && (
          <Text style={styles.errorText}>Correo no válido</Text>
        )}

        <Text style={styles.label}>phone-pad: </Text>
        <TextInput
          style={[styles.input, !isValidPhone(phoneText) && phoneText ? styles.errorInput : null]}
          placeholder="Ingresa teléfono"
          keyboardType="phone-pad"
          value={phoneText}
          onChangeText={setPhoneText}
        />
        {!isValidPhone(phoneText) && phoneText !== '' && (
          <Text style={styles.errorText}>Teléfono inválido</Text>
        )}

        <Text style={styles.label}>url:</Text>
        <TextInput
          style={[styles.input, !isValidUrl(urlText) && urlText ? styles.errorInput : null]}
          placeholder="Ingresa URL"
          keyboardType="url"
          value={urlText}
          onChangeText={setUrlText}
          autoCapitalize="none"
        />
        {!isValidUrl(urlText) && urlText !== '' && (
          <Text style={styles.errorText}>URL inválida</Text>
        )}

        <Text style={styles.label}>visible-password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa Contraseña"
          keyboardType="visible-password"
          value={visiblePassword}
          onChangeText={setVisiblePassword}
          secureTextEntry={false}
          autoCapitalize="none"
        />
      </ScrollView>

      <Button title="Alerta básica" onPress={AlertaBasica} />
      <Button title="Alerta de confirmación" onPress={AlertaConfirmacion} />
      <Button title="Alerta Erick" onPress={AlertaTexto} />
      <Button title="Alerta Edad" onPress={AlertaConfrimacion} />
      <Button title="Alerta con tiempo" onPress={AlertaTimpo} />
      <Button title="Alerta redirección" onPress={alertaRedireccion} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 80,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#aaa',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 4,
  },
});