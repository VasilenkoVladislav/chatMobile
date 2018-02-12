import { SIGN_IN_SUCCESS, SIGN_IN_ERROR } from '../../constansActions';
import { AppNavigator } from '../../../router';
import { NavigationActions } from 'react-navigation';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Splash'));

export default (state = initialState, action) => {
    let nextState;
    switch (action.type) {
    case SIGN_IN_SUCCESS:
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.back(),
            state);
        break;
    case SIGN_IN_ERROR:
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: 'Login' }),
            state
        );
        break;
    default:
        nextState = AppNavigator.router.getStateForAction(action, state);
        break;
    }
    return nextState || state;
}