/**
 * Created by Hey on 2016/7/04.
 */
'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    Alert,
    StyleSheet,
    TouchableHighlight,
    Text,
    View,
} = ReactNative;

var MtNavBar = require('martian-ui').MtNavBar;

exports.title  = 'MtNavBar';
exports.description = 'NavBar is navigation bar.';
exports.examples = [
    {
        title: 'NavBar with title',
        render(): ReactElement {
            return (
              <MtNavBar pop = {()=> alert("hello")}
                        title = 'Title'
              />

            );
        },
    },
  {
    title:'NavBar with left backIcon',
    render():ReactElement {
      let leftItem = {
        // title: 'left',
        icon: require('./img/back_white.png'),
        onPress:() => {alert('go back')}
      };
      return (
        <MtNavBar
          title = 'hello world'
          leftItem={leftItem}
        >
        </MtNavBar>
      );
    }
  },
  {
    title:'NavBar with left Icon and right title',
    render():ReactElement {
      let leftItem = {
        icon: require('./img/back_white.png'),
        onPress:() => {alert('go back')},
      };
      let rightItem = {
        // icon: require('./img/settings_white.png'),
        title:'right',
        onPress:() => {alert('setting')}
      };
      return (
        <MtNavBar
          title = 'hello world'
          leftItem={leftItem}
          rightItem = {rightItem}
        >
        </MtNavBar>
      );
    }
  },
  {
    title:'NavBar with left and right Icon',
    render():ReactElement {
      let leftItem = {
        icon: require('./img/back_white.png'),
        onPress:() => {alert('go back')},
      };
      let rightItem = {
        icon: require('./img/settings_white.png'),
        onPress:() => {alert('setting')}
      };
      return (
        <MtNavBar
          title = 'hello world'
          leftItem={leftItem}
          rightItem = {rightItem}
        >
        </MtNavBar>
      );
    }
  },
  {
    title:'NavBar with custom element',
    render():ReactElement {
      let leftItem = {
        icon: require('./img/back_white.png'),
        onPress:() => {alert('go back')},
      };
      let rightItem = {
        icon: require('./img/settings_white.png'),
        onPress:() => {alert('setting')}
      };
      return (
        <MtNavBar
          leftItem={leftItem}
          rightItem = {rightItem}
        >
          <View
            style={ {backgroundColor:'gray',height:40,width:150}}
          >
          </View>
        </MtNavBar>
      );
    }
  },
  {
    title:'NavBar with custom component',
    render():ReactElement {
      let leftItem = {
        renderItem: () => (<Text style={{color: 'white'}}>hello</Text>),
        onPress:() => {alert('go back')},
      };
      let rightItem = {
        icon: require('./img/settings_white.png'),
        onPress:() => {alert('setting')}
      };
      return (
        <MtNavBar
          leftItem={leftItem}
          rightItem = {rightItem}
        >
        </MtNavBar>
      );
    }
  },

];