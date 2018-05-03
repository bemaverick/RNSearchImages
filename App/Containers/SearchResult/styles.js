import {Dimensions, StyleSheet} from 'react-native';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        justifyContent: 'center',
        flex: 1,
    },
    container: {
        flex: 1,
    },
    p20: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover'
    },
    column1: {
        width: width,
        height: width,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,

    },
    column2: {
        width: width / 2,
        height: width / 2,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black'
    },
    column3: {
        width: width / 3,
        height: width / 3,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black'
    },
    column4: {
        width: width / 4,
        height: width / 4,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black'
    },
    column5: {
        width: width / 5,
        height: width / 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black'
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fullScreen: {
        width,
        height
    },
    textCenter: {
        textAlign: 'center',
        lineHeight: 50
    },
    hollowBlock: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});
export default styles


