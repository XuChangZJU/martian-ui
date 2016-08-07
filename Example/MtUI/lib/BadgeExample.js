/**
 * Created by Hey on 2016/8/7.
 */
import React from "react";
const Badge = require('martian-ui').MtBadge;

exports.title  = 'MtBadge';
exports.description = 'specific component for displaying the number of messages , updates and so on';
exports.examples = [
  {
    title: 'Plain Badge with one digit',
    render: function () {
      return (
        <Badge
          number={5}
        >
        </Badge>
      );
    }
  },
  {
    title: 'Plain Badge with ten digit',
    render: function () {
      return (
        <Badge
          number={88}
        >
        </Badge>
      );
    }
  },
  {
    title: 'Plain Badge with hundred digit',
    render: function () {
      return (
        <Badge
          number={112}
        >
        </Badge>
      );
    }
  },
  {
    title: 'Badge with custom style',
    render: function () {
      return (
        <Badge
          number={50}
          containerStyle={{backgroundColor: 'green'}}
        >
        </Badge>
      );
    }
  },

];