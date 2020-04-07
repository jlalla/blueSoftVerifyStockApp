import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Config from './Config';
import Home from './Home';
import SearchResult from './SearchResult';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{title: 'Buscar'}}
        />
        <Stack.Screen
          name="config"
          component={Config}
          options={{title: 'Configuración'}}
        />
        <Stack.Screen 
          name="result" 
          component={SearchResult}
          options={{title: 'Resultado'}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}