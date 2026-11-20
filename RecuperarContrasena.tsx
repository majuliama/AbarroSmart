import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet
} from 'react-native';

export default function RecuperarContrasena({ navigation } : any) {

  const [nueva, setNueva] = useState('');
  const [confirmar, setConfirmar] = useState('');

  const cambiarContrasena = () => {

    if (nueva === '' || confirmar === '') {
      Alert.alert('Error', 'Complete los campos');
      return;
    }

    if (nueva !== confirmar) {
      Alert.alert(
        'Error',
        'Las contraseñas no coinciden'
      );
      return;
    }

    Alert.alert(
      'Éxito',
      'Contraseña actualizada'
    );

    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Recuperar Contraseña
      </Text>

      <TextInput
        placeholder="Nueva contraseña"
        secureTextEntry
        style={styles.input}
        value={nueva}
        onChangeText={setNueva}
      />

      <TextInput
        placeholder="Confirmar contraseña"
        secureTextEntry
        style={styles.input}
        value={confirmar}
        onChangeText={setConfirmar}
      />

      <TouchableOpacity
        style={styles.boton}
        onPress={cambiarContrasena}
      >
        <Text style={styles.textoBoton}>
          Cambiar contraseña
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15
  },

  boton: {
    backgroundColor: '#172338',
    padding: 15,
    borderRadius: 8
  },

  textoBoton: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});