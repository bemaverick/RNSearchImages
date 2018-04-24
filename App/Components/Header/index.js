import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'



import { ApplicationStyles, HitSlope, Colors } from './../../Themes'



export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        
    }

    
    render () {
        return (
            <View style={styles.container}>
                <StatusBar />
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = {
    container: {
        backgroundColor: 'white',
        width: '100%',
        justifyContent: 'center',
        height: 60,
        paddingTop: 20,
        shadowColor: 'green',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 3,
        shadowOpacity: 0.3,
        elevation: 2
    },
    title: {
        fontSize: 20,
        textAlign: 'center'

    }
}