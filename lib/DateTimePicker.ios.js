/**
 * Created by lavystord on 17/1/5.
 */
import React, {Component, PropTypes} from "react";
import {
    DatePickerIOS,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Modal,
    TouchableWithoutFeedback
} from "react-native";

export default class DateTimePicker extends Component {
    static propTypes = {
        okText: PropTypes.string
    };

    static defaultProps = {
        okText: 'Ok',
        cancelText: '取消',
        // mode: 'date'
    };

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            date: new Date(),
            timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
        };
        this.callback = () => {
        };
    }

    showDatePicker(date, callback) {
        this.callback = callback || this.props.onDateChange;
        date = (date || new Date());

        this.setState({
            mode: 'date',
            visible: true,
            date: date
        });
    }

    //todo unImplemented
    showTimePicker(date, callback) {
        this.callback = callback || this.props.onDateChange;
        date = (date || new Date());

        this.setState({
            mode: 'time',
            visible: true,
            date: date
        });
    }

    // todo unImplemented
    showDateTimePicker(date, callback) {
        this.callback = callback || this.props.onDateChange;
        date = (date || new Date());

        this.setState({
            mode: 'datetime',
            visible: true,
            date: date
        });
    }

    onClose() {
        this.setState({
            visible: false
        });
    }

    onComplete() {
        this.close();
        this.callback(this.state.date);
    }

    onDateChange(date) {
        this.setState({date: date});
    }

    close() {
        this.setState({visible: false});
    }

    render() {
        const { mode, ...props } = this.props;
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.visible}
            >
                <View style={styles.container}>
                    <TouchableWithoutFeedback onPress={() => {this.close()}}>
                        <View style={{ flex: 1 }}/>
                    </TouchableWithoutFeedback>
                    <View style={[styles.header]}>
                        <Text
                            onPress={()=>this.close()}
                            style={styles.text}>
                            { this.props.cancelText }
                        </Text>
                        <Text
                            onPress={()=>this.onComplete()}
                            style={styles.text}>
                            { this.props.okText }
                        </Text>
                    </View>
                    <View style={styles.picker}>
                        <DatePickerIOS
                            date={this.state.date}
                            mode={this.state.mode}
                            onDateChange={(date)=>this.onDateChange(date)}
                            timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                            {...props}
                        />
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        justifyContent: 'flex-end',
    },
    text: {
        color: '#007aff',
        fontSize: 18,
    },
    header: {
        height: 30,
        paddingHorizontal: 5,
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    picker: {
        backgroundColor: 'white',
    },
});

module.exports = DateTimePicker;
