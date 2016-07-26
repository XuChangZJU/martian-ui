/**
 * Created by Hey on 2016/6/15.
 */
import React, {Component} from "react";
import {StyleSheet, TextInput} from "react-native";

class Input extends Component {
    focus() {
        this.refs.input.focus()
    }

    blur() {
        this.refs.input.blur()
    }

    render() {
        const {style,...props} = this.props;
        return (
          <TextInput
            /*  placeholderTextColor = "grey"*/
            ref='input'
            blurOnSubmit={true}
            { ...props }
            clearButtonMode='while-editing'
            multiline={false}
            underlineColorAndroid="transparent"
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
        // textAlign: 'left',
    },

});

module.exports = Input;