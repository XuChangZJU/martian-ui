/**
 * Created by lavystord on 16/11/3.
 */

import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import Button from 'react-native-button';
import Color from '../utils/color';


class ActionButton extends Component {

    render() {
        const {disabled ,style, containerStyle,foreground, ...props} = this.props;
        const containerColor = foreground === 'light' ? (disabled ? '#c7c7c7': '#505050'): (disabled ? '#c7c7c7' : Color.main);
        const textColor = disabled ? '#8f8f8f': ( foreground === 'light' ? '#262626' : Color.main);
        return (
            <Button
                containerStyle={ [styles.container,{ borderColor:containerColor },containerStyle]}
                style={[styles.text,{ color: textColor },style]}
                disabled={disabled}
                { ...props }
            >
            </Button>
        )

    }

}


const styles = StyleSheet.create( {
    container: {					// 容器样式
        // marginLeft: 18,
        // marginRight: 18,
        // marginTop: 38,
        // marginBottom: 18,
        justifyContent: 'center',
        height: 22,
        width: 72,
        borderWidth: 1,
        borderRadius: 2,
        // borderRadius:4
    },
    text: {
        fontSize: 12,
        // fontSize: normalize(18),
    },

});

module.exports = ActionButton;

