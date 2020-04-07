import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Config from './Config';
import Home from './Home';
import SearchResult from './SearchResult';

//const Stack = createStackNavigator();
const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
  drawerWidth: WIDTH * 0.83
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (    
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="home" component={Home} options={{ drawerLabel: 'Inicio' }}/>
        <Drawer.Screen name="config" component={Config} options={{ drawerLabel: 'Configuración' }}/>
        <Drawer.Screen name="result" component={SearchResult} options={{ drawerLabel: '' }}/>
      </Drawer.Navigator>
  </NavigationContainer>
  );
}