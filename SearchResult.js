import React, { Component } from 'react';
import  { View, Text, FlatList, StyleSheet } from 'react-native';
import uuid from 'uuid';
import ResultItem from './ResultItem';
import MenuButton from './components/MenuButton';

const styles = StyleSheet.create({
    list: {
        //flex: 1,        
        paddingTop: 20,
        backgroundColor: '#F3F3F3'
    },
    title: {
        marginTop: 40,
        marginLeft: 60,
        marginBottom: 20,
        height: 40,
        fontSize: 20
    },
    subtitle: {
        fontSize: 18,
        padding: 10
    }
});

export default class SearchResult extends Component{

    state = {
        result: []
    }

    componentDidMount(){
        this.props.navigation.addListener('focus', () =>{                                

            var array = []
            for(var i in this.props.route.params){
                array.push(this.props.route.params[i]);
            }            
            this.setState({result: array.map(
                arrayItem => ({...arrayItem, id: uuid() }))});
        });
    }

    render(){                                        
        debugger;
        if(this.state.result !== null && this.state.result.length > 0)
            return([
                <View>
                    <MenuButton navigation={this.props.navigation} />
                    <Text style={styles.title}>Resultado</Text>                    
                    <Text style={styles.subtitle}>{this.state.result[0].producto.codigo} {this.state.result[0].producto.descripcion}</Text>
                </View>,
                <FlatList 
                    key="flatList"
                    style={styles.list}
                    data={this.state.result}
                    renderItem={({item}) => <ResultItem item={item} />}
                    keyExtractor = {item => item.id}
                />]
            );
        else
            return (
                <View>
                    <MenuButton navigation={this.props.navigation} />
                    <Text style={styles.title}>Búsqueda</Text>
                    <Text style={styles.subtitle}>No hay resultados.</Text>
                </View>
            );        
    }
}
