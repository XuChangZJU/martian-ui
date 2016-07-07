/**
 * Created by Hey on 2016/7/7.
 */
'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = ReactNative;

var MtEmptyView = require('martian-ui').MtEmptyView;

var Sample = React.createClass({
  statics: {
    title: 'MtEmptyView',
    description: 'Empty view in ListView when network request hasn\'t done',
  },

  render() {
    return <MtEmptyView
    />;
  },

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
  },
});

module.exports = Sample;