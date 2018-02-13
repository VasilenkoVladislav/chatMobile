import React, { Component } from 'react';
import AnimatedButton from '../../core/AnimatedButton';
import UserInput from '../../core/UserInput';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { View } from 'react-native';

const propTypes = {
    signIn: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};

class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    handleChangeInput = (type, value) => {
        this.setState({ [type]: value });
    };
    handleClickButton = () => {
        this.props.signIn('v@v.com', 'aa123456');
        this.setState({ email: '', password: '' })
    };
    render () {
        return (
                <View style={styles.container}>
                    <UserInput onChange={this.handleChangeInput}
                               iconName='user'
                               type='email'
                               value={this.state.email}
                               placeholder='Username'
                               autoCapitalize={'none'}
                               returnKeyType={'done'}
                               autoCorrect={false} />
                    <UserInput onChange={this.handleChangeInput}
                               iconName='lock'
                               type='password'
                               secureTextEntry={true}
                               value={this.state.password}
                               placeholder='Password'
                               returnKeyType={'done'}
                               autoCapitalize={'none'}
                               autoCorrect={false}/>
                    <AnimatedButton text='Login'
                                    onClick={this.handleClickButton}
                                    isLoading={this.props.isLoading}/>
                </View>

        );
    }
}

Form.propTypes = propTypes;

export default Form;
