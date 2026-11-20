import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function EditarProducto({ navigation }: any) {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Editar producto
      </Text>

      <Text style={styles.label}>
        Nombre del producto
      </Text>

      <TextInput
        style={styles.input}
        defaultValue="Leche Entera 1 L"
      />

      <Text style={styles.label}>
        Precio de venta
      </Text>

      <TextInput
        style={styles.input}
        defaultValue="$28.00"
      />

      <Text style={styles.label}>
        Existencias disponibles
      </Text>

      <TextInput
        style={styles.input}
        defaultValue="25"
      />

      <Text style={styles.label}>
        Fecha de caducidad
      </Text>

      <TextInput
        style={styles.input}
        defaultValue="15/12/2026"
      />

      <TouchableOpacity style={styles.boton}>
        <Text style={styles.textoBoton}>
          Guardar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boton}>
        <Text style={styles.textoBoton}>
          Cancelar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botonSecundario}
        onPress={() => navigation.goBack()}
      >
        <Text>
          Regresar a Lista de productos
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botonSecundario}
        onPress={() => navigation.navigate('MenuPrincipal')}
      >
        <Text>
          Regresar al menú
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },

  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },

  boton: {
    backgroundColor: '#172746',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },

  botonSecundario: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
});