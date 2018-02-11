import React from 'react';
import MainScreen from '../MainScreen';
import SplashScreen from '../SplashScreen';

class App extends React.Component {
    constructor (props) {
        super (props);
    }
    componentWillMount() {
        this.props.validateToken();
    }

    render = () => this.props.isLoading ?   <SplashScreen/> : <MainScreen/>;
}

export default App;
