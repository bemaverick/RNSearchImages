import React, {Component} from 'react';
import {View, Text, FlatList, ActivityIndicator, Image, Modal, TouchableOpacity, Platform} from 'react-native';

import Header from './../../Components/Header'

import PhotoView from 'react-native-photo-view';

import {Colors} from './../../Themes'
import styles from './styles';

import axios from 'axios';

export default class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            finishLoading: false,
            imagesArr: null,
            columnCount: this.props.navigation.state.params.column,
            activeItemIndex: 0
        };

        this.load = this.load.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        let navParams = this.props.navigation.state.params;

        this.load();
    }

    componentWillMount() {

    }

    load() {
        let searchQuery = this.props.navigation.state.params.text;

        let self = this;
        axios.get(`https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${searchQuery}`,
            { headers: { "Ocp-Apim-Subscription-Key": "939e279c6a0d45c590e03269d19349a4" } })
            .then(function(response) {
                self.setState({
                    finishLoading: true,
                    imagesArr: response.data.value
                });
            }).catch(function(error) {
                console.log(error);
            });
    }

    renderImages() {

        if (this.state.imagesArr) {
            return (
                <FlatList
                    keyExtractor={(item, i) => i.toString()}
                    style={styles.flatList}
                    data={this.state.imagesArr}
                    numColumns={this.state.columnCount}
                    ListEmptyComponent={() => <Text>нет изображений</Text>}
                    //                onEndReached={(e) => this.loadMoreDiscounts(e)}
                    //                onEndReachedThreshold={0.3}
                    //                onRefresh={() => this.refreshDiscounts()}
                    //                refreshing={this.state.discountRefreshing}
                    //  ListFooterComponent={this.renderScrollActivityIndicator(this.state.discountScrollLoading)}
                    renderItem={({item, index}) => this.renderItem(item, index)}

                />
            )
        } else if (!this.state.finishLoading) {
            return <View style={styles.p20}><ActivityIndicator color={Colors.teal500} /></View>
        }

    }

    renderItem(item, i) {
        console.log(item)

        let column = `column${this.state.columnCount}`
        return (
            <TouchableOpacity
                activeOpacity={0.92}
                onPress={() => this.showPhoto(i)}
                >
                <Image
                    source={{uri: item.thumbnailUrl}}
                    style={styles[column]}>
                </Image>
            </TouchableOpacity>

        )
    }
    showPhoto = (i) => {
       this.displayModal(true);
       this.setState({activeItemIndex: i})
    };

    displayModal = (val) => {
        this.setState({modalVisible: val})
    };

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

                {
                    this.state.finishLoading ?
                        <Modal
                            transparent={true}
                            hardwareAccelerated={true}
                            animationType={'fade'}
                            onRequestClose={() => this.displayModal(false)}
                            visible={this.state.modalVisible}>
                            <View style={styles.modalContainer}>
                                <PhotoView
                                    onViewTap={() => this.displayModal(false)}
                                    source={{uri: this.state.imagesArr[this.state.activeItemIndex].thumbnailUrl}}
                                    minimumZoomScale={1}
                                    maximumZoomScale={4}
                                    androidScaleType="fitCenter"
                                    resizeMode={Platform.OS === "android" ? "" : "contain"}
                                    onLoadEnd={() => null}
                                    style={styles.fullScreen}
                                />
                            </View>
                        </Modal>
                        :
                        null
                }
            </View>
        );
    }
}

