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

var MtChar = require('martian-ui').MtChar;
var {MtText,MtHeading,MtLabel} = MtChar;
var string = 'hello';

exports.title  = 'MtText';
exports.description = 'Text is used to show some words.';
exports.examples = [
    {
        title: 'Plain Text',
        render: function () {
            return (
                <MtText style = { {textAlign:'center'}}>
                    {string}
                </MtText>
            );
        },
    },
    {
        title: 'Plain Heading',
        render: function () {
            return (
                <MtHeading >
                    I'm Heading!!
                </MtHeading>
            );
        },
    },
    {
        title: 'Plain Label',
        render: function () {
            return (
                <MtLabel>
                    I'm Label
                </MtLabel>
            );
        },
    },


];
