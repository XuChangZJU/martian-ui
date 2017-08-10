/**
 * Created by Bly on 2016/6/13.
 */
'use strict';

import React from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
} from 'react-native';
const UIExplorerBlock = require('UIExplorerBlock');
const UIExplorerPage = require('UIExplorerPage');
const UIExplorerTitle = require('UIExplorerTitle');
const MtContainer = require('martian-ui').MtContainer;
const MtFixedButton = require('martian-ui').MtFixedButton;
const MtNavBar = require('martian-ui').MtNavBar;

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
            <UIExplorerPage noScroll={true} noSpacer>
                <UIExplorerTitle title="Plain Container"/>
                <MtContainer style={{ backgroundColor: 'gray'}}>
                    <View style={{backgroundColor: 'blue',height:25, margin:10 }}>
                    </View>
                </MtContainer>
                <UIExplorerTitle title="Pull to Refresh Container" containerStyle={{marginBottom: 10}}/>
                <MtContainer
                    ref={temp => this.container = temp}
                    scroll
                    renderHeader={() => <MtNavBar title="Navbar" leftItem={{title: 'button',onPress: () => alert('press')}} />}
                    onRefresh={() => alert('hello world')}
                >
                    <View style={{margin: 5,backgroundColor: 'red',height:50}} />
                    <View style={{margin: 5,backgroundColor: 'red',height:50}} />
                    <View style={{margin: 5,backgroundColor: 'red',height:50}} />
                    <View style={{margin: 5,backgroundColor: 'red',height:50}} />
                </MtContainer>
                <View style={styles.flexContainer} >
                    <MtFixedButton
                        foreground="light"
                        containerStyle={{flex:1}}
                        onPress ={() => this.container.scrollToEnd()}
                    >
                        ScrollToEnd
                    </MtFixedButton>

                    <MtFixedButton
                        onPress ={() => {this.container.scrollTo({ y: 0})} }
                        containerStyle={{flex:1}}
                    >
                        ScrollToTop
                    </MtFixedButton>
                </View>
            </UIExplorerPage>
        );
    }
});

const styles = StyleSheet.create({
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

module.exports = ContainerExample;
