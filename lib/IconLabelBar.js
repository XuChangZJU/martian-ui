/**
 * Created by lavystord on 17/1/17.
 */
import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import MtIcon from 'martian-icon';
const MtColor = require('../utils/color');

class IconLabelBar extends Component {
    static propTypes = {
        iconName: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        disableIcon: PropTypes.bool,
        disablePress: PropTypes.bool,
        onPress: PropTypes.func,
    };

    render () {
        const { iconName,title, outerContainerStyle,titleStyle, value, style, containerStyle, disableIcon, onPress, disablePress,...props } = this.props;
        return (
            <TouchableHighlight
                onPress={onPress}
                disabled={disablePress}
                style={outerContainerStyle}
            >
                <View style={[styles.container, containerStyle]}>
                    <MtIcon
                        name={iconName}
                        color={MtColor.arrow}
                        size={20}
                        {...props}
                    />
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
        marginLeft: 10,
        fontSize: 16,
        color: '#262626',
        // width: 74,
        backgroundColor: 'transparent',
        flex: 1,
    },
    value: {
        fontSize: 16,
        color: '#b4b4b4',
        backgroundColor: 'transparent',
        textAlign: 'right'
    },
});

module.exports = IconLabelBar;