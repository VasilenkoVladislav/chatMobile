import { View, Text, Button } from 'react-native';
import React from 'react';
import { styles } from './styles';

const SignInScreen = ({signIn}) => {
    return (
        <View style={styles.container}>
            <Text>SignIn Screen</Text>
            <Button title='Login' onPress={signIn}>Login</Button>
        </View>
    )
};

export default SignInScreen;
