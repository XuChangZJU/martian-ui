/**
 * Created by Hey on 2016/8/7.
 */
import React, {Component, PropTypes} from "react";
import {StyleSheet, View, Text} from "react-native";

class Badge extends Component {

  render() {
    const { number, containerStyle,style } = this.props;
    let digit = typeof number === 'number' ? number : parseInt(number);
    return digit > 0 && (
      <View
        style={[styles.common,digit > 9 ? styles.tens : styles.ones,containerStyle]}
      >
        <Text
          style={[styles.text,style]}
        >
          {digit > 99 ? '···' : digit }
        </Text>
      </View>
    );

  }

}

module.exports = Badge;

Badge.propTypes = {
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

const styles = StyleSheet.create({
  common: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  ones: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  tens: {
    height: 20,
    width: 30,
    borderRadius: 10,
  },
  text: {
    color: 'white'
  }

});


