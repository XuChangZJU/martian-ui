/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Separator} from 'martian-ui';
// const Separator = require('../../lib/Separator');
class MtUI extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.instructions}>
          To get started, edit index.aoid.js
        </Text>

        <View style={styles.welcome}>
        </View>
        <Separator/>
        <View style={styles.welcome2}>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    // backgroundColor: 'red',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  welcome2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MtUI', () => MtUI);
