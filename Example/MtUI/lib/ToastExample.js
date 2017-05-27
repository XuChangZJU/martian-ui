/**
 * Created by lavystord on 16/8/31.
 */

import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { MtToast } from 'martian-ui';

exports.title  = 'MtToast';
exports.description = 'Pure js toast component';
exports.examples = [
    {
        title: 'Plain MtToast',
        render: function () {
            return (
                <TouchableHighlight onPress={()=> {
                    MtToast.show('hello world');
                }}
                >
                    <Text style = { {height:30,justifyContent:'center',backgroundColor:'silver',textAlign:'center',fontSize:20}}>Show Toast</Text>
                </TouchableHighlight>
            );
        },
    },
];