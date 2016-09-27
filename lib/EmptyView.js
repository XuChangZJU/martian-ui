/**
 * Created by Hey on 2016/7/7.
 */
import React, {Component, PropTypes} from 'react';
import { StyleSheet, Text, View, Alert, Image } from 'react-native';

class Empty extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Image source={require('./images/logo.png')}/>
        </View>
    );
  }
}

module.exports = Empty;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    paddingBottom: 140,
    flex: 1,
    // height: 100,
    // borderWidth: 1,
  },
  text: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
  },
});
