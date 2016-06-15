/**
 * Created by Hey on 2016/6/15.
 */
'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    Alert,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} = ReactNative;

var MtInput = require('martian-ui').MtInput;

exports.title  = 'MtInput';
exports.description = 'basic single-line text inputs';
exports.examples = [
    {
        title: 'Basic MtInput',
        render: function () {
            return (
               <MtInput autoFocus = {false}>
               </MtInput>
            );
        }
    },
    {
        title: 'Todo',
        render: function () {
            return (
               <Text>
                   对props有疑义的请联系XiaoMing
               </Text>
            );
        }
    }


];
