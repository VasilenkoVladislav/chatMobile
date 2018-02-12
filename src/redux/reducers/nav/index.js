import { SIGN_IN_SUCCESS, SIGN_IN_ERROR } from '../../constansActions';
import { AppNavigator } from '../../../router';
import { replace } from '../../utils/navigatationHelper';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Splash'));

export default (state = initialState, action) => {
    let nextState;
    switch (action.type) {
    case SIGN_IN_SUCCESS:
        nextState = AppNavigator.router.getStateForAction(replace('Main'));
        break;
    case SIGN_IN_ERROR:
        nextState = AppNavigator.router.getStateForAction(replace('Login'));
        break;
    default:
        nextState = AppNavigator.router.getStateForAction(action, state);
        break;
    }
    return nextState || state;
}