/**
 * Created by Hey on 2016/7/11.
 */
var React = require('react');
var ReactNative = require('react-native');
var {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = ReactNative;

var StateFlow = require('martian-ui').MtStateFlow;

exports.title  = 'MtStateFlow';
exports.description = 'Basic Component for displaying state flow';
exports.examples = [
  {
    title: 'Plain StateFlow',
    render: function () {
      return (
        <StateFlow
          states={['关联智能门锁','上传房屋证件','填写信息','填写出租需求']}
          current={1}
        >
        </StateFlow>
      );
    }
  },

];
