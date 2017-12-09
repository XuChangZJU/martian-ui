/**
 * Created by lavystord on 16/8/29.
 */
import { StyleSheet, Text, View} from 'react-native';
import React, { Component, PropTypes } from 'react';
import Color from '../utils/color';
const TimerMixin = require('react-timer-mixin');


const FloatingBar =React.createClass( {
    mixins: [TimerMixin],
    getInitialState: function () {
        return {
            time: this.props.deadline && parseInt((this.props.deadline - new Date().getTime())/1000),
        };
    },
    getDefaultProps: function () {
        return {
            message: 'time is over'
        }
    },
    propTypes: {
        deadline: PropTypes.number,
        countdownMessage: PropTypes.func,
        message: PropTypes.string,
        onEnd: PropTypes.func,
    },

    componentWillReceiveProps(nextProps) {
        if(nextProps.deadline !== this.props.deadline) {
            this.setState({ time: nextProps.deadline && parseInt((nextProps.deadline - new Date().getTime())/1000)})
        }
    },

    componentDidMount() {
        // if ( this.state.time < 3600 ) {
        this._countdown();
        // }
    },
    render() {
        const { countdownMessage, deadline, containerStyle, style } = this.props;
        const { time } = this.state;
        let message = this.props.message;
        if (deadline && time > 0) {
            message = (countdownMessage && countdownMessage(this._translate(time))) || this._translate(time);
        }
        return(
            <View style={[styles.container, containerStyle]}>
                <Text style={[styles.text,style]}>
                    {message}
                </Text>
            </View>


        );
    },
    _translate(time){
        if (time > 3600) {
            const totalMinute = parseInt(time / 60 );
            const day = parseInt(totalMinute / 60 / 24);
            const remainMinute = totalMinute - day * 60 * 24;
            const hour = parseInt(remainMinute / 60);
            const minute = totalMinute % 60;
            return `${day || ''}${day ? '天' : ''}${hour || ''}${hour ? '小时' : ''}${minute || ''}${minute ? '分' :''}`

        }
        if ( time<= 3600 && time > 0) {
            const second = time % 60;
            const minute = parseInt(time / 60);
            return `${minute || ''}${minute ? '分' : ''}${second || ''}${second ? '秒' : ''}`
        }
        return null;
        // return this.props.message || 'time is over'
    },
    _countdown() {
        var timer = function () {
            var time = this.state.time - (this.state.time <= 3600 ? 1 : 60);
            this.setState({time: time});
            if (time > 0) {
                this.setTimeout(timer, this.state.time <= 3600 ? 1000 : 60000);
                // this.setTimeout(timer, 1000);
            } else {
                // this.setState({disabled: false});
                this.props.onEnd && this.props.onEnd();
                // this.setState({time: this.props.time ? this.props.time : 60});
            }
        };
        this.setTimeout(timer, this.state.time <= 3600 ? 1000 : 60000);
    },
    componentDidUnMount() {
    }
});


const styles = StyleSheet.create({
    container: {					// 容器样式
        justifyContent: 'center',
        height:36,
        backgroundColor: '#f9f9f9',
    },
    text: {							// 字体样式
        fontSize: 12,
        color: Color.main,
        textAlign: 'center',
    },
});

module.exports = FloatingBar;