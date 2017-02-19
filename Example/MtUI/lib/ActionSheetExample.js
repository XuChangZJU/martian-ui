/**
 * Created by lavystord on 17/2/19.
 */
import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
    TouchableWithoutFeedback
} from 'react-native';
const UIExplorerBlock = require('UIExplorerBlock');
const UIExplorerPage = require('UIExplorerPage');
const UIExplorerTitle = require('UIExplorerTitle');
const ActionSheet = require('martian-ui').MtActionSheet;

const options1 = ['Cancel','day1','day2','day3','day4','day5','day6'];

const ActionSheetExample = React.createClass({
    statics: {
        title: 'MtActionSheet',
        description: 'a popup ActionSheet',
    },
    getInitialState() {
        return {
            choice2: null,
        }
    },
    render() {
        return (
            <UIExplorerPage>
                <UIExplorerBlock title="Default MtActionSheet">
                    <Button
                        title="open ActionSheet1"
                        onPress={() => {this.actionSheet1.show(); }}
                    />
                    <Text>
                        {`your choice is ${this.state.choice1}`}
                    </Text>
                </UIExplorerBlock>
                <UIExplorerBlock title="MtActionSheet with tint">
                    <Button
                        title="open ActionSheet2"
                        onPress={() => {this.actionSheet2.show(); }}
                    />
                    <Text>
                        {`your choice is ${this.state.choice2}`}
                    </Text>
                </UIExplorerBlock>
                <ActionSheet
                    ref={(actionSheet) => this.actionSheet2 = actionSheet }
                    options={options1}
                    tintColor="green"
                    cancelButtonIndex={0}
                    title="type your title here"
                    destructiveButtonIndex={2}
                    onPress={(index) => {
                        this.setState({choice2: options1[index]});
                    }}
                />
            </UIExplorerPage>
        );
    }
});

const styles = StyleSheet.create({
    title: {
        height: 20,
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 16,

    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 30,
    },
    button: {
        backgroundColor: '#ccc',
        borderRadius: 5,
        padding: 10
    },
    close: {
        position: 'absolute',
        right: 20,
        top: 40,
        zIndex: 2,
        backgroundColor: 'red'
    },
    actionSheetContainer: {
        height: 100,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    box: {
        height: 100,
        backgroundColor: 'deepskyblue',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    text: {
        color: '#fff'
    },
});

module.exports = ActionSheetExample;