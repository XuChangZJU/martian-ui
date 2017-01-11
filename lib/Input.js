/**
 * Created by Hey on 2016/6/15.
 */
import React, {Component} from 'react';
import { StyleSheet, TextInput } from 'react-native';

class Input extends Component {
    focus() {
        this.refs.input.focus()
    }

    blur() {
        this.refs.input.blur()
    }
  
    clear() {
        this.refs.input.clear()
    }

    render() {
        const {style,...props} = this.props;
        return (
          <TextInput
            /*  placeholderTextColor = "grey"*/
            ref='input'
            /* underlineColorAndroid="transparent"*/
            blurOnSubmit={true}
            { ...props }
            clearButtonMode='while-editing'
            multiline={false}
            style={[styles.inputStyle, style]}
          />
        )
    }

}

const styles = StyleSheet.create( {
    inputStyle: {
        height: 40,
        fontSize: 18, //fontSize & height is magic number
        backgroundColor: 'white',
        // textAlign: 'right',
    },

});

module.exports = Input;