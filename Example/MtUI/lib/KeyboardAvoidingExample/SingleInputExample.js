/**
 * Created by lavystord on 16/9/9.
 */

import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { MtKeyboardView, MtButton } from 'martian-ui';


class SingleInputExample extends Component {

    render() {
        return (
            <View style={styles.outerContainer}>
                <MtKeyboardView
                    style={styles.container}
                >
                    <View style={styles.text} />
                    <View style={styles.text} />
                    <View style={styles.text} />
                    <View style={styles.text} />
                    <View style={styles.text} />
                    <TextInput
                        ref="input1"
                        placeholder="<TextInput />"
                        style={styles.textInput} />
                    <MtButton containerStyle={ {marginTop: 10}}>
                        submit
                    </MtButton>
                </MtKeyboardView>
            </View>
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
        flex: 1,  // import props
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        height: 44,
        paddingHorizontal: 10,
    },
});

module.exports = SingleInputExample;
