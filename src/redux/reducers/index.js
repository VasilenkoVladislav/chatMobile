import { combineReducers } from 'redux';
import entitiesReducers from './entities';
import uiReducers from './ui';
import navigationReducer from './navigation';

export default combineReducers({
    entities: entitiesReducers,
    ui: uiReducers,
    navigation: navigationReducer
});
