import React, { Component } from 'react';
import  { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import uuid from 'uuid';
import MenuButton from './components/MenuButton';
import { getConfig } from './Data';
import ResultItem from './ResultItem';
import ResultItemVariants from './ResultItemVariants';

export default class SearchResult extends Component{

    state = {
        result: [],
        image: require('./assets/SinImagen.png'),
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
                                      
                if(array.length > 0){                                        
                    this.setState({image:{ uri: 'http://qreative.eastus.cloudapp.azure.com/bluesoft/empresas/' + conf.company + '/productos/' + array[0].producto.codigo + '.jpg'}});
                }
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

    onError = (error) => {
        this.setState({ image: require('./assets/SinImagen.png')})
    }

    render(){                                                
        if(this.state.result !== null && this.state.result.length > 0)            
            return([
                <View>
                    <MenuButton navigation={this.props.navigation} />
                    <Text style={styles.title}>Resultado</Text>                       
                </View>,
                <View style={styles.header}>                    
                    <Text style={styles.product}>{this.state.result[0].producto.codigo} {this.state.result[0].producto.descripcion}</Text>
                    <Image style={styles.image}
                        source={this.state.image}
                        onError={this.onError.bind(this)}
                    />                    
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


const styles = StyleSheet.create({
    list: {               
        paddingTop: 10,
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
    },
    header:{
        
    },
    product: {
        padding: 10,
        fontSize: 20
    },
    image: {        
        height: 120,
        width: 80,
        margin: 10        
    }
});