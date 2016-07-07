/**
 * Created by Hey on 2016/7/7.
 */
import React, {Component, PropTypes} from "react";
import {StyleSheet, Text, View, Alert} from "react-native";

class Temp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Hello world,I'm back!
        </Text>
      </View>
    );
  }
}

module.exports = Temp;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'white',
    // flex: 1,
    height: 100,
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
  },
});
