/**
 * Created by Hey on 2016/7/11.
 */
var React = require('react');
var ReactNative = require('react-native');
var {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = ReactNative;

var StateFlow = require('martian-ui').MtStateFlow;

const UIExplorerBlock = require('UIExplorerBlock');
const UIExplorerPage = require('UIExplorerPage');


const StateFlowExample = React.createClass({
  statics: {
    title: 'MtStateFlow',
    description: 'Basic Component for displaying state flow',
  },


  render() {
    return (
        <UIExplorerPage title="MtStateFlow">
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              Plain StateFlow
            </Text>
          </View>
          <StateFlow
              states={['关联智能门锁','上传房屋证件','填写信息','填写出租需求']}
              current={1}
          />
        </UIExplorerPage>
    );
  },

});

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center'
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#eeeeee',
    padding: 10,
    marginBottom: 10,
  },
  titleContainer: {
    borderBottomWidth: 0.5,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 2.5,
    borderBottomColor: '#d6d7da',
    backgroundColor: '#f6f7f8',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 14,
    fontWeight: '500',
  },
});

module.exports = StateFlowExample;

