import { StackNavigator } from 'react-navigation'
import MainScreen from '../components/MainScreen';
import { Platform, StatusBar } from 'react-native'
import SignInScreen from '../components/SignInScreen';
import RegistrationScreen from '../components/RegistrationScreen';

const headerStyle = {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = StackNavigator({
    SignUp: {
        screen: RegistrationScreen,
        navigationOptions: {
            title: "Registartion",
            headerStyle
        }
    },
    SignIn: {
        screen: SignInScreen,
        navigationOptions: {
            title: "Sign In",
            headerStyle
        }
    }
});

export const SignedIn = StackNavigator({
    Main: {
        screen: MainScreen,
        navigationOptions: {
            title: "Main",
            headerStyle
        }
    }
});

export const createRootNavigator = (signedIn = false) => {
    return StackNavigator(
        {
            SignedIn: {
                screen: SignedIn,
                navigationOptions: {
                    gesturesEnabled: false
                }
            },
            SignedOut: {
                screen: SignedOut,
                navigationOptions: {
                    gesturesEnabled: false
                }
            }
        },
        {
            headerMode: "none",
            mode: "modal",
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    );
};
