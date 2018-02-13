import { TouchableOpacity, Animated, View, Text, Easing, Image } from 'react-native';
import { styles, MARGIN } from './styles';
import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import { images } from '../../../resources/images'
import PropTypes from 'prop-types';

const propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const DEVICE_WIDTH = Dimensions.get('window').width;

class AnimatedButton extends Component {
    constructor(props) {
        super(props);
        this.buttonAnimated = new Animated.Value(0);
    }
    onPress = () => {
        if (!this.props.isLoading) {
            Animated.timing(
                this.buttonAnimated,
                {
                    toValue: 1,
                    duration: 200,
                    easing: Easing.linear
                }
            ).start();
            this.props.onClick();
        }
    };

    render () {
        const changeWidth = this.buttonAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [DEVICE_WIDTH - MARGIN, MARGIN]
        });
        console.log(changeWidth)
        return(
            <View style={styles.container}>
                <Animated.View style={{width: changeWidth}}>
                    <TouchableOpacity style={styles.button}
                                      onPress={this.onPress}
                                      activeOpacity={1} >
                        { this.props.isLoading ?
                            <Image source={images.spinner} style={styles.image} />
                            :
                            <Text style={styles.text}>{this.props.text}</Text> }
                    </TouchableOpacity>
                </Animated.View>
            </View>
        );
    }
}

AnimatedButton.propTypes = propTypes;

export default AnimatedButton;