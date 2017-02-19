/**
 * Created by lavystord on 17/1/10.
 */
import React from "react";
import {Text, View} from "react-native";
const Picker = require('martian-ui').MtPicker;
const UIExplorerBlock = require('UIExplorerBlock');
const UIExplorerPage = require('UIExplorerPage');

const PickerExample = React.createClass({
    statics: {
        title: 'MtPicker',
        description: 'multiple options, only one option can be selected at a given time',
    },
    getInitialState() {
        return {
            selected1: null,
            selected2: null,
            selected3: null,
        }
    },
    render() {
        return (
            <UIExplorerPage title="MtPicker">
                <UIExplorerBlock title="Default Picker">
                    <Picker
                        options={['option1', 'option2','option3','option4','option5','option6','option7']}
                        selectedOption={ this.state.selected1 }
                        onSelect={this.setSelectedValue.bind(this, 'selected1')}
                    >
                    </Picker>
                    <Text style={{marginTop:20}}>
                        {`your choice is: ${this.state.selected1}`}
                    </Text>
                </UIExplorerBlock>
                <UIExplorerBlock title="Picker with transformOption">
                    <Picker
                        options={[{age:25,name:'Bob'}, {age:18, name:'Jack'},{age:43, name:'Alex'}]}
                        selectedOption={ this.state.selected2 }
                        transformOption={(option) => (option.name)}
                        onSelect={this.setSelectedValue.bind(this, 'selected2')}
                    >
                    </Picker>
                    <Text style={{marginTop:20}}>
                        {`your choice is: ${this.state.selected2 && this.state.selected2.name} \n`}
                        {`and his age is ${this.state.selected2 && this.state.selected2.age}`}
                    </Text>
                </UIExplorerBlock>
                <UIExplorerBlock title="Picker with Custom Style">
                    <Picker
                        options={[14,2,3,4,5,6,7,8,9,10,11,12,13]}
                        selectedOption={ this.state.selected3 }
                        optionStyle={{ color: 'red'}} //ios
                        optionColor='red' //android
                        selectedOptionColor="blue" //android
                        style={{ width: 200 }}
                        transformOption={(option) => (option.toString())}
                        onSelect={this.setSelectedValue.bind(this, 'selected3')}
                    >
                    </Picker>
                    <Text style={{marginTop:20}}>
                        {`your choice is: ${this.state.selected3}`}
                    </Text>
                </UIExplorerBlock>
            </UIExplorerPage>);
    },

    setSelectedValue(key, value) {
        const newState = {};
        newState[key] = value;
        this.setState(newState);
    }
});

module.exports = PickerExample;
