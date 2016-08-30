/**
 * Created by CnJon on 16/1/21.
 */


import React,{Component, PropTypes} from 'react';
import {
    NativeModules,
    View,
    TimePickerAndroid,
    DatePickerAndroid,
} from 'react-native';

// const RCTDateTimePicker = NativeModules.DateTimePicker;

class DateTimePicker extends Component {
    static propTypes = {
        cancelText: PropTypes.string,
        okText:  PropTypes.string
    };

    static defaultProps = {
        cancelText: 'Cancel',
        okText: 'Ok'
    };

    constructor(props) {
        super(props);
    }

    showDatePicker(date, callback) {
        date = date || new Date();
        callback = callback || this.props.onDateChange;
        var options = {
            date,
            ...this.props,
        };
        // RCTDateTimePicker.showDatePicker(options, function (year, month, day) {
        //     date.setFullYear(year);
        //     date.setMonth(month);
        //     date.setDate(day);
        //     callback(date);
        // });
        const showDate = async () => {
            try {
                const {action, year, month, day} = await DatePickerAndroid.open(options);
                if (action === DatePickerAndroid.dateSetAction) {
                    date.setFullYear(year);
                    date.setMonth(month);
                    date.setDate(day);
                    callback(date);
                } else if (action === DatePickerAndroid.dismissedAction) {
                    // newState[stateKey + 'Text'] = 'dismissed';
                }
            } catch (e) {
                throw e;
            }
        };
        return showDate();
    }

    showTimePicker(date, callback) {
        date = date || new Date();
        callback = callback || this.props.onDateChange;
        var options = {
            is24Hour: true,
            ...this.props,
            hour:date.getHours(),
            minute:date.getMinutes(),
        };

        const showTime = async () => {
            try {
                const {action, minute, hour} = await TimePickerAndroid.open(options);
                if (action === TimePickerAndroid.timeSetAction) {
                    date.setHours(hour);
                    date.setMinutes(minute);
                    callback(date);

                } else if (action === TimePickerAndroid.dismissedAction) {
                    // newState[stateKey + 'Text'] = 'dismissed';
                }
            } catch (e) {
                // const e = {code, message };
                throw e;
            }
        };
        return showTime();
    }

    showDateTimePicker(date, callback) {
        date = date || new Date();
        callback = callback || this.props.onDateChange;
        var options = {
            ...this.props,
            year:date.getFullYear(),
            month:date.getMonth(),
            day:date.getDate(),
            hour:date.getHours(),
            minute:date.getMinutes()
        };
        // RCTDateTimePicker.showDateTimePicker(options, function (year, month, day, hour, minute) {
        //     date.setFullYear(year);
        //     date.setMonth(month);
        //     date.setDate(day);
        //     date.setHours(hour);
        //     date.setMinutes(minute);
        //     callback(date);
        // });
        const testAsync = async () => {
            try {
                const {action, year, month, day} = await DatePickerAndroid.open(options);
                if (action === DatePickerAndroid.dateSetAction) {
                    date.setFullYear(year);
                    date.setMonth(month);
                    date.setDate(day);

                    const showTime = async () => {
                        try {
                            const {action, minute, hour} = await TimePickerAndroid.open(options);
                            if (action === TimePickerAndroid.timeSetAction) {
                                date.setHours(hour);
                                date.setMinutes(minute);
                                callback(date);

                            } else if (action === TimePickerAndroid.dismissedAction) {
                                // newState[stateKey + 'Text'] = 'dismissed';
                            }
                        } catch (e) {
                            throw e;
                        }
                    };
                    return showTime();

                } else if (action === DatePickerAndroid.dismissedAction) {
                    // newState[stateKey + 'Text'] = 'dismissed';
                }
            } catch (e) {
                throw e;
            }
        };
        return testAsync();
    }

    render() {
        return null;
    }
}

module.exports = DateTimePicker;
