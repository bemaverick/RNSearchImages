
import {Platform} from 'react-native'

export default {
    mainContainer: {
      backgroundColor: 'white',
      flex: 1
    },
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sliderBlock: {
        width: '100%',
        marginHorizontal: 20
    },
    row: {
        paddingVertical: 15,
        flexDirection: 'row'
    },
    right: {
        flex: 1
    },
    left: {
        width: 120,
        justifyContent: 'center',
        paddingHorizontal: 5

    },
    textInputStyle: {

        fontSize: 13,
//        color: Colors.textBlackBold,
        height: 50,
        paddingRight:20,


    },
    errorText: {
        fontSize: 9,
        color: 'red'
    },
    errorBlock: {
        position: 'absolute',
        left: 0,
        bottom: 0
    }



}