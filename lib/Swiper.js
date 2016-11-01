/**
 * Created by Hey on 2016/8/8.
 */
import React, {Component, PropTypes} from "react";
import {StyleSheet, View} from "react-native";
import Swiper from "react-native-swiper";
import Color from '../utils/color';

class MtSwiper extends Component {
  render() {
    const { dot,activeDot,dotStyle,activeDotStyle, ...props} = this.props;
    return (
      <Swiper
        dot={<View style={[styles.dot, dotStyle]} />}
        activeDot={<View style={[styles.activeDot,activeDotStyle]} />}
        {...props}
      />
    );
  }

}

const styles = StyleSheet.create({
  dot: {
    backgroundColor:'rgba(0,0,0,.2)',
    width: 5,
    height: 5,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    // backgroundColor: '#007aff',
    backgroundColor: Color.main,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  }
});

module.exports = MtSwiper;
