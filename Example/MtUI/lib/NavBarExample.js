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

var MtNavBar = require('martian-ui').MtNavBar;

exports.title  = 'MtNavBar';
exports.description = 'NavBar is navigation bar.';
exports.examples = [
    {
        title: 'Plain NavBar',
        render(): ReactElement {
            return (
                <MtNavBar pop = {()=> alert("hello")}
                />

            );
        },
    },
    {
        title: 'NavBar with title',
        render(): ReactElement {
            return (
              <MtNavBar pop = {()=> alert("hello")}
                        title = 'Title'
              />

            );
        },
    }

];