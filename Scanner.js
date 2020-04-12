import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { getConfig } from './Data';
import { getStockByProduct, getStockByProductWithVariants } from './Api';

export default function Scanner({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);  

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();    
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log(`Se leyó el código de barras ${data} de tipo ${type}!`);    
    getConfig().then(conf => {              
            
      //obtenemos el producto del código de barras leído
      let product = data;
      if(conf.variants){
        if(conf.talleColorAnchoFijo){
          product = data.substring(conf.talleColorProductoDesde, data.length - conf.talleColorProductoCantidadDeCaracteres + 1);
        }else if(data.indexOf(conf.talleColorCaracter) > 0){
          product = data.substr(0, data.indexOf(conf.talleColorCaracter)); 
        }else if(data.indexOf(conf.talleColorSegundoCaracter) > 0){
          product = data.substr(0, data.indexOf(conf.talleColorSegundoCaracter)); 
        }else if(data.indexOf(conf.talleColorTercerCaracter) > 0){
          product = data.substr(0, data.indexOf(conf.talleColorTercerCaracter)); 
        }
      }
      
      //buscamos el stock del producto
      if(conf.variants){
        getStockByProductWithVariants(
          conf.company,
          conf.password,
          product,
        ).then(result => {                     
          navigation.jumpTo('result', result)});
      }
      else{
        getStockByProduct(
          conf.company,
          conf.password,
          product
        ).then(result => {          
          navigation.jumpTo('result', result)});
      }
    });    
  };

  if (hasPermission === null) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Abriendo cámara...</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sin acceso a la cámara.</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && <Button title={'Tocá para escanear nuevamente'} onPress={() => setScanned(false)} />}
    </View>
  );
}