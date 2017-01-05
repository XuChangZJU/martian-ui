/**
 * Created by lavystord on 17/1/5.
 */
import React, {Component, PropTypes} from "react";
import {View, Text, Button, StyleSheet} from "react-native";
const DateTimePicker = require('martian-ui').MtDateTimePicker;
const UIExplorerBlock = require('UIExplorerBlock');
const UIExplorerPage = require('UIExplorerPage');

const DateTimePickerExample = React.createClass({
    statics: {
        title: 'MtDateTimePicker',
        description: 'pick date and time',
    },
    getInitialState() {
        return {

        }
    },
    render() {
        return (
            <UIExplorerPage>
                <UIExplorerBlock title="DatePicker">
                    <Button
                        title="show DatePicker"
                        onPress={() =>
                            this.picker.showDatePicker(
                                new Date(),
                                (date) => { this.setState({ date});}
                                )
                        }
                    />
                    <Text style={styles.text}>
                        {`your choice is:  `}
                        {this.state.date && this.state.date.toLocaleDateString()}
                    </Text>
                </UIExplorerBlock>
                <DateTimePicker
                    ref={(picker) => {
                        this.picker = picker
                    }}
                    okText="确定"
                />
            </UIExplorerPage>
        );
    }
});

const styles = StyleSheet.create({
    text: {
        backgroundColor: 'skyblue',
        color: 'white',
        fontSize: 16,
    }
});

module.exports = DateTimePickerExample;