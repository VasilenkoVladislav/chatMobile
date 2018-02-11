import React from 'react';
import { createRootNavigator } from '../../router';

class App extends React.Component {
    render() {
        const Layout = createRootNavigator(this.props.isSignIn);
        return <Layout />;
    }
}

export default App;
