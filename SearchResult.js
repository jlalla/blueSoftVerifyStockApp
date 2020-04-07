import React, { Component } from 'react';
import  { FlatList, StyleSheet } from 'react-native';
import uuid from 'uuid';
import ResultItem from './ResultItem';

const styles = StyleSheet.create({
    list: {
        //flex: 1,        
        paddingTop: 20,
        backgroundColor: '#F3F3F3'
    }
});

export default class SearchResult extends Component{

    state ={
        result: []
    }

    componentDidMount(){
        this.setState({result : this.props.route.params});
        debugger;
        if(this.props.route.params.length > 0)
            this.props.navigation.setOptions({ title: this.props.route.params[0].producto.descripcion })
    }

    render(){        
        return(
            <FlatList 
                key="flatList"
                style={styles.list}
                data={this.state.result}
                renderItem={({item}) => <ResultItem item={item} />}
                keyExtractor = {item => uuid()}
            />
        );
    }
}
