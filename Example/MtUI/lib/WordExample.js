/**
 * Created by lavystord on 16/11/28.
 */

import React from 'react';
import { MtWord } from 'martian-ui';

exports.title  = 'MtWord';
exports.description = 'MtWord is a word with a circle view ';
exports.examples = [
    {
        title: 'Plain Word',
        render: function () {
            return (
                <MtWord>
                   我
                </MtWord>
            );
        },
    },
    {
        title: 'Custom Size Word',
        render: function () {
            return (
                <MtWord
                    size={40}
                >
                   好
                </MtWord>
            );
        },
    },
    {
        title: 'Custom Color Word',
        render: function () {
            return (
                <MtWord
                    color="#007aff"
                >
                   帅
                </MtWord>
            );
        },
    },

];
