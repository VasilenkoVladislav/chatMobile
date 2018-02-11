import { NavigationActions, StackNavigator } from 'react-navigation'
import MainScreen from '../components/MainScreen';
import SplashScreen from '../components/SplashScreen';
import SignInScreen from '../components/SignInScreen';
import RegistrationScreen from '../components/RegistrationScreen';

const LoggedIn = StackNavigator({
    Main: {
        screen: MainScreen
    }
}, {
    headerMode: 'none',
    initialRouteName: MainScreen
});

export const NavigationStack = StackNavigator({
    Splash: {
        screen: SplashScreen
    },
    Registration: {
        screen: RegistrationScreen
    },
    SignIn: {
        screen: SignInScreen
    },
    LoggedIn: {
        screen: LoggedIn
    }
}, {
    headerMode: 'none'
});
