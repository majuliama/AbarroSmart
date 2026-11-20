import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

export default function ListaProductos({ navigation }: any) {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Lista de productos
      </Text>

      <TextInput
        style={styles.buscador}
        placeholder="Buscar producto..."
      />

      <View style={styles.tabla}>

        <View style={styles.encabezado}>
          <Text style={styles.header}>Producto</Text>
          <Text style={styles.header}>Precio</Text>
          <Text style={styles.header}>Stock</Text>
        </View>

        <View style={styles.fila}>
          <Text>Arroz (1 kg)</Text>
          <Text>$25</Text>

          <View style={styles.acciones}>
            <Text>50</Text>

            <TouchableOpacity
              style={styles.icono}
              onPress={() => navigation.navigate('EditarProducto')}
            >
              <Feather name="edit" size={18} color="#444" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icono}>
              <Feather name="trash-2" size={18} color="red" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.fila}>
          <Text>Frijol (1 kg)</Text>
          <Text>$32</Text>

          <View style={styles.acciones}>
            <Text>40</Text>

            <TouchableOpacity
              style={styles.icono}
              onPress={() => navigation.navigate('EditarProducto')}
            >
              <Feather name="edit" size={18} color="#444" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icono}>
              <Feather name="trash-2" size={18} color="red" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.fila}>
          <Text>Aceite (1 L)</Text>
          <Text>$45</Text>

          <View style={styles.acciones}>
            <Text>15</Text>

            <TouchableOpacity
              style={styles.icono}
              onPress={() => navigation.navigate('EditarProducto')}
            >
              <Feather name="edit" size={18} color="#444" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icono}>
              <Feather name="trash-2" size={18} color="red" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.fila}>
          <Text>Azúcar (1 kg)</Text>
          <Text>$22</Text>

          <View style={styles.acciones}>
            <Text>30</Text>

            <TouchableOpacity
              style={styles.icono}
              onPress={() => navigation.navigate('EditarProducto')}
            >
              <Feather name="edit" size={18} color="#444" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icono}>
              <Feather name="trash-2" size={18} color="red" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.fila}>
          <Text>Leche (1 L)</Text>
          <Text>$28</Text>

          <View style={styles.acciones}>
            <Text>25</Text>

            <TouchableOpacity
              style={styles.icono}
              onPress={() => navigation.navigate('EditarProducto')}
            >
              <Feather name="edit" size={18} color="#444" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icono}>
              <Feather name="trash-2" size={18} color="red" />
            </TouchableOpacity>
          </View>
        </View>

      </View>

      <TouchableOpacity
        style={styles.boton}
        onPress={() => navigation.navigate('EditarProducto')}
      >
        <Text style={styles.textoBoton}>
          Agregar producto
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botonSecundario}
        onPress={() => navigation.goBack()}
      >
        <Text>Regresar al menú</Text>
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

  buscador: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },

  tabla: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },

  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },

  header: {
    fontWeight: 'bold',
  },

  acciones: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icono: {
    marginLeft: 10,
  },

  boton: {
    backgroundColor: '#172746',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
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
  },
});