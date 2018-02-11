import { getUserIsSignInState, getUserIsLoadingState } from '../../redux/selectors/entities/userSelectors';
import App from './App';
import { connect } from 'react-redux'
import { validateTokenRequest } from '../../redux/actions/entities/authenticateActions';

function mapStateToProps (state) {
    return {
        isSignIn: getUserIsSignInState(state),
        isLoading: getUserIsLoadingState(state),
        navigation: state.navigation
    }
}

function mapDispatchToProps (dispatch) {
    return {
        validateToken: (headers) => dispatch(validateTokenRequest(headers))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
