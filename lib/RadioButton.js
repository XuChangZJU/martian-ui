/**
 * Created by Hey on 2016/7/14.
 */
import React, {Component, PropTypes} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MtIcon from 'martian-icon';
import Color from '../utils/color';
import { RadioButtons } from 'react-native-radio-buttons';

class RadioButton extends Component {

  render() {
    const {renderOption, renderContainer, onSelect, transformOption, testOptionEqual, ...props} = this.props;
    // ((option, selected, onSelection, index) => {return this.defaultRenderOption(option, selected, onSelection, index,mapOption);})
    return (
        <RadioButtons
            renderOption={ renderOption || this.defaultRenderOption.bind(this,transformOption)}
            renderContainer={ renderContainer || this.defaultRenderContainer}
            onSelection={onSelect}
            testOptionEqual={testOptionEqual && ((a,b) => {return a && testOptionEqual(a,b)})}
            { ...props }
        />
    );
  }

  defaultRenderOption(mapOption, option, selected, onSelect, index) {

    let checkMark = selected ?
        <Icon name="ios-checkmark" size={30} color={Color.main} />
        : null;
    const item = mapOption ? mapOption(option) : option;
    return (
        <TouchableHighlight
            onPress={onSelect}
            key={index}
        >
          <View style={[styles.baseStyle, index ? styles.basePlusStyle: null]}>
            <Text style={styles.textStyle}>{item}</Text>
            {checkMark}
          </View>
        </TouchableHighlight>
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
    // paddingLeft: 20,
    // borderTopWidth: 1,
    // borderTopColor: '#cccccc',
    // borderBottomWidth: 1,
    // borderBottomColor: '#cccccc',
  },
  textStyle: {
    // paddingTop: 10,
    // paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    color: 'black',
    flex: 1,
    fontSize: 14,
  },
  baseStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 20,
    backgroundColor: 'white',
    // height: 30,
    // height: 60,
  },
  basePlusStyle: {
    borderTopColor: '#eeeeee',
    borderTopWidth: 1,
    // borderWidth: 1
  },
});

RadioButton.propTypes = {
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

module.exports = RadioButton;
    