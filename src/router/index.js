import { StackNavigator } from 'react-navigation'
import MainScreen from '../components/MainScreen';
import SplashScreen from '../components/SplashScreen';
import SignInScreen from '../components/SignInScreen';
import RegistrationScreen from '../components/RegistrationScreen';

export const AppNavigator = StackNavigator({
    Splash: { screen: SplashScreen },
    Login: { screen: SignInScreen },
    Main: { screen: MainScreen },
    Registration: { screen: RegistrationScreen },
});