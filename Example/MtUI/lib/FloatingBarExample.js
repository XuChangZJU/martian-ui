/**
 * Created by lavystord on 16/8/29.
 */
import React from 'react';
import { MtFloatingBar } from 'martian-ui';

exports.title  = 'MtFloatingBar';
exports.description = 'FloatingBar is used to display message with countdown feature';
exports.examples = [
    {
        title: 'Plain FloatingBar',
        render: function () {
            return (
                <MtFloatingBar
                    deadline={new Date().getTime()+ 1000 * 3600 *2 } //2 hours
                />
            );
        },
    },
    {
        title: 'Plain FloatingBar2',
        render: function () {
            return (
                <MtFloatingBar
                    deadline={new Date().getTime()+ 1000 * 60 * ( 60 * 24 + 72) } //one day 61 minutes
                />
            );
        },
    },
    {
        title: 'countdown FloatingBar',
        render: function () {
            return (
                <MtFloatingBar
                    deadline={new Date().getTime()+ 1000 * 62 } //62 seconds
                    message="countdown is over" //message when countdown is over
                />
            );
        },
    },
    {
        title: 'countdown FloatingBar with custom render message',
        render: function () {
            return (
                <MtFloatingBar
                    deadline={new Date().getTime()+ 1000 * 62 } //62 seconds
                    countdownMessage={(time) => `your time remains ${time}`}
                    message="count down is over" //message when countdown is over
                />
            );
        },
    },
    {
        title: 'Static FloatingBar',
        render: function () {
            return (
                <MtFloatingBar
                    message='U receive a new message'
                />
            );
        },
    },

];