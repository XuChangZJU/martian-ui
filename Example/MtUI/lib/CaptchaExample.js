/**
 * Created by Bly on 2016/6/13.
 */
'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    Alert,
    StyleSheet,
    TouchableHighlight,
    Text,
    View,
} = ReactNative;

var Captcha = require('martian-ui').MtCaptcha;
import Button from 'react-native-button';

exports.title  = 'MtCaptcha';
exports.description = 'Base captcha.';
exports.examples = [
    {
        title: 'Plain captcha',
        description: 'Divide gray block with a white line',
        render: function () {
            return (
                <Captcha
                    text="发送验证码"
                    time={60}
                    disabled={false}
                    onPress={()=> { }}
                />
            );
            // return(
            //     <Button
            //         contentContainerStyle={{backgroundColor:'blue',height:50,margin:20,justifyContent:'center'}}
            //     >
            //         hello
            //     </Button>
            //     );

            
        },
    }

];