/**
 * Created by lavystord on 16/8/29.
 */
import React, { Component, PropTypes } from 'react';
import {Image, StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import Button from 'react-native-button';
import Color from '../utils/color';


class FixedButton extends Component {

    render() {
        const {disabled ,style, containerStyle,foreground, ...props} = this.props;
        const containerColor = foreground === 'light' ? (disabled ? '#e3e3e3': '#efefef'): (disabled ? '#929292' : Color.main);
        const textColor = foreground === 'light' ? (disabled ? '#8f8f8f': Color.main): 'white';
        return (
            <Button
                containerStyle={ [styles.container,{ backgroundColor:containerColor },containerStyle]}
                style={[styles.text,{ color: textColor },style]}
                disabled={disabled}
                { ...props }
            >
            </Button>
        )

    }

}

const scale = Dimensions.get('window').width / 320;

function normalize(size) {
    return Math.round(scale * size);
}

const styles = StyleSheet.create( {
    container: {					// 容器样式
        // marginLeft: 18,
        // marginRight: 18,
        // marginTop: 38,
        // marginBottom: 18,
        justifyContent: 'center',
        height:42,
        // borderRadius: 2,
        // borderRadius:4
    },
    text: {
        fontSize: 14,
        // fontSize: normalize(18),
    },

});

module.exports = FixedButton;