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
            columnCount: this.props.navigation.state.params.column
        };

        this.load = this.load.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        let navParams = this.props.navigation.state.params;

        console.log(navParams)
        this.load();
    }

    componentWillMount() {

    }

    load() {
        let searchQuery = this.props.navigation.state.params.text;

        let self = this;
        axios.get(`https://api.gettyimages.com/v3/search/images/creative?phrase=${searchQuery}`, { headers: { "Api-Key": "cj3fm2t5jkanh6g79zv88ry6" } })
            .then(function(response) {
            console.log(response);
                self.setState({
                    loaded: true,
                    imagesArr: response.data.images
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
                    ListEmptyComponent={() => <Text>нет изображений</Text>}
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

            console.log(нет)
            return
        }


    }

    renderItem(item) {


        let column = `column${this.state.columnCount}`
        return (
            <Image
                source={{uri: item.item.display_sizes[0].uri}}
                style={styles[column]}>

            </Image>
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

