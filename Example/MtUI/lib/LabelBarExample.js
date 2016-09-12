/**
 * Created by lavystord on 16/8/15.
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
const MtLabelBar = require('martian-ui').MtLabelBar;

exports.title  = 'MtLabelBar';
exports.description = 'basic component for displaying label and value';
exports.examples = [
    {
        title: 'Plain MtLabelBar',
        render: function () {
            return (
                <MtLabelBar
                    title="昵称"
                    value="周杰伦"
                />
            );
        }
    },
    {
        title: 'Plain MtLabelBar without value',
        render: function () {
            return (
                <MtLabelBar
                    title="昵称"
                />
            );
        }
    },
    {
        title: 'Plain MtLabelBar without icon',
        render: function () {
            return (
                <MtLabelBar
                    title="手机号码"
                    value="18612345678"
                    disableIcon={true}
                />
            );
        }
    },
    {
        title: 'Plain MtLabelBar with onPress',
        render: function () {
            return (
                <MtLabelBar
                    title="手机号码"
                    value="18612345678"
                    onPress={() => {alert('Hello'); }}
                />
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