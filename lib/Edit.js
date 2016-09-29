/**
 * Created by lavystord on 16/8/12.
 */
import React, {Component, PropTypes} from 'react';
import {Image, StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';

class Edit extends Component {
    focus() {
        this.refs.input.focus()
    }

    blur() {
        this.refs.input.blur()
    }

    clear() {
        this.refs.input.clear()
    }


    /* shouldDisplayMessage() {
     const {value, valid, message} = this.props;
     return (value && value.length > 0 && !valid && message)
     }*/

    /*    renderIcon() {
     const {icon, validIcon, invalidIcon, valid, value, iconStyle} = this.props;
     if (!icon && valid != true && valid != false)
     return;
     var renderedIcon = null;
     if (value) {
     if (valid !== undefined && valid !== null)
     renderedIcon = valid ? (validIcon ? validIcon : require('./images/tick.png')) : (invalidIcon ? invalidIcon : require('./images/cross.png'));
     else renderedIcon = icon;
     } else {
     renderedIcon = icon
     }
     if (!renderedIcon) return;
     return (
     <View style={[styles.iconStyle, iconStyle]}>
     <Image source={renderedIcon}/>
     </View>
     )
     }*/

    /*   renderMessage() {
     const {message, messageStyle} = this.props;
     if (this.shouldDisplayMessage()) {
     return (
     <Text style={[styles.messageStyle, messageStyle]}>
     { message }
     </Text>
     )
     }
     return null;
     }*/

    renderTitle() {
        const {title, titleStyle} = this.props;
        if (!title) return;

        return (
            <Text style={[styles.titleStyle, titleStyle]}>
                {title}
            </Text>
        );

    }


    render() {
        const {containerStyle, title, titleStyle, style, ...props} = this.props;
        return (
            <View
                style={[styles.containerStyle,containerStyle]}
            >
                { this.renderTitle() }
                <TextInput
                    ref='input'
                    placeholderTextColor="#b4b4b4"
                    /* blurOnSubmit = {true}*/
                    { ...props }
                    multiline={false}
                    clearButtonMode='while-editing'
                    underlineColorAndroid="transparent"
                    style={[styles.inputStyle, style]}
                />
            </View>
        )


    }
} //end of Input Component

const scale = Dimensions.get('window').width / 320;

function normalize(size) {
    return Math.round(scale * size);
}

//todo title和input在竖直方向上有1px的对齐差距
const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 18,
        height: 42,
        backgroundColor: 'white',
    },
    inputStyle: {
        flex: 1,
        // height: 44,
        // fontSize: 20, //fontSize & height is magic number
        // fontSize: normalize(14),
        fontSize: 14,
        paddingVertical: 0,
        borderWidth: 0,
        margin: 0,
        color:'#b4b4b4',
        textDecorationLine: 'none',
        backgroundColor: 'white',
    },
    // messageStyle: {
    //     color: 'red',
    //     marginLeft: 10,
    //     marginBottom: 7,
    //     fontSize: 12,
    //     backgroundColor: 'white'
    //
    // },
    // iconStyle: {
    //     marginLeft: 6,
    //     backgroundColor: 'white',
    //     // height:40,
    //     justifyContent: 'center'
    // },
    titleStyle: {
        width: 60,
        fontSize: 14,
        // fontSize: normalize(14),
        paddingVertical: 0,
        borderWidth: 0,
        textDecorationLine: 'none',
        // fontWeight: 'bold',
        // marginLeft: 6,
        color: '#262626',
        backgroundColor: 'white',
    },


});

const stylePropType = PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number
]);
Edit.propTypes = {
    title: PropTypes.string.isRequired,
    style: stylePropType,
    titleStyle: stylePropType,
    containerStyle: stylePropType,
};

module.exports = Edit;