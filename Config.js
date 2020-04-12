import React, { Component } from 'react';
import  { View, Text, TextInput, 
    TouchableHighlight, StyleSheet, Alert, Image } from 'react-native';
import { getConfig, saveConfig } from './Data';
import MenuButton from './components/MenuButton';
import { getBarCodeConfiguration } from './Api';

export default class Config extends Component{

    constructor(props){
        super(props);
        this.state = {
            company: null,            
            password: '',
            loading: false
        };
    }    

    componentDidMount(){                
        this.props.navigation.addListener('focus', () =>{                                
            getConfig().then(conf => {
                this.setState({company: conf.company});                
                this.setState({password: conf.password});            
                this.forceUpdate();
            });
        }); 
    }

    handleChangeCompany = (value) =>{
        this.setState({ company: value});
    }

    handleChangePassword = (value) => {
        this.setState({ password: value });
    }

    handleConfigPress = () =>{
        this.setState({loading : true});
        getBarCodeConfiguration(this.state.company, this.state.password)
            .then((result) => {                
                saveConfig({ 
                    company: this.state.company,
                    password: this.state.password,
                    variants: result.StockAppConsultarPorProducto.valor.toLowerCase() === 'true'? 'false' : 'true', //ugly code
                    talleColorAnchoFijo : result.TalleColorAnchoFijo.valor.toLowerCase(),
                    talleColorCaracter: result.TalleColorCaracter.valor,
                    talleColorSegundoCaracter: result.TalleColorSegundoCaracter.valor,
                    talleColorTercerCaracter: result.TalleColorTercerCaracter.valor,
                    ordenProductoColorTalle: result.CodigoDeBarrasOrdenProductoColorTalle.valor.toLowerCase(),
                    talleColorProductoDesde: result.TalleColorProductoDesde.valor,
                    talleColorProductoCantidadDeCaracteres: result.TalleColorProductoCantidadDeCaracteres.valor
                    });
                this.setState({loading : false});
                this.props.navigation.jumpTo('home');
            })
            .catch((error) => {                  
                this.setState({loading : false});              
                Alert.alert('Error de conexión', 'Ocurrió un error al querer conectarse. Asegurate de tener los datos de conexión correctos o tener internet en el teléfono.');
            });        
    }

    render(){
        let loadingJsx = [];
        if(this.state.loading){
            loadingJsx.push(
                <Image source={require('./assets/loading.gif')} alt="loading..." />
            );
        }

        return (
            <View style={{flex: 1}}>
                <MenuButton navigation={this.props.navigation} />
                <Text style={styles.title}>blueSoft Configuración</Text>
                <Text style={styles.subtitle}>Indicá los siguientes valores para poder conectarte con tus datos:</Text>
                <View style={styles.fieldContainer}> 
                    <TextInput 
                        style={styles.text}
                        placeholder="Empresa"
                        spellCheck={false}
                        value={this.state.company} 
                        onChangeText={this.handleChangeCompany}
                    />                    
                    <TextInput 
                        style={[styles.text, styles.borderTop]}    
                        placeholder="Contraseña"
                        spellCheck={false}
                        value={this.state.password} 
                        onChangeText={this.handleChangePassword}
                        secureTextEntry={true}
                    /> 
                </View>                
                <TouchableHighlight
                    onPress={this.handleConfigPress}
                    style={styles.button}>
                    <Text style={styles.buttonText}>CONFIGURAR</Text>
                </TouchableHighlight>
                {loadingJsx}
            </View>
        );
    }
}    


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
    text:{
        height: 40,
        margin: 0,
        marginRight: 7,
        paddingLeft: 10
    },
    switchText:{
        margin: 0,        
        paddingTop: 10,
        paddingLeft: 10
    },
    switch:{
        marginTop: -10
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