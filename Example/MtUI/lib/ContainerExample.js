/**
 * Created by Bly on 2016/6/13.
 */
'use strict';

import React from 'react';
import {
    Alert,
    StyleSheet,
    TouchableHighlight,
    Text,
    View,
} from 'react-native';
const UIExplorerBlock = require('UIExplorerBlock');
const UIExplorerPage = require('UIExplorerPage');
const UIExplorerTitle = require('UIExplorerTitle');
const MtContainer = require('martian-ui').MtContainer;

const ContainerExample = React.createClass({
    statics: {
        title: 'MtContainer',
        description: 'Container is a view',
    },
    getInitialState() {
        return {
        }
    },
    render() {
        // const ABUIExplorerPage = Animated.createAnimatedComponent(UIExplorerPage);
        return (
            <UIExplorerPage noScroll={true}>
                <UIExplorerTitle title="Plain Container"/>
                    <MtContainer>
                        <View style={{margin:10,backgroundColor: 'red',height:50 }}>
                        </View>
                    </MtContainer>
                    <UIExplorerTitle title="Pull to Refresh Container"/>
                    <MtContainer
                        style={{ height: 70 }}
                        scroll
                        onRefresh={() => alert('hello world')}
                    >
                        <View style={{margin: 5,backgroundColor: 'red',height:50}} />
                        <View style={{margin: 5,backgroundColor: 'red',height:50}} />
                        <View style={{margin: 5,backgroundColor: 'red',height:50}} />
                    </MtContainer>
            </UIExplorerPage>
        );
    }
});

module.exports = ContainerExample;
