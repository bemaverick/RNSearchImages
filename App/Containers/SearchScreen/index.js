import React, {Component} from 'react';
import {View, Text, Button, ActivityIndicator, Slider, TextInput} from 'react-native';
import Header from './../../Components/Header'


import { HitSlope, Colors } from './../../Themes'
import styles from './styles';

export default class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValid: true,

            text: '',
            sliderVal: 2
        };


    }

    componentDidMount() {}

    componentWillMount() {}

    inputHandler = (text) => {
        text.length > 2 ? this.setState({inputValid: true}) : this.setState({inputValid: false});
        this.setState({text})
    };

    sliderHandler = (sliderVal) => {
        this.setState({sliderVal})
    };

    searchImage = () => {
        if (this.state.text.length > 2) {
            this.props.navigation.navigate('ResultScreen', {text: this.state.text, column: this.state.sliderVal});
        } else {
            this.setState({inputValid: false});
        }

    };

    render() {
        let {inputValid} = this.state;
        let errorBlock = <View style={styles.errorBlock}>
          <Text style={styles.errorText}>more then 2 characters is required</Text>
        </View>;
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
                                placeholder={'search query'}
                                placeholderTextColor={Colors.teal100}
                                underlineColorAndroid={'transparent'}
                                style={styles.textInputStyle}
                                onChangeText={(text) => this.inputHandler(text)}
                                value={this.state.input}/>
                                 {inputValid ? null : errorBlock}
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Text>{`number of column: ${this.state.sliderVal}`}</Text>
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
                        onPress={() => this.searchImage()}
                        title="Search"
                        color={Colors.teal500}

                    />

                </View>
            </View>
        );
    }
}

