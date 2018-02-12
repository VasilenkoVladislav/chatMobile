import { connect } from 'react-redux';
import { signInRequest } from '../../redux/actions/entities/authenticateActions';
import SignInScreen from './SignInScreen';

function mapDispatchToProps (dispatch) {
    return {
        signIn: (email, password) => dispatch(signInRequest('v@v.com', 'aa123456'))
    }
}

export default connect(null, mapDispatchToProps)(SignInScreen);
