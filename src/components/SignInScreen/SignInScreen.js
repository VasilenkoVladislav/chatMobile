import Form from './Form';
import { ImageBackground } from 'react-native';
import { images } from '../../resources/images';
import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
    signIn: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const SignInScreen = ({signIn, isLoading}) => {
    return (
        <ImageBackground style={styles.picture} source={images.mainBgImage}>
            <Form signIn={signIn} isLoading={isLoading}/>
        </ImageBackground>
    )
};

SignInScreen.propTypes = propTypes;

export default SignInScreen;
