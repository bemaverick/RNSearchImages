import React, {Component} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';

import Header from './../../Components/Header'

import styles from './styles';

export default class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    componentDidMount() {

    }

    componentWillMount() {

    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Header
                    backBtn={true}
                    navigation={this.props.navigation}
                    title="Найдено"
                />
                <View style={styles.container}>

                </View>
            </View>
        );
    }
}

