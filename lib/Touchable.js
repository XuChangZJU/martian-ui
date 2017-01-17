/**
 * Created by lavystord on 17/1/17.
 */
import React from 'react';
import {
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
} from 'react-native';

function TouchableIOS(props: Object): ReactElement {
    return (
        <TouchableOpacity
            accessibilityTraits="button"
            {...props}
        />
    );
}

function TouchableAndroid(props) {
    return (
        <TouchableNativeFeedback
            delayPressIn={0}
            background={TouchableNativeFeedback.SelectableBackground()}
            {...props}
        />
    );
}

const Touchable = Platform.OS === 'android'
    ? TouchableAndroid
    : TouchableIOS;

module.exports = Touchable;