/**
 * Created by lavystord on 16/9/22.
 */
import React from 'react';
import { Text,View } from 'react-native';
import { MtCheckBox } from 'martian-ui';
const UIExplorerBlock = require('UIExplorerBlock');
const UIExplorerPage = require('UIExplorerPage');

const CheckBoxExample = React.createClass({
    statics: {
        title: 'MtCheckBox',
        description: 'multiple options, some of them can be selected at a given time',
    },

    getInitialState: function() {
        return {
            selected1: [],
            selected2: [],
        };
    },

    render() {
        return (
            <UIExplorerPage title="MtCheckBox">
                <UIExplorerBlock title="Default CheckBox">
                    <View style={{ paddingTop: 20}}>
                        <MtCheckBox
                            options = {['option1', 'option2','option3']}
                            selectedOptions={ this.state.selected1 }
                            onSelect = {(selectedOption, selected, indexInOptions) => {
                                const { selected1 } = this.state;
                                if (selected) {
                                       this.setState({ selected1: [...selected1, selectedOption] });
                                 }
                                   else {
                                       selected1.forEach((ele, index1) => {
                                           if (ele === selectedOption) {
                                               selected1.splice(index1, 1);
                                           }
                                       });
                                       this.setState({ selected1 });
                                   }
                            }}
                        >
                        </MtCheckBox>
                        <Text style={{marginTop:20}}>
                            {`you choose ${this.state.selected1.length} option`}
                        </Text>
                    </View>
                </UIExplorerBlock>
                <UIExplorerBlock title="CheckBox with custom mapOption">
                    <View style={{ paddingTop: 20}}>
                        <MtCheckBox
                            options = {[{id:1,name:'option1'}, {id:2, name:'option2'},{id:4, name:'option3'}]}
                            selectedOptions={ this.state.selected2 }
                            transformOption={(option) => (option.name)}
                            testOptionEqual={(a,b)=>{return  a.id === b.id}}
                            onSelect = {(selectedOption, selected, indexInOptions) => {
                                const { selected2 } = this.state;
                                if (selected) {
                                       this.setState({ selected2: [...selected2, selectedOption] });
                                 }
                                   else {
                                       selected2.forEach((ele, index1) => {
                                           if (ele.id === selectedOption.id) {
                                               selected2.splice(index1, 1);
                                           }
                                       });
                                       this.setState({ selected2 });
                                   }
                            }}
                        >
                        </MtCheckBox>
                        <Text style={{marginTop:20}}>
                            {`you choose ${this.state.selected2.length} option`}
                        </Text>
                    </View>
                </UIExplorerBlock>
            </UIExplorerPage>
        );
    },

    setSelectedValue(key, selectedOption, selected, selectedIndex) {
        const array = this.state[key];
        // if (selected){
            console.warn('hello');
            array.push(selectedOption);
        // }
        this.setState({ key: array});
    }
});

module.exports = CheckBoxExample;

