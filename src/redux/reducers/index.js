import { combineReducers } from 'redux';
import entitiesReducers from './entities/index';
import uiReducers from './ui/index';

export default combineReducers({
    entities: entitiesReducers,
    ui: uiReducers
});
