/**
 * Created by lavystord on 16/9/6.
 */
import React from 'react';
import { View } from 'react-native';
const UIExplorerBlock = require('UIExplorerBlock');
const UIExplorerPage = require('UIExplorerPage');
import { MtTextArea } from 'martian-ui';


const TextAreaExample = React.createClass({
    statics: {
        title: 'MtTextArea',
        description: 'multiple line components for text input',
    },

    getInitialState: function() {
        return {
            text1: undefined,
            text2: undefined,
        };
    },

    render() {
        return (
            <UIExplorerPage title="MtTextArea">
                <UIExplorerBlock title="Default TextArea">
                    <MtTextArea
                        maxLength={50}
                        onChangText={ (text1) => {
                                this.setState({text1});
                        }}
                    />
                </UIExplorerBlock>
                <UIExplorerBlock title="Default TextArea with defaultValue">
                    <MtTextArea
                        maxLength={50}
                        defaultValue="hello world"
                        onChangText={ (text1) => {
                                this.setState({text1});
                        }}
                    />
                </UIExplorerBlock>
            </UIExplorerPage>
        );
    }

});

module.exports = TextAreaExample;
