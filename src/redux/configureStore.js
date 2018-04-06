import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { composeWithDevTools } from 'remote-redux-devtools';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { middleware } from './utils/redux';

export default function () {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = composeWithDevTools({ realtime: true, port: 5678 });
    let store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(sagaMiddleware, middleware, logger)));
    if (__DEV__) {
        store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware, reactNavigationMiddleware, logger)));
    } else {
        store = createStore(rootReducer, applyMiddleware(sagaMiddleware, reactNavigationMiddleware));
    }
    sagaMiddleware.run(rootSaga);
    return store;
}
