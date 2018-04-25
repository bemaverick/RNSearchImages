import React, { Component } from 'react'
import { View, Text, StatusBar, TouchableOpacity } from 'react-native'



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
                {
                    this.props.backBtn ?
                        <TouchableOpacity
                            hitSlop={{
                                top: 5,
                                left: 10,
                                right: 15,
                                bottom: 5
                            }}
                            onPress={() => this.props.navigation.goBack()}
                            style={styles.backWrap}>
                            <Text style={styles.backText}>&#8249;</Text>
                        </TouchableOpacity>
                        :
                        null

                }

                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = {
    container: {
        backgroundColor: Colors.teal50,
        width: '100%',
        justifyContent: 'center',
        height: 70,
        paddingTop: 15,

//        shadowColor: 'green',
//        shadowOffset: {
//            width: 0,
//            height: 1
//        },
//        shadowRadius: 3,
//        shadowOpacity: 0.3,
//        elevation: 2
    },
    title: {
        fontSize: 16,
        textAlign: 'center'

    },
    backWrap: {
        position: 'absolute',
        height: 70,
        zIndex: 200,
        paddingTop: 15,
        top: 0,
        left: 10,
        justifyContent: 'center'


    },
    backText: {
        fontSize: 35,
        textAlign: 'center'
    }
}