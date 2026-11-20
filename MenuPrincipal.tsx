import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function MenuPrincipal({ navigation }: any) {
  return (
    <View style={styles.container}>

      <Text style={styles.empresa}>
        AbarroSmart
      </Text>

      <Text style={styles.saludo}>
        ¡Hola, Administrador!
      </Text>

      <Text style={styles.menu}>
        Menú de operaciones
      </Text>

      <View style={styles.fila}>

        <TouchableOpacity
          style={styles.tarjeta}
          onPress={() => navigation.navigate('ListaProductos')}
        >
          <Text style={styles.tituloTarjeta}>
            Productos
          </Text>
          
          <Text>
            Ver y agregar catálogos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tarjeta}>
          <Text style={styles.tituloTarjeta}>
            Inventario
          </Text>
          <Text>
            Control de existencias
          </Text>
        </TouchableOpacity>

      </View>

      <View style={styles.fila}>

        <TouchableOpacity style={styles.tarjeta}>
          <Text style={styles.tituloTarjeta}>
            Ventas
          </Text>
          <Text>
            Registrar cobros
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tarjeta}>
          <Text style={styles.tituloTarjeta}>
            Reportes
          </Text>
          <Text>
            Gráficos de utilidades
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },

  empresa: {
    fontWeight: 'bold',
    marginTop: 30
  },

  saludo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  },

  menu: {
    fontWeight: 'bold',
    marginBottom: 20
  },

  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },

  tarjeta: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 20
  },

  tituloTarjeta: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10
  }
});