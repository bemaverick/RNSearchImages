import React, {Component} from 'react';
import {View, Text, Button, ActivityIndicator, Slider, TextInput} from 'react-native';
import Header from './../../Components/Header'

import axios from 'axios';

import styles from './styles';

export default class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            source: null,

            text: ''
        };
        this.load = this.load.bind(this);

    }

    componentDidMount() {

        this.load();
    }

    load() {
        let self = this;
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(function(response) {
            self.setState({
                loaded: true,
                source: response.data.message
            });
        }).catch(function(error) {
            console.log(error);
        });
    }

    componentWillMount() {

    }

    inputHandler = (text) => {

    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Header
                    title='Поиск'
                />
                <View style={styles.container}>


                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Text>Text</Text>
                        </View>
                        <View style={styles.right}>
                            <TextInput
//                                onBlur={() => this.validateForm('phoneValid')}
                                placeholder={'enter'}
//                                placeholderTextColor={Colors.textLightGrey}
                                underlineColorAndroid={'transparent'}
//                                keyboardType={'phone-pad'}
                                style={styles.textInputStyle}
                                //onFocus={() => this.onFocus('phone')}
//                                maxLength={18}
                                onChangeText={(text) => this.inputHandler(text)}
                                value={this.state.input}/>

                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Text>number of column</Text>
                        </View>
                        <View style={styles.right}>
                            <Slider />
                        </View>
                    </View>

                    <Button
                        onPress={() => this.props.navigation.navigate('ResultScreen')}
                        title="Search"
                        color="#841584"

                    />

                </View>
            </View>
        );
    }
}

