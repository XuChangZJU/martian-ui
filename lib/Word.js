/**
 * Created by lavystord on 16/11/28.
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from '../utils/color';

class Word extends Component {

    static defaultProps = {
        size: 26,
        color: Color.main,
    }

    render() {
        const { containerStyle, size, style, color, ...props } = this.props;
        return (
            <View style={[styles.container, {width: size, height: size, borderRadius: size* 0.5, borderColor:color}, containerStyle]}>
                <Text
                    style={[styles.style,{fontSize: size*0.5, color: color},style]}
                    { ...props }
                >

                </Text>
            </View>
        );
    }

}





const styles = StyleSheet.create({
    container: {
        borderColor: 'pink',
        borderWidth: 1.4,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    style: {
        // backgroundColor: 'blue'
        backgroundColor: 'transparent',
    }
});

module.exports = Word;
