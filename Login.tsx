import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet
} from 'react-native';

export default function Login({ navigation } : any) {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const iniciarSesion = () => {
    if (usuario === '' || contrasena === '') {
      Alert.alert('Error', 'Complete todos los campos');
      return;
    }

    navigation.navigate('MenuPrincipal');
  };

  return (
    <View style={styles.container}>

      <Image
        source={require('./login.jpeg')}
        style={styles.logo}
      />

      <Text style={styles.title}>AbarroSmart</Text>
      <Text style={styles.subtitle}>
        Gestión de Tienda de Abarrotes
      </Text>

      <Text style={styles.label}>Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su usuario o correo"
        value={usuario}
        onChangeText={setUsuario}
      />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="********"
        secureTextEntry
        value={contrasena}
        onChangeText={setContrasena}
      />

      <TouchableOpacity
        style={styles.boton}
        onPress={iniciarSesion}
      >
        <Text style={styles.textoBoton}>
          Iniciar sesión
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('RecuperarContrasena')
        }
      >
        <Text style={styles.link}>
          ¿Olvidó su contraseña?
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#fff'
  },

  logo: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    marginBottom: 15
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  subtitle: {
    textAlign: 'center',
    color: 'gray',
    marginBottom: 25
  },

  label: {
    fontWeight: 'bold',
    marginBottom: 5
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
    borderRadius: 8,
    marginTop: 10
  },

  textoBoton: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  link: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 15,
    textDecorationLine: 'underline'
  }
});