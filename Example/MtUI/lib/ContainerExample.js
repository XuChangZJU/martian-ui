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
        description: 'A 50 pt height red View insides Container',
        render: function () {
            return (
                    <MtContainer>
                        <View style={{margin:10,backgroundColor: 'red',height:50}}>
                        </View>
                    </MtContainer>
            );
        },
    }

];