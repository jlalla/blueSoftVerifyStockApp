import React, { Component } from 'react';
import  { View, Text, TouchableHighlight,
    TextInput, StyleSheet } from 'react-native';
import { getConfig } from './Data';
import { getStockByProduct } from './Api';
import { debug } from 'react-native-reanimated';
import MenuButton from './components/MenuButton';

const styles = StyleSheet.create({
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
    },
    fieldContainer:{
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    text: {
        height: 40,
        margin: 0,
        marginRight: 7,
        paddingLeft: 10
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    borderTop: {
        borderColor: '#edeeef',
        borderTopWidth: 0.5
    }
});


export default class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            company: null,
            user: '',
            password: '',
            product: ''
        };
    }

    componentDidMount(){
        this.props.navigation.addListener('focus', () =>{                                
            getConfig().then(conf => {                
                this.setState({company: conf.company});
                this.setState({user: conf.user});
                this.setState({password: conf.password});
                
                if(conf.company == null){
                    this.props.navigation.jumpTo('config');
                }
                else{
                    this.forceUpdate();
                }
            });
        }); 
    }

    handleChangeProduct = (value) => {
        this.setState({ product : value});
    }

    handleSearchPress = () => {
        getStockByProduct(
            this.state.company,
            this.state.password,
            this.state.product,
        ).then(result => {            
            this.props.navigation.jumpTo('result', result)});
    }

    render(){
        return(            
            <View style={{flex: 1}}>
                <MenuButton navigation={this.props.navigation} />
                <Text style={styles.title}>blueSoft STOCK</Text>
                <Text style={styles.subtitle}>Consultá el stock de un producto en todas las sucursales:</Text>
                <View style={styles.fieldContainer}>                                         
                    <TextInput 
                        style={styles.text}
                        placeholder="Producto"
                        spellCheck={false}
                        value={this.state.product} 
                        onChangeText={this.handleChangeProduct}
                    />
                </View>
                <TouchableHighlight
                    onPress={this.handleSearchPress}
                    style={styles.button}>
                    <Text style={styles.buttonText}>BUSCAR</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
