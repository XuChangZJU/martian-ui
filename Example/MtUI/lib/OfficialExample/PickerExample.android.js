/*
/!**
 * Created by lavystord on 17/1/7.
 *!/

const React = require('react');
const ReactNative = require('react-native');
const StyleSheet = require('StyleSheet');
const UIExplorerBlock = require('UIExplorerBlock');
const UIExplorerPage = require('UIExplorerPage');

const {
    Text,
} = ReactNative;

let data = [];
let data2 = [];
for(let i=0; i<100; i++) {
    data.push(i);
    data2.push(100 + i);
}

import { WheelPicker as Picker} from 'react-native-wheel-picker-android'
let Item = Picker.Item;
class PickerExample extends React.Component {
    static title = '<Picker>';
    static description = 'Provides multiple options to choose from, using either a dropdown menu or a dialog.';

    state = {
        selected1: 'key1',
        selected2: 'key1',
        selected3: 'key1',
        color: 'red',
    };

    render() {
        return (
            <UIExplorerPage title="<Picker>">
                <UIExplorerBlock title="Basic Picker">
                    <Picker
                        data={data}
                        isCurved
                        indicatorColor="#E6E7E9"
                        renderIndicator={true}
                        isCurtain={true}
                        selectedItemPosition={this.state.idx1}
                        itemTextColor="#b1b1b1"
                        isAtmospheric={true}
                        selectedItemTextColor="black"
                        onItemSelected={(event) => { this.setState({data: event.data, idx1: event.position})}}
                        style={{ width:200, height: 200}}
                    >
                    </Picker>
                    <Text>
                        {`your choice is: ${this.state.data}`}
                    </Text>
                    <Picker
                        data={data2}
                        isCurved
                        indicatorColor="#E6E7E9"
                        renderIndicator={true}
                        isCurtain={true}
                        selectedItemPosition={this.state.idx2}
                        itemTextColor="#b1b1b1"
                        isAtmospheric={true}
                        selectedItemTextColor="black"
                        onItemSelected={(event) => { this.setState({data2: event.data, idx2: event.position})}}
                        style={{ width:200, height: 200}}
                    >
                    </Picker>
                    <Text>
                        {`your choice is: ${this.state.data2}`}
                    </Text>
                </UIExplorerBlock>
            </UIExplorerPage>
        );
    }

    changeMode = () => {
        const newMode = this.state.mode === Picker.MODE_DIALOG
            ? Picker.MODE_DROPDOWN
            : Picker.MODE_DIALOG;
        this.setState({mode: newMode});
    };

    onValueChange = (key: string, value: string) => {
        const newState = {};
        newState[key] = value;
        this.setState(newState);
    };
}

var styles = StyleSheet.create({
    picker: {
        width: 200,
    },
});

module.exports = PickerExample;
*/

import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { WheelPicker } from 'react-native-wheel-picker-android';
import moment from 'moment';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    wheelPicker: {
        height: 150,
        width: null,
        flex: 1,
    },
});

class TimePicker extends React.Component {
    constructor(props) {
        super(props);
        this.selectedDate = this.props.initDate ? new Date(this.props.initDate) : new Date();
        const time12format = hourTo12Format(this.selectedDate.getHours());
        this.hours = this.props.hours ? this.props.hours : getHoursArray();
        this.minutes = this.props.minutes ? this.props.minutes : getFiveMinutesArray();
        this.initHourInex = time12format[0] - 1;
        this.initMinuteInex = Math.round(this.selectedDate.getMinutes() / 5);
        this.initAmInex = time12format[1] === 'AM' ? 0 : 1;
    }

    render() {
        return (
            <View style={styles.container}>
                <WheelPicker
                    style={styles.wheelPicker}
                    isAtmospheric
                    isCyclic
                    isCurved
                    visibleItemCount={6}
                    data={this.hours}
                    selectedItemTextColor={'black'}
                    onItemSelected={data => this.onHourSelected(data)}
                    selectedItemPosition={this.initHourInex}
                />
                <WheelPicker
                    style={styles.wheelPicker}
                    isAtmospheric
                    isCyclic
                    isCurved
                    visibleItemCount={6}
                    data={this.minutes}
                    selectedItemTextColor={'black'}
                    onItemSelected={data => this.onMinuteSelected(data)}
                    selectedItemPosition={this.initMinuteInex}
                />
                <WheelPicker
                    style={styles.wheelPicker}
                    isAtmospheric
                    isCurved
                    visibleItemCount={6}
                    data={getAmArray()}
                    selectedItemTextColor={'black'}
                    onItemSelected={data => this.onAmSelected(data)}
                    selectedItemPosition={this.initAmInex}
                />
            </View>
        );
    }

    onHourSelected(event) {
        const time12format = hourTo12Format(this.selectedDate.getHours());
        const newTime12Format = `${event.data} ${time12format[1]}`;
        const selectedHour24format = hourTo24Format(newTime12Format);
        this.selectedDate.setHours(selectedHour24format);
        this.onTimeSelected();
    }

    onMinuteSelected(event) {
        this.selectedDate.setMinutes(event.data);
        this.onTimeSelected();
    }

    onAmSelected(event) {
        const time12format = hourTo12Format(this.selectedDate.getHours());
        const newTime12Format = `${time12format[0]} ${event.data}`;
        const selectedHour24format = hourTo24Format(newTime12Format);
        this.selectedDate.setHours(selectedHour24format);
        this.onTimeSelected();
    }

    onTimeSelected() {
        if (this.props.onTimeSelected) {
            this.props.onTimeSelected(this.selectedDate);
        }
    }

}

TimePicker.propTypes = {
    initDate: React.PropTypes.string,
    onTimeSelected: React.PropTypes.func,
    hours: React.PropTypes.array,
    minutes: React.PropTypes.array,
};

// it takes in format '12 AM' and return 24 format
function hourTo24Format(hour) {
    return parseInt(moment(hour, ['h A']).format('H'), 10);
}

// it takes in format 23 and return [11,'PM'] format
function hourTo12Format(hour) {
    const currDate = new Date();
    currDate.setHours(hour);
    return dateTo12Hour(currDate.toISOString());
}

const dateTo12Hour = (dateString) => {
    const localDate = new Date(dateString);
    let hour = localDate.getHours();
    if (hour === 12) {
        return [('12'), ('PM')];
    } if (hour === 0) {
        return [('12'), ('AM')];
    }
    const afterMidday = hour % 12 === hour;
    hour = afterMidday ? hour : hour % 12;
    const amPm = afterMidday ? 'AM' : 'PM';
    return [(hour.toString()), (amPm)];
};

function getHoursArray() {
    const arr = [];
    for (let i = 1; i < 13; i++) {
        arr.push(i);
    }
    return arr;
}

function getFiveMinutesArray() {
    const arr = [];
    arr.push('00');
    arr.push('05');
    for (let i = 10; i < 60; i += 5) {
        arr.push(`${i}`);
    }
    return arr;
}

function getAmArray() {
    const arr = [];
    arr.push('AM');
    arr.push('PM');
    return arr;
}
module.exports = TimePicker;



