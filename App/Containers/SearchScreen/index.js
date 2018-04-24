import React, {Component} from 'react'
import { View, Text, Button, ActivityIndicator} from 'react-native'

import styles from './styles';


export default class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };



        
    }
    
    
    
    componentDidMount() {
        

    }
    
    componentWillMount() {

    }
    

    
    render() {
        return (
            <View style={styles.mainContainer}>
                <Text>Search</Text>
                <Button
                  title="Search"
                  onPress={() => {
                    this.props.navigation.navigate("ResultScreen");
                  }}
                />
            </View>
        )
    }
}

