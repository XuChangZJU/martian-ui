/**
 * Created by Hey on 2016/6/15.
 */
import React, {
    Component,
} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

class Input extends Component {
    render() {
        const {value, style} = this.props;
        return (
            <TextInput
                /*  placeholderTextColor = "grey"*/
                blurOnSubmit={true}
                { ...this.props }
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