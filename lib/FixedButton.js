/**
 * Created by lavystord on 16/8/29.
 */
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Button from 'react-native-button';
import Color from '../utils/color';
import { ifIphoneX } from '../utils/screenUtils';

let safeAreaHeight = 20;
function setSafeAreaHeight(height) {
    safeAreaHeight = height;
}

class FixedButton extends Component {

    render() {
        const { disabled, style, containerStyle, foreground, isPhoneX, ...props } = this.props;
        const containerColor = foreground === 'light' ? (disabled ? '#e3e3e3': '#efefef'): (disabled ? '#929292' : Color.main);
        const textColor = foreground === 'light' ? (disabled ? '#8f8f8f': Color.main): 'white';
        let safeAreaStyle;
        if (isPhoneX) {
            safeAreaStyle = ifIphoneX({
                height: styles.container.height + safeAreaHeight,
                paddingBottom: safeAreaHeight,
            });
        }
        return (
            <Button
                containerStyle={[styles.container, { backgroundColor:containerColor }, safeAreaStyle, containerStyle]}
                style={[styles.text,{ color: textColor }, style]}
                disabled={disabled}
                { ...props }
            >
            </Button>
        )

    }

}


const styles = StyleSheet.create( {
    container: {					// 容器样式
        justifyContent: 'center',
        height: 50,
    },
    text: {
        fontSize: 16,
    },
});
FixedButton.setSafeAreaHeight = setSafeAreaHeight;
module.exports = FixedButton;