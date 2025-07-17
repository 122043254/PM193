import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './profile';
import Detail from './detail';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PerfilUsuario" component={Profile} options={{ title: 'Perfil de Usuario' }} />
      <Stack.Screen name="DetalleUsuario" component={Detail} options={{ title: 'Detalle del Usuario' }} />
    </Stack.Navigator>
  );
}
