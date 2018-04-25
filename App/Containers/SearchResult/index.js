import React, {Component} from 'react';
import {View, Text, FlatList, ActivityIndicator, Image} from 'react-native';

import Header from './../../Components/Header'

import {Colors} from './../../Themes'
import styles from './styles';

import axios from 'axios';

export default class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            imagesArr: null,
            columnCount: 5
        };

        this.load = this.load.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        this.load();
    }

    componentWillMount() {

    }

    load() {
        let self = this;
        axios.get('https://picsum.photos/list')
            .then(function(response) {

                self.setState({
                    loaded: true,
                    imagesArr: response.data
                });
            }).catch(function(error) {
                console.log(error);
            });
    }

    renderImages() {

        if (this.state.imagesArr) {
            return (
                <FlatList
                    keyExtractor={(item, i) => item.id.toString()}
                    style={styles.flatList}
                    data={this.state.imagesArr}
                    numColumns={this.state.columnCount}
                    //                ListEmptyComponent={this.renderEmptyComponents('Нет товаров со скидками')}
                    //                onEndReached={(e) => this.loadMoreDiscounts(e)}
                    //                onEndReachedThreshold={0.3}
                    //                onRefresh={() => this.refreshDiscounts()}
                    //                refreshing={this.state.discountRefreshing}
                    //  ListFooterComponent={this.renderScrollActivityIndicator(this.state.discountScrollLoading)}
                    renderItem={this.renderItem}

                />
            )
        } else if (!this.state.loaded) {
            return <View style={styles.p20}><ActivityIndicator color={Colors.teal500} /></View>
        } else {
            return <Text>нет изображений</Text>
        }


    }

    renderItem(item) {

        console.log(this.state.columnCount)
        let column = `column${this.state.columnCount}`
        return (
            <View style={styles[column]}>
                <Text>{item.item.author}</Text>
            </View>
        )
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
                    {this.renderImages()}
                </View>
            </View>
        );
    }
}

