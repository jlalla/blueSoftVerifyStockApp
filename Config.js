import React, { Component } from 'react';
import  { View, Text, TouchableHighlight,
    TextInput, StyleSheet } from 'react-native';
import { getConfig, saveConfig } from './Data';

const styles = StyleSheet.create({
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
            user: '',
            password: ''
        };
    }
    

    componentDidMount(){                
        this.props.navigation.addListener('focus', () =>{                                
            getConfig().then(conf => {
                debugger;
                this.setState({company: conf.company});
                this.setState({user: conf.user});
                this.setState({password: conf.password});
            });
        }); 
    }

    handleChangeCompany = (value) =>{
        this.setState({ company: value});
    }

    handleChangeUser = (value) =>{
        this.setState({ user: value});
    }

    handleChangePassword = (value) =>{
        this.setState({ password: value});
    }

    handleConfigPress = () =>{
        //console.log(this.state);
        //saveConfig(this.state)
          //  .then(() => this.props.navigation.navigate('home'));
        saveConfig(this.state);
        this.props.navigation.navigate('home');
    }

    render(){
        return (
            <View style={{flex: 1}}>
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
                        placeholder="Usuario"
                        spellCheck={false}
                        value={this.state.user} 
                        onChangeText={this.handleChangeUser}
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
            </View>
        );
    }
}    