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
                                new Date(2014,10,14),
                                (date) => { this.setState({ date});}
                                )
                        }
                    />
                    <Text style={styles.text}>
                        {`your choice is:  `}
                        {this.state.date && this.state.date.toLocaleDateString()}
                    </Text>
                </UIExplorerBlock>
                <UIExplorerBlock title="TimePicker">
                    <Button
                        title="show TimePicker"
                        onPress={() =>
                            this.picker.showTimePicker(
                                new Date(),
                                (time) => { this.setState({ time});}
                                )
                        }
                    />
                    <Text style={styles.text}>
                        {`your choice is:  `}
                        {this.state.time && this.state.time.toLocaleTimeString()}
                    </Text>
                </UIExplorerBlock>
                <UIExplorerBlock title="DateTimePicker">
                    <Button
                        title="show DateTimePicker"
                        onPress={() =>
                            this.picker.showDateTimePicker(
                                new Date(),
                                (datetime) => { this.setState({ datetime});}
                                )
                        }
                    />
                    <Text style={styles.text}>
                        {`your choice is:  `}
                        {this.state.datetime && this.state.datetime.toLocaleString()}
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