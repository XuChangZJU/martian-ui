/**
 * Created by lavystord on 17/1/17.
 */
/**
 * Created by lavystord on 16/8/15.
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
const IconLabelBar = require('martian-ui').MtIconLabelBar;

exports.title  = 'MtIconLabelBar';
exports.description = 'basic component for displaying label and value';
exports.examples = [
    {
        title: 'Plain MtIconLabelBar',
        render: function () {
            return (
                <IconLabelBar
                    iconName="wallet"
                    title="昵称"
                    value="hello world"
                />
            );
        }
    },
    {
        title: 'Plain MtIconLabelBar without value',
        render: function () {
            return (
                <IconLabelBar
                    iconName="order"
                    title="昵称"
                />
            );
        }
    },
    {
        title: 'Plain MtIconLabelBar without icon',
        render: function () {
            return (
                <IconLabelBar
                    iconName="order"
                    title="昵称"
                    value="hello world"
                    disableIcon={true}
                />
            );
        }
    },
    {
        title: 'Plain MtIconLabelBar with onPress',
        render: function () {
            return (
                <IconLabelBar
                    iconName="order"
                    title="昵称"
                    value="Come on"
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