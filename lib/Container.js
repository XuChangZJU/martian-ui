/**
 * Created by biliyuan on 16/6/21.
 */
import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
class MtContainer extends Component {
  render() {
    const {style,...props} =this.props;
    return (
      <View
        style={[styles.container,style]} {...props}>
      </View>
    );
  }

}

const styles = StyleSheet.create( {
  container:{
    flex:1,
    backgroundColor: 'whitesmoke'
  }

});

module.exports = MtContainer;