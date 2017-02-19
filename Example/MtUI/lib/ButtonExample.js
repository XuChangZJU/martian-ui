/**
 * Created by Hey on 2016/6/16.
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
    ActivityIndicator,
} = ReactNative;

var MtButton = require('martian-ui').MtButton;

exports.title  = 'MtButton';
exports.description = 'basic button';
exports.examples = [
    {
        title: 'Basic MtButton',
        render: function () {
            return (
                <MtButton
                    onPress ={() => {Alert.alert(null,'I\'m a button')} }
                >
                    点我
                </MtButton>
            );
        }
    },
    {
        title: 'Disabled MtButton',
        render: function () {
            return (
                <MtButton
                    disabled = {true}
                    onPress ={() => {Alert.alert(null,'I\'m a button')} }
                >
                    Press Me don't work
                </MtButton>
            );
        }
    },
    {
        title: 'Custom containerStyle',
        render: function () {
            return (
                <MtButton
                    containerStyle={{ backgroundColor: 'green', marginTop: 5, }}
                    onPress ={() => {Alert.alert(null,'I\'m a button')} }
                >
                    dark background
                </MtButton>
            );
        }
    },
    {
        title: 'double MtButton',
        render: function () {
            return (
                <View style={styles.flexContainer} >
                    <View style={styles.cell}>
                        <MtButton
                            onPress ={() => {Alert.alert(null,'I\'m a button1')} }
                        >
                            Tap Me
                        </MtButton>
                    </View>

                    <View style={styles.cell}>
                        <MtButton
                            onPress ={() => {Alert.alert(null,'I\'m a button2')} }
                        >
                            Press Me
                        </MtButton>
                    </View>
                </View>
            );
        }
    },
    {
        title: 'loading feature',
        render: function () {
            return (
                <MtButton
                    containerStyle={{ backgroundColor: 'green', marginTop: 5, }}
                    onPress ={() => {Alert.alert(null,'I\'m a button')} }
                >
                    <ActivityIndicator
                        color="white"
                    />
                </MtButton>
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
