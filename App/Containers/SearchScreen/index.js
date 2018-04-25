import React, {Component} from 'react';
import {View, Text, Button, ActivityIndicator, Slider, TextInput} from 'react-native';
import Header from './../../Components/Header'


import { HitSlope, Colors } from './../../Themes'
import styles from './styles';

export default class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            source: null,

            text: '',
            sliderVal: 2
        };


    }

    componentDidMount() {

    }



    componentWillMount() {

    }

    inputHandler = (text) => {

    };

    sliderHandler = (val) => {
        console.log(val)
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
                            <Slider
                                minimumTrackTintColor={Colors.teal500}
                                maximumTrackTintColor={Colors.teal100}
                                maximumValue={5}
                                minimumValue={1}
                                value={this.state.sliderVal}
                                step={1}
                                onValueChange={(val) => this.sliderHandler(val)}
                            />
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

