/**
 * Created by lavystord on 16/11/9.
 */
import React from 'react';
import { View, Text } from 'react-native';

import { MtCheckItem } from 'martian-ui';
const UIExplorerBlock = require('UIExplorerBlock');
const UIExplorerPage = require('UIExplorerPage');

const CheckItemExample = React.createClass({
    statics: {
        title: 'MtCheckItem',
        description: 'component for checkItem',
    },

    getInitialState: function() {
        return {
            // selected1: false,
            // selected2: false,
        };
    },

    render() {
        return (
            <UIExplorerPage title="MtCheckItem">
                <UIExplorerBlock title="Default CheckItem">
                    <View style={{ paddingTop: 20}}>
                        <MtCheckItem
                            checked={this.state.selected1}
                            onPress= {this.setSelectedValue.bind(this, 'selected1')}
                        >
                        </MtCheckItem>
                        <Text style={{marginTop:20}}>
                            {`checked: ${this.state.selected1 ? 'yes' : 'no'}`}
                        </Text>
                    </View>
                </UIExplorerBlock>
                <UIExplorerBlock title="Disable UnChecked CheckItem">
                    <View style={{ paddingTop: 20}}>
                        <MtCheckItem
                            checked={false}
                            onPress= {this.setSelectedValue.bind(this, 'selected1')}
                            disabled={true}
                        >
                        </MtCheckItem>
                        <Text style={{marginTop:20}}>
                            {`checked: ${this.state.selected1 ? 'yes' : 'no'}`}
                        </Text>
                    </View>
                </UIExplorerBlock>
                <UIExplorerBlock title="Disable Checked CheckItem">
                    <View style={{ paddingTop: 20}}>
                        <MtCheckItem
                            checked={true}
                            onPress= {this.setSelectedValue.bind(this, 'selected1')}
                            disabled={true}
                        >
                        </MtCheckItem>
                        <Text style={{marginTop:20}}>
                            {`checked: ${this.state.selected1 ? 'yes' : 'no'}`}
                        </Text>
                    </View>
                </UIExplorerBlock>
                <UIExplorerBlock title="Custom CheckItem">
                    <View style={{ paddingTop: 20}}>
                        <MtCheckItem
                            checked={this.state.selected2}
                            onPress= {this.setSelectedValue.bind(this, 'selected2')}
                            size={40}
                            backgroundColor='#007AFF'
                        >
                        </MtCheckItem>
                        <Text style={{marginTop:20}}>
                            {`checked: ${this.state.selected2 ? 'yes' : 'no'}`}
                        </Text>
                    </View>
                </UIExplorerBlock>
                <UIExplorerBlock title="Square CheckItem">
                    <View style={{ paddingTop: 20}}>
                        <MtCheckItem
                            checked={this.state.selected3}
                            onPress= {this.setSelectedValue.bind(this, 'selected3')}
                            shape='square'
                        >
                        </MtCheckItem>
                        <Text style={{marginTop:20}}>
                            {`checked: ${this.state.selected3 ? 'yes' : 'no'}`}
                        </Text>
                    </View>
                </UIExplorerBlock>
            </UIExplorerPage>
        );
    },

    setSelectedValue(key,value) {
        const newState = {};
        newState[key] = value;
        this.setState(newState);
    }
});

module.exports = CheckItemExample;