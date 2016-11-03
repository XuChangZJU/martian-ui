/**
 * Created by lavystord on 16/11/3.
 */
/**
 * Created by lavystord on 16/8/29.
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

var MtActionButton = require('martian-ui').MtActionButton;

exports.title  = 'MtActionButton';
exports.description = 'basic button fixed in the bottom';
exports.examples = [
    {
        title: 'Basic MtActionButton',
        render: function () {
            return (
                <MtActionButton
                    onPress ={() => {Alert.alert(null,'I\'m a button')} }
                >
                    点我
                </MtActionButton>
            );
        }
    },
    {
        title: 'Disabled MtActionButton',
        render: function () {
            return (
                <MtActionButton
                    disabled = {true}
                    onPress ={() => {Alert.alert(null,'I\'m a button')} }
                >
                    一二三四五
                </MtActionButton>
            );
        }
    },
    {
        title: 'Basic foreground MtActionButton',
        render: function () {
            return (
                <MtActionButton
                    onPress ={() => {Alert.alert(null,'I\'m a button')} }
                    foreground="light"
                >
                    点我
                </MtActionButton>
            );
        }
    },
    {
        title: 'disabled foreground MtActionButton',
        render: function () {
            return (
                <MtActionButton
                    onPress ={() => {Alert.alert(null,'I\'m a button')} }
                    foreground="light"
                    disabled = {true}
                >
                    继续支付
                </MtActionButton>
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
    }];

var styles = StyleSheet.create({
    flexContainer: {
        // 容器需要添加direction才能变成让子元素flex
        flexDirection: 'row'
    },
    cell: {
        flex: 1,
        // height: 100,
        // backgroundColor: '#aaaaaa'
    },
});
