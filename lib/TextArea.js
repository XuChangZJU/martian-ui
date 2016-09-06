/**
 * Created by lavystord on 16/9/5.
 */
import React, { Component, PropTypes } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

class TextArea extends Component {
    focus() {
        this.refs.input.focus()
    }

    blur() {
        this.refs.input.blur()
    }

    clear() {
        this.refs.input.clear()
    }

    constructor(props) {
        super(props);
        // 初始状态
        this.state = { };
    }

    render() {
        const { style, containerStyle, hintStyle, multiline, onChangeText, ...props } = this.props;
        const { text } = this.state;
        return (
            <View style={[styles.more, containerStyle]}>
                <TextInput
                    ref="input"
                    multiline={true}
                    style={[styles.moreText,style]}
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => {
                        this.setState({ text });
                        onChangeText && onChangeText(text);
                     }}
                    {...props}
                />
                {
                    this.props.maxLength &&
                    <Text
                        style={[{ textAlign: 'right', marginRight: 5 },hintStyle]}
                    >
                        {this.props.maxLength - ((text && text.length)
                        || (typeof text !== 'string' && this.props.defaultValue && this.props.defaultValue.length) || 0)}
                    </Text>
                }
            </View>
        );

    }
}

module.exports = TextArea;

TextArea.propTypes = {

};

const styles = StyleSheet.create({
    more: {
        height: 120,
        width: 300,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.4)',
        // backgroundColor: 'blue'
    },
    moreText: {
        height: 100,
        textAlignVertical: 'top',
    },
});
