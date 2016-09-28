/**
 * Created by Hey on 2016/7/26.
 */

import React, {Component, PropTypes} from "react";
import {Alert, StyleSheet, Text, TouchableOpacity, View, Dimensions} from "react-native";
const EditableItemPanel = require('martian-ui').MtEditableItemPanel;
// import { MtEditableItemPanel } from 'martian-ui';
const UIExplorerBlock = require('UIExplorerBlock');
const UIExplorerPage = require('UIExplorerPage');

const items = [];
for ( let i=0;i<10; i++) items.push({id:i,name:`name${i}` });

const WINDOW_WIDTH = Dimensions.get('window').width;
// const itemSize = 91;
const itemSize = (WINDOW_WIDTH -6) / 4;

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
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              Plain EditableItemPanel with non-editable
            </Text>
          </View>
            <EditableItemPanel
              items = {this.state.selected1}
              renderItem={renderItem}
              onClick = {(item)=>{alert(item.name)}}
              itemSize={itemSize}
              onAdd={() => {alert('hello')}}
            />
        <View style={{height:20}} />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            EditableItemPanel with custom editable item
          </Text>
        </View>
          <View style={{ paddingTop: 2}}>
            <TouchableOpacity onPress={() => {this.setState({editable1: !this.state.editable1,selected2:null}); }}>
              <View style={styles.button}>
                <Text>{this.state.editable1 ? 'finish': 'Edit Item'}</Text>
              </View>
            </TouchableOpacity>
            <EditableItemPanel
              items = {this.state.selected1}
              renderItem={renderItem}
              onClickInEditing = {this.setSelectedValue.bind(this, 'selected2')}
              itemSize={itemSize}
              editable={this.state.editable1}
              onAdd={() => {alert('hello')}}
            >
            </EditableItemPanel>
            <Text style={{marginTop:20}}>
              {`your last choice is: ${this.state.selected2 && this.state.selected2.name}`}
            </Text>
            <Text>
              {`your last choice status is: ${this.state.selected2 && this.state.selected2.selected}`}
            </Text>
          </View>
      </UIExplorerPage>
    );
  },

  setSelectedValue(key,value,index,selected) {
    const newState = {};
    value.selected=selected;
    newState[key] = value;
    this.setState(newState);
  }
});

function renderItem(item,index,editable) {
  return (
  // <TouchableOpacity onPress={() => {alert('click')}} disabled={editable} >
    <View style={styles.item}>
      <Text style={styles.text}>
        {item.name}
      </Text>
    </View>
    // </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'red',
    height: itemSize,
    width: itemSize,
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

module.exports = EditableItemPanelExample;
