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

var MtText = require('martian-ui').MtText;
var string = 'hello';

exports.title  = 'MtText';
exports.description = 'Text is used to show some words.';
exports.examples = [
    {
        title: 'Plain Text',
        description: 'Nothing to describe',
        render: function () {
            return (
                <MtText>
                    {string}
                </MtText>
            );
        },
    }

];
