/**
 * Created by lavystord on 16/11/9.
 */

import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Color from '../utils/color';
import Icon from 'react-native-vector-icons/Ionicons';

class CheckItem extends Component {


    static propTypes = {
        onPress: React.PropTypes.func,
        icon: React.PropTypes.string,
        size: React.PropTypes.number,
        backgroundColor: React.PropTypes.string,
        iconColor: React.PropTypes.string,
        borderColor: React.PropTypes.string,
        shape: React.PropTypes.string,
        checked: React.PropTypes.bool,
    };

    static defaultProps = {
        icon: "ios-checkmark",
        size: 22,
        // backgroundColor: '#007AFF',
        backgroundColor: Color.main,
        iconColor: 'white',
        borderColor: '#9f9f9f',
        checked: false,
        onPress: ()=>{},
    };

    iconWrapperStyle() {
        return {
            width: this.props.size,
            height: this.props.size,
            backgroundColor: this.props.checked ? this.props.backgroundColor : 'transparent',
            borderColor: this.props.checked ? this.props.backgroundColor : this.props.borderColor,
            // borderRadius: this.props.size / 2,
            borderRadius: this.props.shape === 'square' ? 0 : this.props.size / 2,
        };
    }

    _onPress = () => {
        this.props.onPress(!this.props.checked)
    };

    render() {
        const { containerStyle, style} = this.props;
        return(
            <TouchableWithoutFeedback
                onPress={this._onPress}
            >
                <View shouldRasterizeIOS={true} style={[styles.container,this.iconWrapperStyle(),containerStyle]}>
                    <Icon
                        name={this.props.icon}
                        size={this.props.size * 1.3}
                        color={this.props.checked ? this.props.iconColor : 'transparent'}
                        style={[{height: this.props.size * 1.3, backgroundColor: 'transparent'},style]}
                    />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    },
    style: {

    }

});

module.exports = CheckItem;
