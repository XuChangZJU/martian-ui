/**
 * Created by Hey on 2016/7/14.
 */
import React, {Component, PropTypes} from "react";
import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {RadioButtons} from "react-native-radio-buttons";

class RadioButton extends Component {

  render() {
    const { renderOption, renderContainer,onSelect, ...props} = this.props;
    return (
      <RadioButtons
        renderOption={ renderOption || this.defaultRenderOption }
        renderContainer={ renderContainer || this.defaultRenderContainer}
        onSelection={onSelect}
        { ...props }
      />
    );
  }

  defaultRenderOption(option, selected, onSelect, index) {

    let checkMark = selected ?
      <Icon name="ios-checkmark" size={30} color="#007AFF"/>
      // <Text style={styles.checkMark}>
      //   ✓
      // </Text>
      : null;

    return (
      <TouchableWithoutFeedback onPress={onSelect} key={index}>
        <View style={[styles.baseStyle, index ? styles.basePlusStyle: null]}>
          <Text style={styles.textStyle}>{option}</Text>
          {checkMark}
        </View>
      </TouchableWithoutFeedback>
    );


  }

  defaultRenderContainer(options) {
    return (
      <View style={styles.container}>
        {options}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingLeft: 20,
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textStyle: {
    // paddingTop: 10,
    // paddingBottom: 10,
    marginTop:10,
    marginBottom: 10,
    color: 'black',
    flex: 1,
    fontSize: 14,
  },
  baseStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    // paddingRight: 5,
    // height: 30,
    // height: 60,
    // borderWidth: 1,
  },
  basePlusStyle:{
    borderTopColor: '#eeeeee',
    borderTopWidth: 1,
    // borderWidth: 1
  },
  checkMark: {
    flex: 0.1,
    color: '#007AFF',
    fontWeight: 'bold',
    paddingTop: 8,
    fontSize: 20,
    alignSelf: 'center',
  }
});

RadioButton.propTypes = {
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

module.exports = RadioButton;
    