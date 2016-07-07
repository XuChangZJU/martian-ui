/**
 * Created by Hey on 2016/7/7.
 */
import React from "react";
import {Text} from "react-native";
var CircleView = require('martian-ui').MtCircleView;

exports.title  = 'MtCircleView';
exports.description = 'CircleView for profile and so on';
exports.examples = [
  {
    title: 'Plain CircleView',
    render: function () {
      return (
        <CircleView
          size={50}
        >
        </CircleView>
      );
    }
  },
  {
    title: 'Plain with view style',
    render: function () {
      return (
        <CircleView
          style={{borderColor:'black',borderWidth:2}}
          size={50}
        >
        </CircleView>
      );
    }
  },
  {
    title: 'CircleView with custom backgroundColor',
    render: function () {
      return (
        <CircleView
          size={50}
          color="green"
        >
        </CircleView>
      );
    }
  },
  {
    title: 'CircleView with custom children',
    render: function () {
      return (
        <CircleView
          size={50}
        >
          <Text> hello</Text>
        </CircleView>
      );
    }
  },

];