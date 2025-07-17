import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Detalle({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla Detalle</Text>
      <Button
        title="Regresar a Perfil"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
