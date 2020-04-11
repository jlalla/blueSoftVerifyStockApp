import React, { Component } from 'react';
import  { View, Text, TextInput, Switch, 
    TouchableHighlight, StyleSheet } from 'react-native';
import { getConfig, saveConfig } from './Data';
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

export default class Config extends Component{

    constructor(props){
        super(props);
        this.state = {
            company: null,            
            password: '',
            variants: false
        };
    }    

    componentDidMount(){                
        this.props.navigation.addListener('focus', () =>{                                
            getConfig().then(conf => {
                this.setState({company: conf.company});                
                this.setState({password: conf.password});
                this.setState({variants: conf.variants});
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

    handleChangeVariants = (value) => {        
        this.setState({ variants: value });
    }

    handleConfigPress = () =>{
        saveConfig(this.state);
        this.props.navigation.jumpTo('home');
    }

    render(){
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
                    <Text style={styles.switchText}>{this.state.variants?'Usar talle-color':'No usar talle-color'}</Text>
                    <Switch
                        style={styles.switch}
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={variants ? "#f5dd4b" : "#f4f3f4"}                        
                        onValueChange={this.handleChangeVariants}
                        value={this.state.variants}
                    />                   
                </View>                
                <TouchableHighlight
                    onPress={this.handleConfigPress}
                    style={styles.button}>
                    <Text style={styles.buttonText}>CONFIGURAR</Text>
                </TouchableHighlight>
            </View>
        );
    }
}    