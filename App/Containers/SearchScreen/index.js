import React, {Component} from 'react';
import {View, Text, Button, ActivityIndicator, Slider} from 'react-native';
import Header from './../../Components/Header'

import axios from 'axios';

import styles from './styles';

export default class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            source: null,
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

    render() {
        return (
            <View style={styles.mainContainer}>
                <Header
                    title='Поиск'
                />
                <View style={styles.container}>
                    <View style={styles.sliderBlock}>
                        <Slider />
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

