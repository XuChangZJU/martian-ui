/**
 * Created by Bly on 2016/4/11.
 */
import { StyleSheet } from 'react-native';
import React, {Component} from 'react';
import Button from 'react-native-button';
var TimerMixin = require('react-timer-mixin');

var Captcha =React.createClass( {
    mixins: [TimerMixin],
    getInitialState: function () {
        return {
            time: this.props.time ? this.props.time : 60,
            disabled: false
        };
    },
    render() {
        var disabled = this.state.disabled ||this.props.disabled;
        return(

            <Button
                containerStyle={ [styles.container,(disabled)? styles.containerColorDisabled:styles.containerColor,this.props.containerStyle]}
                style={ [(disabled)? styles.textDisabled:styles.text,this.props.style] }
                disabled={disabled}
                onPress={this._onPress}>
                {this.state.disabled?`${this.state.time}s`:this.props.text}


            </Button>
        );
    },
    _onPress() {
        if (this.state.disabled) {
            //nothing
        } else {
            this.setState({disabled: true});
            this._countdown();
            if(this.props.onPress){
                this.props.onPress();
            }
        }
    },
    _countdown() {
        var timer = function () {
            var time = this.state.time - 1;
            this.setState({time: time});
            if (time > 0) {
                this.setTimeout(timer, 1000);
            } else {
                this.setState({disabled: false});
                this.setState({time: this.props.time ? this.props.time : 60});
            }
        };
        this.setTimeout(timer, 1000);
    }
});


const styles = StyleSheet.create({
    container: {					// 容器样式
        marginLeft: 18,
        marginRight: 18,
        marginTop: 5,
        marginBottom: 5,
        justifyContent: 'center',
        height:30,
        width: 80,
    },
    containerColor:{
        backgroundColor:'#f0f0f0',
        borderWidth: 1,
        borderColor: '#bdbdbd'
        // backgroundColor:'green'
    },
    containerColorDisabled:{
        backgroundColor: '#e0e0e0',
    },
    text: {							// 字体样式
        fontSize: 14,
        color: '#262626',
    },
    textDisabled: {							// 字体样式
        fontSize: 14,
        color: '#b4b4b4',
    },
});

module.exports = Captcha;