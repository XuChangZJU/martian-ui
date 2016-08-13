/**
 * Created by lavystord on 16/8/12.
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
const MtEdit = require('martian-ui').MtEdit;

exports.title  = 'MtEdit';
exports.description = 'basic text input component with label text';
exports.examples = [
    {
        title: 'Plain MtEdit',
        render: function () {
            return (
                <MtEdit
                    title="登录"
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