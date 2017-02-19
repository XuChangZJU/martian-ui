/**
 * Created by lavystord on 17/2/19.
 */

import React from 'react';
import { MtCall } from 'martian-ui';
import { Button } from 'react-native';
exports.title  = 'MtCall';
exports.description = 'call to given phone number ';
exports.examples = [
    {
        title: 'Plain Call',
        render: function () {
            return (
                <Button
                    title="call to 987654321"
                    onPress={() => {
                        MtCall.callTo('987654321');
                    }}
                />
            );
        },
    },
    {
        title: 'Call without prompt',
        render: function () {
            return (
                <Button
                    title="call to 987654321"
                    onPress={() => {
                        MtCall.callTo('987654321',false);
                    }}
                />
            );
        },
    },

];
