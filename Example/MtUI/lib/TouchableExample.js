/**
 * Created by lavystord on 17/1/17.
 */
import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
const Touchable = require('martian-ui').MtTouchable;

exports.title = 'MtTouchable';
exports.description = 'Wrap Touchable Component';
exports.examples = [
    {
        title: 'Plain Touchable',
        render: function () {
            return (
                <Touchable onPress={() => { alert('I \'m a button')}}>
                    <View style={styles.box}>
                        <Text style={styles.text}>
                            Press me
                        </Text>
                    </View>
                </Touchable>
            );
        },
    }
];

const styles = StyleSheet.create( {
    box: {
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 16,
        textAlign:'center'
    }
});
