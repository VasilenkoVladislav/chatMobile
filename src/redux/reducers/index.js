import { combineReducers } from 'redux';
import entitiesReducers from './entities';
import uiReducers from './ui';

export default combineReducers({
    entities: entitiesReducers,
    ui: uiReducers
});
