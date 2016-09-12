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

var MtFixedButton = require('martian-ui').MtFixedButton;

exports.title  = 'MtFixedButton';
exports.description = 'basic button fixed in the bottom';
exports.examples = [
    {
        title: 'Basic MtFixedButton',
        render: function () {
            return (
                <MtFixedButton
                    onPress ={() => {Alert.alert(null,'I\'m a button')} }
                >
                    点我
                </MtFixedButton>
            );
        }
    },
    {
        title: 'Disabled MtFixedButton',
        render: function () {
            return (
                <MtFixedButton
                    disabled = {true}
                    onPress ={() => {Alert.alert(null,'I\'m a button')} }
                >
                    Press Me don't work
                </MtFixedButton>
            );
        }
    },
    {
        title: 'Basic foreground MtFixedButton',
        render: function () {
            return (
                <MtFixedButton
                    onPress ={() => {Alert.alert(null,'I\'m a button')} }
                    foreground="light"
                >
                    点我
                </MtFixedButton>
            );
        }
    },
    {
        title: 'disabled foreground MtFixedButton',
        render: function () {
            return (
                <MtFixedButton
                    onPress ={() => {Alert.alert(null,'I\'m a button')} }
                    foreground="light"
                    disabled = {true}
                >
                    Press Me don't work
                </MtFixedButton>
            );
        }
    },
    {
        title: 'double MtFixedButton',
        render: function () {
            return (
                <View style={styles.flexContainer} >
                        <MtFixedButton
                            foreground="light"
                            containerStyle={{flex:1}}
                            onPress ={() => {Alert.alert(null,'I\'m a button1')} }
                        >
                            Tap Me
                        </MtFixedButton>

                        <MtFixedButton
                            onPress ={() => {Alert.alert(null,'I\'m a button2')} }
                            containerStyle={{flex:1}}
                        >
                            Press Me~
                        </MtFixedButton>
                </View>
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
