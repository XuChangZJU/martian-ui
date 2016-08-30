/**
 * Created by CnJon on 16/1/21.
 */


import React,{Component, PropTypes} from 'react';
import {
    DatePickerIOS,
    Dimensions,
    Navigator,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Modal,
    TouchableWithoutFeedback,
} from 'react-native';

const Screen = Dimensions.get('window');

export default class DateTimePicker extends Component {
    static propTypes = {
        okText: PropTypes.string
    };

    static defaultProps = {
        okText: "Ok"
    };

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            mode: 'date',
            date: new Date(),
            timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
        };
        this.callback = ()=>{};
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

    showTimePicker(date, callback) {
        this.callback = callback || this.props.onDateChange;
        date = (date || new Date());

        this.setState({
            mode: 'time',
            visible: true,
            date: date
        });
    }

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
        this.setState({
            visible: false
        });
        this.callback(this.state.date);
    }

    onDateChange(date) {
        this.setState({date: date});
    }

    render() {
        const styles = { ..._styles, ...this.props.styles}
        // return this.state.visible && (
        //         <View style={styles.container}>
        //             <View style={styles.actionSheetContainer}>
        //                 <TouchableOpacity
        //                     style={styles.touchableOpacity}
        //                     activeOpacity={1}
        //                     onPress={()=>this.onClose()} />
        //                 <TouchableOpacity
        //                     onPress={()=>this.onComplete()}
        //                     style={styles.button}>
        //                     <Text>{ this.props.okText }</Text>
        //                 </TouchableOpacity>
        //                 <View style={styles.separator}/>
        //                 <View style={styles.datePicker}>
        //                     <View>
        //                     <DatePickerIOS
        //                         date={this.state.date}
        //                         mode={this.state.mode}
        //                         onDateChange={(date)=>this.onDateChange(date)}
        //                         timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
        //                         {...this.props}
        //                     />
        //                     </View>
        //                 </View>
        //                 <TouchableOpacity
        //                     style={styles.touchableOpacity}
        //                     activeOpacity={1}
        //                     onPress={()=>this.onClose()} />
        //             </View>
        //         </View>
        //     );
        return this.state.visible && (

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.visible}
                    onRequestClose={() => {this.setState( {visible:false}) }}

                >
                    <TouchableWithoutFeedback onPress={() => {this.setState( {visible:false} )}}>
                        <View style = { {backgroundColor:'rgba(0, 0, 0, 0.5)', flex: 1, justifyContent: 'center',}}>
                            <TouchableWithoutFeedback onPress={() => {this.setState( {visible:true} )}}>
                                <View>
                                    <View style={[styles.touchableOpacity, { backgroundColor: '#ffffff' }]}>
                                        <TouchableOpacity
                                            onPress={()=>this.onComplete()}
                                            style={styles.button}>
                                            <Text>{ this.props.okText }</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.separator}/>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => {this.setState( {visible:true} )}}>
                                <View style = {{backgroundColor:'#fff', width: Screen.width, height: Screen.height * 0.3 }}>
                                    <DatePickerIOS
                                        date={this.state.date}
                                        mode={this.state.mode}
                                        onDateChange={(date)=>this.onDateChange(date)}
                                        timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                                        {...this.props}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>

             </Modal>
            );
    }
}

const _styles = StyleSheet.create({
    container:{
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
        position: 'absolute',
    },
    actionSheetContainer: {
        height: Screen.height,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    datePicker: {
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableOpacity: {
        flex: 1,
    },
    button: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    separator: {
        height: 1,
        backgroundColor: '#CCC'
    }
});
