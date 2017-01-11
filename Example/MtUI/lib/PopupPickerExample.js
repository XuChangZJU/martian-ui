/**
 * Created by lavystord on 17/1/11.
 */
import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    Animated,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
    TouchableWithoutFeedback
} from 'react-native';
const UIExplorerBlock = require('UIExplorerBlock');
const UIExplorerPage = require('UIExplorerPage');
const UIExplorerTitle = require('UIExplorerTitle');
const PopupPicker = require('martian-ui').MtPopupPicker;



const PopupPickerExample = React.createClass({
    statics: {
        title: 'MtPopupPicker',
        description: 'a popup wheel picker',
    },
    getInitialState() {
        return {
        }
    },
    render() {
        // const ABUIExplorerPage = Animated.createAnimatedComponent(UIExplorerPage);
        return (
            <UIExplorerPage>
                <UIExplorerBlock title="Default MtPopupPicker">
                    <Button
                        title="open PopupPicker1"
                        onPress={() => {this.popupPicker1.open(); }}
                    />
                    <Text>
                        {`temp data is ${this.state.temp1} \n`}
                        {`your choice is ${this.state.choice1}`}
                    </Text>
                </UIExplorerBlock>
                <PopupPicker
                    ref={(popupPicker) => this.popupPicker1 = popupPicker }
                    options={['day1-day11','day2-day2','day3','day4','day5','day6']}
                    onSelect={(item,id) => this.setState({temp1: item})}
                    title="Date"
                    selectedOption={this.state.temp1}
                    onComplete={() => this.setState({choice1: this.state.temp1})}
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
    popupPickerContainer: {
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

module.exports = PopupPickerExample;

