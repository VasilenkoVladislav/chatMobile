import App from './src/components/App';
import React from 'react';
import configureStore from './src/redux/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

const EntryPoint = () => (
    <Provider store={store}>
        <App />
    </Provider>);

export default EntryPoint;
