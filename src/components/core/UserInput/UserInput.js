import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    autoCorrect: PropTypes.bool,
    autoCapitalize: PropTypes.string,
    returnKeyType: PropTypes.string
};

export const UserInput = (props) => {
    return (
      <View style={styles.inputWrapper}>
          <Icon style={styles.inlineImg} name={props.iconName}/>
          <TextInput style={styles.input}
                     value={props.value}
                     onChangeText={props.onChange.bind(this, props.type)}
                     placeholder={props.placeholder}
                     secureTextEntry={props.secureTextEntry}
                     autoCorrect={props.autoCorrect}
                     autoCapitalize={props.autoCapitalize}
                     returnKeyType={props.returnKeyType}
                     placeholderTextColor='white'
                     underlineColorAndroid='transparent'/>
      </View>
    );
};

UserInput.propTypes = propTypes;

export default UserInput;