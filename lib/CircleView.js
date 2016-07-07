/**
 * Created by Hey on 2016/7/7.
 */
import React, {Component, PropTypes} from "react";
import {View, Alert} from "react-native";

class CircleView extends Component {
  render() {
    const {size, color,style,...props} = this.props;
    return (
      <View style={ [{justifyContent:'center',alignItems:'center'},style,{ height: size, width: size, borderRadius: size*0.5, backgroundColor: color || 'red'}]}
        {...props}
      />

    );
  }
}

module.exports = CircleView;