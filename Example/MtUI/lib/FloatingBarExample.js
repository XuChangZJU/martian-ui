/**
 * Created by lavystord on 16/8/29.
 */
import React from 'react';
const UIExplorerBlock = require('UIExplorerBlock');
const UIExplorerPage = require('UIExplorerPage');
import { MtFloatingBar } from 'martian-ui';

const FloatingBarExample = React.createClass({
    statics: {
        title: 'MtFloatingBar',
        description: 'FloatingBar is used to display message with countdown feature',
    },
    getInitialState: function() {
        return {
        };
    },
    render() {
        return(
            <UIExplorerPage title="MtFloatingBar">
                <UIExplorerBlock title="deadline is 2 hours">
                    <MtFloatingBar
                        deadline={new Date().getTime()+ 1000 * 3600 *2 } //2 hours
                    />
                </UIExplorerBlock>
                <UIExplorerBlock title="deadline is one day and 61 minutes">
                    <MtFloatingBar
                        deadline={new Date().getTime()+ 1000 * 60 * ( 60 * 24 + 72) } //one day 61 minutes
                    />
                </UIExplorerBlock>
                <UIExplorerBlock title="deadline is 62 seconds">
                    <MtFloatingBar
                        deadline={new Date().getTime()+ 1000 * 62 } //62 seconds
                        message="countdown is over" //message when countdown is over
                    />
                </UIExplorerBlock>
                <UIExplorerBlock title="custom countdown message with valid deadline">
                    <MtFloatingBar
                        deadline={new Date().getTime()+ 1000 * 62 } //62 seconds
                        countdownMessage={(time) => `your time remains ${time}`}
                        message="count down is over" //message when countdown is over
                    />
                </UIExplorerBlock>
                <UIExplorerBlock title="custom countdown message with invalid deadline">
                    <MtFloatingBar
                        deadline={new Date().getTime() - 1000 * 62 } //-62 seconds
                        countdownMessage={(time) => `your time remains ${time}`}
                        message="count down is over" //message when countdown is over
                    />
                </UIExplorerBlock>
                <UIExplorerBlock title="when time is over,do something such as hiding FloatingBar">
                    {
                        !this.state.hide &&
                        <MtFloatingBar
                        deadline={new Date().getTime() + 1000 * 12 } //62 seconds
                        countdownMessage={(time) => `your time remains ${time}`}
                        message="count down is over" //message when countdown is over
                        onEnd={() => this.setState({hide: true})}
                        />
                    }
                </UIExplorerBlock>
                <UIExplorerBlock title="Static FloatingBar">
                    <MtFloatingBar
                        message='U receive a new message'
                    />
                </UIExplorerBlock>
            </UIExplorerPage>
            );
    }
});

module.exports = FloatingBarExample;
