import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function ResultItem({ item }){          
    return(        
        <View style={styles.resultItem}>
            <View style={styles.itemHeader}>                
                <Text style={styles.codigoSucursal}>{item.sucursal.codigo}</Text>
                <Text style={styles.descripcionSucursal}>{item.sucursal.descripcion}</Text>
            </View>
            <View style={styles.counterContainer}>
                <View style={styles.counter}>
                    <Text style={styles.counterText}>{item.cantidad}</Text>
                    <Text style={styles.counterLabel}>CANTIDAD</Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
  resultItem: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
    paddingTop: 10,
    paddingBottom: 20,
    margin: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  itemHeader: {
    flex: 1,
    flexDirection: 'row',
  },
  codigoSucursal: {
    fontWeight: '200',
    fontSize: 24,
    color: '#bdbdbd',
    width: '30%',
    textAlign: 'right',
  },
  descripcionSucursal: {
    fontSize: 20,
    fontWeight: '300',
    marginLeft: 7,
    textAlign: 'left',
    textAlignVertical: 'center'
  },
  counterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  counter: {
    width: '25%',
    flex: 1,
  },
  counterText: {
    fontSize: 40,
    textAlign: 'center',
  },
  counterLabel: {
    fontSize: 13,
    fontWeight: '100',
    color: '#a3a3a3',
    textAlign: 'center',
    paddingTop: 0,
  },
});
