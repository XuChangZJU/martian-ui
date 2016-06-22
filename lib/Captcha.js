/**
 * Created by Bly on 2016/4/11.
 */
import {
    Image,
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    TouchableWithoutFeedback
} from 'react-native';
import React,{Component} from 'react';
import Button from 'react-native-button';
var TimerMixin = require('react-timer-mixin');
var mixins = [TimerMixin];

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
                containerStyle={ [disabled  ? styles.btnLargeBlueContainerDisabled :styles.btnLargeBlueContainer,this.props.containerStyle]}
                style={ [styles.btnLargeBlueText,this.props.style] }
                disabled={disabled }
                onPress={this._onPress}>
                {this.state.disabled?this.state.time:this.props.text}


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
    text:{
        color:'black'
    },
    wrapper: {
        padding:10,
        marginRight:10,
        backgroundColor:'#e5e5e5'
    },
    btnLargeBlueContainer: {					// 大蓝按钮容器样式
        margin: 20,
        justifyContent: 'center',
        height:50,
        backgroundColor:'#0079CC'
    },
    btnLargeBlueContainerDisabled: {            // 大蓝按钮不可用状态下的容器样式
        backgroundColor: 'gray',
        margin: 20,
        justifyContent: 'center',
        height:50,
    },
    btnLargeBlueText: {							// 大蓝按钮字体样式
        color: 'white',
        fontSize: 20
    },
});

module.exports = Captcha;