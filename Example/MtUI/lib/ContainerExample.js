/**
 * Created by Bly on 2016/6/13.
 */
'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    Alert,
    StyleSheet,
    TouchableHighlight,
    Text,
    View,
} = ReactNative;

var MtContainer = require('martian-ui').MtContainer;


exports.title  = 'MtContainer';
exports.description = 'Container is a view.';
exports.examples = [
    {
        title: 'Plain Container',
        description: 'Nothing to describe',
        render: function () {
            return (
                <View height={40} backgroundColor="red">
                    <MtContainer>

                    </MtContainer>
                </View>
            );
        },
    }

];