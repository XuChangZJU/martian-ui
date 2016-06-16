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
exports.description = 'Base component for Text.';
exports.examples = [
    {
        title: 'Plain Text',
        description: 'Divide gray block with a white line',
        render: function () {
            return (

                         <MtText>
                             {string}
                         </MtText>

            );
        },
    }

];
