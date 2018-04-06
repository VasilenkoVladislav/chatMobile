import { addNavigationHelpers } from 'react-navigation';
import { addListener } from '../../redux/utils/redux';
import React from 'react';
import AppNavigator  from '../../router';

const App = ({ dispatch, nav }) =>  {
    return (
        <AppNavigator
            navigation={addNavigationHelpers({
                dispatch,
                state: nav,
                addListener
            })}/>
    );
};

export default App;
