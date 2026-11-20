import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Login';
import RecuperarContrasena from './RecuperarContrasena';
import MenuPrincipal from './MenuPrincipal';

import ListaProductos from './ListaProductos';
import EditarProducto from './EditarProducto';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="RecuperarContrasena"
          component={RecuperarContrasena}
        />

        <Stack.Screen
          name="MenuPrincipal"
          component={MenuPrincipal}
        />

        <Stack.Screen
          name="ListaProductos"
          component={ListaProductos}
        />

        <Stack.Screen
          name="EditarProducto"
          component={EditarProducto}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
