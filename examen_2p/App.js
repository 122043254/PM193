import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  ScrollView,
  Image,
  StyleSheet
} from 'react-native';
import axios from 'axios';

export default function App() {
  const [tipo, setTipo] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [cargando, setCargando] = useState(false);
  const [lugares, setLugares] = useState([]);

  const API_KEY = 'Bearer AO55F1FQV4T5YJ5WYOOLU5CQEGDZKYAEDLOGLPTKLZUGTJSH'; // ✅ Tu API key

  // 🔍 Obtener foto del lugar
  const obtenerFoto = async (fsq_id) => {
    if (!fsq_id) return null;

    try {
      const res = await axios.get(
        `https://places-api.foursquare.com/places/${fsq_id}/photos`,
        {
          headers: {
            accept: 'application/json',
            Authorization: API_KEY,
            'X-Places-Api-Version': '2025-06-17',
          },
        }
      );

      if (res.data.length > 0) {
        const foto = res.data[0];
        return `${foto.prefix}original${foto.suffix}`;
      }
    } catch (error) {
      if (error.response?.status === 404) {
        console.log(`Sin foto disponible para ${fsq_id}`);
      } else {
        console.log('Error al obtener foto:', error.message);
      }
    }

    return null;
  };

  // 🔍 Búsqueda principal
  const buscar = async () => {
    if (!tipo || !ciudad) {
      alert('Por favor ingresa tipo de comida y ciudad.');
      return;
    }

    setCargando(true);
    setLugares([]);

    try {
      const response = await axios.get(
        `https://places-api.foursquare.com/places/search?query=${tipo}&near=${ciudad}&limit=3`,
        {
          headers: {
            accept: 'application/json',
            authorization: API_KEY,
            'X-Places-Api-Version': '2025-06-17',
          },
        }
      );

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const lugaresConDetalles = [];

  for (const lugar of response.data.results) {
    const fsq_id = lugar.fsq_place_id || lugar.fsq_id || lugar.id;
    const imagen = await obtenerFoto(fsq_id);
    lugaresConDetalles.push({
      ...lugar,
      imagen,
      direccion: lugar.location?.formatted_address || 'No disponible',
      telefono: lugar.tel || 'No disponible',
    });
    await delay(200); // Espera 200ms entre llamadas
  }

setLugares(lugaresConDetalles);

      setLugares(lugaresConDetalles);
    } catch (error) {
      console.error('Error al buscar lugares:', error.message);
      alert('Hubo un error al buscar lugares.');
    } finally {
      setCargando(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Buscador de Restaurantes</Text>

      <TextInput
        placeholder="Tipo de comida (ej. sushi, pizza)"
        value={tipo}
        onChangeText={setTipo}
        style={styles.input}
      />
      <TextInput
        placeholder="Ciudad (ej. Guadalajara)"
        value={ciudad}
        onChangeText={setCiudad}
        style={styles.input}
      />

      <Button title="Buscar" onPress={buscar} />

      {cargando && <ActivityIndicator size="large" color="#0000ff" style={{ margin: 20 }} />}

      <ScrollView style={{ marginTop: 20 }}>
        {lugares.map((lugar, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.nombre}>{lugar.name}</Text>

            {lugar.imagen ? (
              <Image
                source={{ uri: lugar.imagen }}
                style={{ width: '100%', height: 200, borderRadius: 10 }}
              />
            ) : (
              <Image
                source={{ uri: 'https://via.placeholder.com/400x200?text=Sin+foto' }} // 🔁 Imagen por defecto
                style={{ width: '100%', height: 200, borderRadius: 10 }}
              />
            )}

            <Text style={styles.info}>📍 {lugar.direccion}</Text>
            <Text style={styles.info}>📞 {lugar.telefono}</Text>
            <Text style={styles.info}>📏 Distancia: {lugar.distance} m</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  nombre: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  info: { fontSize: 14, marginTop: 4 },
});