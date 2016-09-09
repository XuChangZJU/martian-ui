/**
 * Created by lavystord on 16/9/7.
 */
import React, { Component, PropTypes } from 'react'
import { KeyboardAvoidingView } from 'react-native'

class KeyboardView extends Component {
    render() {

        return (
            <KeyboardAvoidingView
                behavior="position"
                {...this.props}
            />
        );
    }
}

module.exports = KeyboardView;
