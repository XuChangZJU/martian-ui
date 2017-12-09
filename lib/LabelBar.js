/**
 * Created by lavystord on 16/8/15.
 */
import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import MtIcon from 'martian-icon';
const MtColor = require('../utils/color');

class LabelBar extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        disableIcon: PropTypes.bool,
        disablePress: PropTypes.bool,
        onPress: PropTypes.func,
    };

    render () {
        const { title, titleStyle, value, style, containerStyle, disableIcon, onPress, disablePress, outerContainerStyle } = this.props;
        return (
            <TouchableHighlight
                onPress={onPress}
                disabled={disablePress}
                style={outerContainerStyle}
            >
                <View style={[styles.container, containerStyle]}>
                    <Text style={[styles.title, titleStyle]}>
                        {title}
                    </Text>
                    <Text style={[styles.value, style]}>
                        {value}
                    </Text>
                    { !disableIcon ?
                        <MtIcon name="more" color={MtColor.arrow} /> :
                        null
                    }
                </View>
            </TouchableHighlight>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'white',
    },
    title: {
        // fontSize: normalize(14),
        fontSize: 16,
        color: '#262626',
        width: 74,
        backgroundColor: 'transparent',
    },
    value: {
        // fontSize: normalize(14),
        fontSize: 16,
        color: '#b4b4b4',
        backgroundColor: 'transparent',
        flex: 1,
    },
});

module.exports = LabelBar;