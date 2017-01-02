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
    MtText,
    MtHeading,
    MtLabel,
    MtM1,
    MtM2,
    MtM3,
    MtM4,
    MtM8,
    MtW2,
    MtW3,
    MtW4,
    MtT0,
    MtT1,
    MtT2,
    MtT3,
    MtT4,
    MtT6,
    MtT8,
    MtL1,
    MtL2,
    MtL3,
    MtL6,
    MtL8,
    MtL4,
    MtR4,
    MtB4,
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
                    {Date.now()}
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
        title: 'Plain W3',
        render: function () {
            return (
                <MtW3>
                    I'm W3 字体
                </MtW3>
            );
        },
    },
    {
        title: 'Plain W4',
        render: function () {
            return (
                <MtW4>
                    I'm W4 字体
                </MtW4>
            );
        },
    },
    {
        title: 'Plain M1',
        render: function () {
            return (
                <MtM1>
                    I'm M1 字体
                </MtM1>
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
        title: 'Plain M3',
        render: function () {
            return (
                <MtM3>
                    I'm M3 字体
                </MtM3>
            );
        },
    },
    {
        title: 'Plain M4',
        render: function () {
            return (
                <MtM4>
                    I'm M4 字体
                </MtM4>
            );
        },
    },
    {
        title: 'Plain M8',
        render: function () {
            return (
                <MtM8>
                    I'm M8 字体
                </MtM8>
            );
        },
    },
    {
        title: 'Plain T0',
        render: function () {
            return (
                <MtT0>
                    I'm T0 字体
                </MtT0>
            );
        },
    },
    {
        title: 'Plain T1',
        render: function () {
            return (
                <MtT1>
                    I'm T1 字体
                </MtT1>
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
        title: 'Plain T4',
        render: function () {
            return (
                <MtT4>
                    I'm T4 字体
                </MtT4>
            );
        },
    },
    {
        title: 'Plain T6',
        render: function () {
            return (
                <MtT6>
                    I'm T6 字体
                </MtT6>
            );
        },
    },
    {
        title: 'Plain T8',
        render: function () {
            return (
                <MtT8>
                    I'm T8 字体
                </MtT8>
            );
        },
    },
    {
        title: 'Plain L1',
        render: function () {
            return (
                <MtL1>
                    I'm L1
                </MtL1>
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
        title: 'Plain L6',
        render: function () {
            return (
                <MtL6>
                    I'm L6
                </MtL6>
            );
        },
    },
    {
        title: 'Plain L8',
        render: function () {
            return (
                <MtL8>
                    I'm L8
                </MtL8>
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
    {
        title: 'Plain B4',
        render: function () {
            return (
                <MtB4>
                    I'm B4
                </MtB4>
            );
        },
    },


];
