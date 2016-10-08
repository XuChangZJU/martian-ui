/**
 * Created by Hey on 2016/6/15.
 */

import React from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    TouchableHighlight,
    TextInput,
    View,
}  from 'react-native';
const UIExplorerBlock = require('UIExplorerBlock');
const UIExplorerPage = require('UIExplorerPage');
const MtInput = require('martian-ui').MtInput;
let a;

const InputExample = React.createClass({
    statics: {
        title: 'MtInput',
        description: 'basic single-line text inputs',
    },

    getInitialState: function() {
        return {
            text1: null,
            text2: undefined,

        };
    },

    render() {
        return (
            <UIExplorerPage title="MtInput">
                <UIExplorerBlock title="Basic Input">
                    <View style={{ paddingTop: 20}}>
                        <MtInput
                            defaultValue={this.state.text1}
                            maxLength={3}
                            onChangeText={(text) => {this.setState({text1:text})}}
                        >
                        </MtInput>
                        <Text style={{marginTop:20}}>
                            {`your input is: ${this.state.text1}`}
                        </Text>
                    </View>
                </UIExplorerBlock>
                <UIExplorerBlock title="Basic Input2">
                    <View style={{ paddingTop: 20}}>
                        <MtInput
                            defaultValue={this.state.text2}
                            onChangeText={(text) => {this.setState({text2:text})}}
                        >
                        </MtInput>
                        <Text style={{marginTop:20}}>
                            {`your input is: ${this.state.text2}`}
                        </Text>
                    </View>
                </UIExplorerBlock>
                <UIExplorerBlock title="basic input3">
                    <TextInput
                        maxLength={4}
                        style={{ height: 40 }}
                        onChangeText={(text) => {this.setState({text3:text})}}
                    >
                    </TextInput>
                    <Text style={{marginTop:20}}>
                        {`your input is: ${this.state.text3}`}
                    </Text>
                </UIExplorerBlock>
            </UIExplorerPage>
        );
    },

});

module.exports = InputExample;