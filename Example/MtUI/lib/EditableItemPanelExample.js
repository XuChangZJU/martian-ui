/**
 * Created by Hey on 2016/7/26.
 */

import React, {Component, PropTypes} from "react";
import {Alert, StyleSheet, Text, TouchableOpacity, View} from "react-native";
const EditableItemPanel = require('martian-ui').MtEditableItemPanel;
// import { MtEditableItemPanel } from 'martian-ui';
const UIExplorerBlock = require('UIExplorerBlock');
const UIExplorerPage = require('UIExplorerPage');

const items = [];
for ( let i=0;i<10; i++) items.push({id:i,name:`name${i}` });

const EditableItemPanelExample = React.createClass({
  statics: {
    title: 'MtEditableItemPanel',
    description: 'basic panel component for display multiple items and edit each item',
  },

  getInitialState: function() {
    return {
      selected1: items,
      selected2: null,
      editable1: false,
    };
  },

  render() {
    return (
      <UIExplorerPage title="MtEditableItemPanel">
        <UIExplorerBlock title="Plain EditableItemPanel">
          <View style={{ paddingTop: 20}}>
            <EditableItemPanel
              items = {this.state.selected1}
              renderItem={renderItem}
              onSelect = {this.setSelectedValue.bind(this, 'selected1')}
              itemSize={75}
              onAdd={() => {alert('hello')}}
            >
            </EditableItemPanel>
          </View>
        </UIExplorerBlock>
        <UIExplorerBlock title="EditableItemPanel with editable item">
          <View style={{ paddingTop: 20}}>
            <TouchableOpacity onPress={() => {this.setState({editable1: !this.state.editable1,selected2:null}); }}>
              <View style={styles.button}>
                <Text>{this.state.editable1 ? 'finish': 'Edit Item'}</Text>
              </View>
            </TouchableOpacity>
            <EditableItemPanel
              items = {this.state.selected1}
              renderItem={renderItem}
              onSelect = {this.setSelectedValue.bind(this, 'selected2')}
              itemSize={75}
              editable={this.state.editable1}
              onAdd={() => {alert('hello')}}
            >
            </EditableItemPanel>
            <Text style={{marginTop:20}}>
              {`your last choice is: ${this.state.selected2 && this.state.selected2.name}`}
            </Text>
          </View>
        </UIExplorerBlock>
      </UIExplorerPage>
    );
  },

  setSelectedValue(key,value) {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  }
});

function renderItem(item,index,editable) {
  return (
  <TouchableOpacity onPress={() => {alert('click')}} disabled={editable} >
    <View style={styles.item}>
      <Text style={styles.text}>
        {item.name}
      </Text>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'red',
    height: 60,
    width: 60,
  },
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
});

module.exports = EditableItemPanelExample;
