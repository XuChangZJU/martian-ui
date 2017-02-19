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
        }
    },
    {
        title: 'Height',
        render: function () {
            return (
                <View >
                    <View style = { {height:50,backgroundColor:'gray'}}>
                    </View>
                    <Separator height = {3}/>
                    <View style = { {height:50,backgroundColor:'gray'}}>
                    </View>
                    <Separator height = {3}/>
                    <View style = { {height:50,backgroundColor:'gray'}}>
                    </View>
                </View>
            );
        }
    },
    {
        title:'Background Color',
        render: function () {
            return (
                <View >
                    <View style = { {height:50,backgroundColor:'gray'}}>
                    </View>
                    <Separator color = "blue"/>
                    <View style = { {height:50,backgroundColor:'gray'}}>
                    </View>
                    <Separator color = "red"/>
                    <View style = { {height:50,backgroundColor:'gray'}}>
                    </View>
                </View>
            );
        }
    },
    {
        title:'Custom style',
        render: function () {
            return (
                <View style={{ backgroundColor: 'black'}} >
                    <View style = { {height:50,backgroundColor:'gray'}}>
                    </View>
                    <Separator color="blue" style={{marginHorizontal: 10}} />
                    <View style = { {height:50,backgroundColor:'gray'}}>
                    </View>
                    <Separator color="red" />
                    <View style = { {height:50,backgroundColor:'gray'}}>
                    </View>
                    <View style = { {height:50}}>
                    </View>
                    <Separator color="red" />
                </View>
            );
        }
    }

];
