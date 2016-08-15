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
const {
    MtText, MtHeading, MtLabel, MtT2, MtT3,
    MtL2, MtL3, MtL4, MtR4, MtW2, MtM2
} = MtChar;
var string = 'hello';

exports.title = 'MtChar';
exports.description = 'Text is used to show some words.';
exports.examples = [
    {
        title: 'Plain Text',
        render: function () {
            return (
                <MtText style={ {textAlign: 'center'}}>
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
    {
        title: 'Plain W2',
        render: function () {
            return (
                <MtW2>
                    I'm W2 字体
                </MtW2>
            );
        },
    },
    {
        title: 'Plain M2',
        render: function () {
            return (
                <MtM2>
                    I'm M2 字体
                </MtM2>
            );
        },
    },
    {
        title: 'Plain T2',
        render: function () {
            return (
                <MtT2>
                    I'm T2 字体
                </MtT2>
            );
        },
    },
    {
        title: 'Plain T3',
        render: function () {
            return (
                <MtT3>
                    I'm T3 字体
                </MtT3>
            );
        },
    },
    {
        title: 'Plain L2',
        render: function () {
            return (
                <MtL2>
                    I'm L2
                </MtL2>
            );
        },
    },
    {
        title: 'Plain L3',
        render: function () {
            return (
                <MtL3>
                    I'm L3
                </MtL3>
            );
        },
    },
    {
        title: 'Plain L4',
        render: function () {
            return (
                <MtL4>
                    I'm L4
                </MtL4>
            );
        },
    },
    {
        title: 'Plain R4',
        render: function () {
            return (
                <MtR4>
                    I'm R4
                </MtR4>
            );
        },
    },


];
