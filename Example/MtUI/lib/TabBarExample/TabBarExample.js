/**
 * Created by Hey on 2016/6/30.
 */

import React from "react";
import {StyleSheet, View, Navigator} from "react-native";
import {MtButton, MtTabBar} from "martian-ui";
import SimpleExample from "./SimpleExample";
import OverlayExample from "./OverlayExample";
import FacebookExample from "./FacebookExample";
import DynamicExample from "./DynamicExample";

var Sample = React.createClass({
  statics: {
    title: 'MtTabBar',
    description: 'Tabbed navigation that you can swipe between, each tab can have its own ScrollView and maintain its own scroll position between swipes.'
  },

  render() {
    return <Navigator
      style={{flex: 1 }}
      initialRoute={{}}
      renderScene={this.renderScene}
    />;
  },

  renderScene(route, nav) {
    switch (route.id) {
      case 'simple':
        return <SimpleExample />;
      case 'overlay':
        return <OverlayExample />;
      case 'facebook':
        return <FacebookExample />;
      case 'dynamic':
        return <DynamicExample />;
      default:
        return <View style={styles.container}>
          <MtButton
            onPress={() => nav.push({id: 'simple', })}
          >
            Simple example
          </MtButton>

          <MtButton
            onPress={() => nav.push({id: 'overlay', })}
          >
            Overlay example
          </MtButton>

          <MtButton
            onPress={() => nav.push({id: 'facebook', })}
          >
            Facebook tabs example
          </MtButton>

          <MtButton
            onPress={() => nav.push({id: 'dynamic', })}
          >
            Dynamic tabs example
          </MtButton>
        </View>;
    }
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