import React, {Component} from 'react';
import {View, Text, FlatList, ActivityIndicator, Modal, TouchableOpacity, Platform, Dimensions} from 'react-native';

import Header from './../../Components/Header'

import PhotoView from 'react-native-photo-view';
import ProgressBar from 'react-native-progress/Bar';
import Image from 'react-native-image-progress';
import Carousel from 'react-native-snap-carousel';

import {Colors} from './../../Themes'
import styles from './styles';

import axios from 'axios';

const { width } = Dimensions.get('window');

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
                    ListEmptyComponent={() =>
                        <View style={styles.hollowBlock}>
                            <Text style={styles.textCenter}>нет изображений</Text>
                        </View>}
                    renderItem={({item, index}) => this.renderItem(item, index)}

                />
            )
        } else if (!this.state.finishLoading) {
            return <View style={styles.p20}><ActivityIndicator color={Colors.teal500} /></View>
        }

    }

    renderItem(item, i) {


        let column = `column${this.state.columnCount}`
        return (
            <TouchableOpacity
                activeOpacity={0.92}
                onPress={() => this.showPhoto(i)}
                >
                <Image
                    indicatorProps={{
                        size: (width * 0.7) / this.state.columnCount,
                        borderWidth: 0,
                        color: Colors.teal500,
                        unfilledColor: 'rgba(200, 200, 200, 0.2)'
                    }}
                    source={{uri: item.thumbnailUrl}}
                    indicator={ProgressBar}
                    style={styles[column]}/>

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

    renderCarouselItem = ({item, index}) =>  {
        return (
            <PhotoView
                onViewTap={() => this.displayModal(false)}
                source={{uri: item.thumbnailUrl}}
                minimumZoomScale={1}
                maximumZoomScale={4}
                androidScaleType="fitCenter"
                resizeMode={Platform.OS === "android" ? "" : "contain"}
                onLoadEnd={() => null}
                style={styles.fullScreen}
                />
        );
    };

    render() {

        let {text} = this.props.navigation.state.params;
        return (
            <View style={styles.mainContainer}>
                <Header
                    backBtn={true}
                    navigation={this.props.navigation}
                    title={text}
                />
                <View style={styles.container}>
                    {this.renderImages()}
                </View>

                {
                    this.state.finishLoading && this.state.imagesArr.length ?
                        <Modal
                            transparent={true}
                            hardwareAccelerated={true}
                            animationType={'fade'}
                            onRequestClose={() => this.displayModal(false)}
                            visible={this.state.modalVisible}>
                            <View style={styles.modalContainer}>
                                <Carousel
                                    firstItem={this.state.activeItemIndex ? this.state.activeItemIndex : 0}
                                    ref={(c) => { this._carousel = c; }}
                                    data={this.state.imagesArr}
                                    renderItem={this.renderCarouselItem}
                                    sliderWidth={width}
                                    itemWidth={width}
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

