import { StyleSheet } from 'react-native';

export const MARGIN = 40;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F035E0',
        height: MARGIN,
        borderRadius: 20,
        zIndex: 100,
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
    },
    image: {
        width: 24,
        height: 24,
    }
});