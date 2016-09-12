/**
 * Created by lavystord on 16/9/7.
 */
import React, { Component, PropTypes } from 'react';
import {
    KeyboardAvoidingView,
    Modal,
    StyleSheet,
    Text,
    ScrollView,
    TextInput,
    TouchableHighlight,
    View} from 'react-native';
import { MtKeyboardView } from 'martian-ui';
const UIExplorerBlock = require('UIExplorerBlock');
const UIExplorerPage = require('UIExplorerPage');

class KeyboardAvoidingViewExample extends React.Component {



    renderExample = () => {
        return (
            <ScrollView
                ref="scroll"
                style={styles.outerContainer}>

                    <View style={styles.text} />
                    <View style={styles.text} />
                    <View style={styles.text} />
                    <View style={styles.text} />
                    <View style={styles.text} />
                    <View style={styles.text} />
                    <View style={styles.text} />
                    <TextInput
                        ref="input1"
                        onFocus={() => {
                            this.refs.scroll.scrollTo({y: 300});
                        }}
                        onSubmitEditing={() => {
                            this.refs.input2.focus();

                        }}
                        placeholder="<TextInput />"
                        style={styles.textInput} />
                    <Text style={styles.text}> hello world</Text>
                    <TextInput
                        ref="input2"
                        onFocus={() => {
                             this.refs.scroll.scrollTo({y: 400});
                        }}
                        onSubmitEditing={() => {
                            this.refs.input3.focus();

                        }}
                        placeholder="<TextInput2 />"
                        style={styles.textInput} />
                    <View style={styles.text} />
                    <View style={styles.text} />
                    <TextInput
                        ref="input3"
                        onFocus={() => {
                             this.refs.scroll.scrollTo({ y: 600, animated: true});
                        }}
                        onSubmitEditing={() => {
                            this.refs.scroll.scrollTo({ y: 520, animated: true});
                        }}
                        placeholder="<TextInput3 />"
                        style={styles.textInput} />
                    <View style={styles.text} />
                    <View style={[styles.text,{ backgroundColor: '#007aff'}]} />

            </ScrollView>
        );
    };

    render() {
        return (
            this.renderExample()
        );
    }
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
    },
    text: {
        height: 60,
        backgroundColor: 'gray',
        marginVertical: 10,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        // justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: 'red'
        // backgroundColor: 'red',
    },
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        height: 44,
        paddingHorizontal: 10,
    },
    closeButton: {
        position: 'absolute',
        top: 30,
        left: 10,
        // backgroundColor: 'blue',
    }
});

module.exports = KeyboardAvoidingViewExample;

/*
 <MtKeyboardView
 style={styles.container}
 contentContainerStyle={{flex: 1,bottom: 0, paddingBottom: 0 }}
 keyboardVerticalOffset={0}
 behavior="padding"
 >
 */

/*  </MtKeyboardView> */