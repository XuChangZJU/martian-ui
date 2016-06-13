/**
 * Created by Hey on 2016/6/13.
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

var Separator = require('martian-ui').MtSeparator;

exports.title  = 'MtSeparator';
exports.description = 'Base component for dividing different block of view.';
exports.examples = [
    {
        title: 'Plain Separator',
        description: 'Divide gray block with a white line',
        render: function () {
            return (
               <View >
                   <View style = { {height:50,backgroundColor:'gray'}}>
                   </View>
                   <Separator/>
                   <View style = { {height:50,backgroundColor:'gray'}}>
                   </View>
                   <Separator/>
                   <View style = { {height:50,backgroundColor:'gray'}}>
                   </View>
               </View>
            );
        },
    }

];
