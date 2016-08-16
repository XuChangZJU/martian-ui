/**
 * Created by lavystord on 16/8/15.
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

class LabelBar extends Component {
    render () {
        const { title, titleStyle, value, style, containerStyle, disableIcon, onPress } = this.props;
        return (
            <TouchableHighlight
                onPress={onPress}
            >
                <View style={[styles.container, containerStyle]}>
                    <Text style={[styles.title, titleStyle]}>
                        {title}
                    </Text>
                    <Text style={[styles.value, style]}>
                        {value}
                    </Text>
                    { !disableIcon ?
                        <Icon name="ios-arrow-forward" size={20} color="#adadad" /> :
                        null
                    }
                </View>
            </TouchableHighlight>
        );
    }
}

const scale = Dimensions.get('window').width / 320;

function normalize(size) {
    return Math.round(scale * size);
}

const styles = StyleSheet.create({
    container: {
        height: 42,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 18,
        paddingRight: 18,
        backgroundColor: 'white',
    },
    title: {
        // fontSize: normalize(14),
        fontSize: 14,
        color: '#262626',
        width: 74,
        backgroundColor: 'transparent',
    },
    value: {
        // fontSize: normalize(14),
        fontSize: 14,
        color: '#b4b4b4',
        backgroundColor: 'transparent',
        flex: 1,
    },
});

module.exports = LabelBar;