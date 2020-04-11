import React, { Component } from 'react';
import  { View, Text, FlatList, StyleSheet } from 'react-native';
import uuid from 'uuid';
import MenuButton from './components/MenuButton';
import { getConfig } from './Data';
import ResultItem from './ResultItem';
import ResultItemVariants from './ResultItemVariants';

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
        fontSize: 22
    },
    subtitle: {
        fontSize: 20,
        padding: 10
    }
});

export default class SearchResult extends Component{

    state = {
        result: [],
        variants : false
    }

    componentDidMount(){
        this.props.navigation.addListener('focus', () =>{                                            
            getConfig().then(conf => {                
                this.setState({ variants: conf.variants});

                var array = [];
                for(var i in this.props.route.params){
                    array.push(this.props.route.params[i]);
                }            
                this.setState({result: array.map(
                    arrayItem => ({...arrayItem, id: uuid() }))});
                
                /* eliminamos los parámetros */
                this.props.route.params = null;
            });
            
        });
    }

    handleRenderItem = (item) => {                
        if(this.state.variants){
            return <ResultItemVariants item={item}/>
        }else{
            return <ResultItem item={item}/>
        }
    }

    render(){                                                
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
                    renderItem={({item}) => this.handleRenderItem(item)}
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
