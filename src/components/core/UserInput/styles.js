import Dimensions from 'Dimensions';
import { StyleSheet } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    inputWrapper: {
        flex: 1
    },
    inlineImg: {
        position: 'absolute',
        zIndex: 99,
        fontSize: 21,
        left: 35,
        top: 10,
        color: 'grey'
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: DEVICE_WIDTH - 40,
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 45,
        paddingRight: 15,
        borderRadius: 20,
        color: 'grey',
    }
});