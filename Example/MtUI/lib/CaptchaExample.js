/**
 * Created by Bly on 2016/6/13.
 */
'use strict';

var React = require('react');

var Captcha = require('martian-ui').MtCaptcha;

exports.title  = 'MtCaptcha';
exports.description = 'Captcha is used to send message.';
exports.examples = [
    {
        title: 'Plain captcha',
        description: '没啥可描述的',
        render: function () {
            return (
                <Captcha
                    text="发送验证码"
                    time={60}
                    disabled={false}
                    onPress={()=> { }}
                />
            );
        },
    }

];