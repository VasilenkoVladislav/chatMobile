import { NavigationActions } from 'react-navigation';
import { NavigationStack } from '../../../router';

const initialState =  NavigationStack.router.getStateForAction(NavigationActions.init());

export default function (state = initialState, action) {
    const nextState = NavigationStack.router.getStateForAction(action, state);
    return nextState || state;
}
