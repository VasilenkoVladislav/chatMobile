import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import { Platform } from 'react-native';
import rootSaga from './sagas';
import { composeWithDevTools } from 'remote-redux-devtools';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

export default function () {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = composeWithDevTools({ realtime: true, port: 5678 });
    let store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(sagaMiddleware, logger)));
    if (process.env.NODE_ENV === 'production') {
        store = createStore(rootReducer, {}, sagaMiddleware);
    } else if (process.env.NODE_ENV === 'development') {
        store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(sagaMiddleware, logger)));
    } else if (process.env.NODE_ENV === 'test') {
        store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware, logger)));
    }
    sagaMiddleware.run(rootSaga);
    return store;
}
