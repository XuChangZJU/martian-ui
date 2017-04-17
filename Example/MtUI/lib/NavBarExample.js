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

const UIExplorerBlock = require('UIExplorerBlock');
const UIExplorerPage = require('UIExplorerPage');
import MtIcon from 'martian-icon';
var MtNavBar = require('martian-ui').MtNavBar;
//
// exports.title  = 'MtNavBar';
// exports.description = 'NavBar is navigation bar.';
// exports.examples = [
//     {
//         title: 'NavBar with title',
//         render(): ReactElement {
//             return (
//               <MtNavBar pop = {()=> alert("hello")}
//                         title = 'Title'
//               />
//
//             );
//         },
//     },
//   {
//     title:'NavBar with left backIcon',
//     render():ReactElement {
//       let leftItem = {
//         // title: 'left',
//         icon: require('./img/back_white.png'),
//         onPress:() => {alert('go back')}
//       };
//       return (
//         <MtNavBar
//           title = 'hello world'
//           leftItem={leftItem}
//         >
//         </MtNavBar>
//       );
//     }
//   },
//   {
//     title:'NavBar with left Icon and right title',
//     render():ReactElement {
//       let leftItem = {
//         icon: require('./img/back_white.png'),
//         onPress:() => {alert('go back')},
//       };
//       let rightItem = {
//         // icon: require('./img/settings_white.png'),
//         title:'right',
//         onPress:() => {alert('setting')}
//       };
//       return (
//         <MtNavBar
//           title = 'hello world'
//           leftItem={leftItem}
//           rightItem = {rightItem}
//         >
//         </MtNavBar>
//       );
//     }
//   },
//   {
//     title:'NavBar with left and right Icon',
//     render():ReactElement {
//       let leftItem = {
//         icon: require('./img/back_white.png'),
//         onPress:() => {alert('go back')},
//       };
//       let rightItem = {
//         icon: require('./img/settings_white.png'),
//         onPress:() => {alert('setting')}
//       };
//       return (
//         <MtNavBar
//           title = 'hello world'
//           leftItem={leftItem}
//           rightItem = {rightItem}
//         >
//         </MtNavBar>
//       );
//     }
//   },
//   {
//     title:'NavBar with custom element',
//     render():ReactElement {
//       let leftItem = {
//         icon: require('./img/back_white.png'),
//         onPress:() => {alert('go back')},
//       };
//       let rightItem = {
//         icon: require('./img/settings_white.png'),
//         onPress:() => {alert('setting')}
//       };
//       return (
//         <MtNavBar
//           leftItem={leftItem}
//           rightItem = {rightItem}
//         >
//           <View
//             style={ {backgroundColor:'gray',height:40,width:150}}
//           >
//           </View>
//         </MtNavBar>
//       );
//     }
//   },
//   {
//     title:'NavBar with custom component',
//     render():ReactElement {
//       let leftItem = {
//         renderItem: () => (<Text style={{color: 'blue'}}>hello</Text>),
//         onPress:() => {alert('go back')},
//       };
//       let rightItem = {
//         icon: require('./img/settings_white.png'),
//         onPress:() => {alert('setting')}
//       };
//       return (
//         <MtNavBar
//           leftItem={leftItem}
//           rightItem = {rightItem}
//         >
//         </MtNavBar>
//       );
//     }
//   },
//
// ];


const NavBarExample = React.createClass({
  statics: {
    title: 'MtNavBar',
    description: 'NavBar is navigation bar',
  },


  render() {
    let leftItem1 = {
        // title: 'left',
        image: require('./img/back_black.png'),
        onPress:() => {alert('go back')}
      };

    let leftItem2 = {
        image: require('./img/back_black.png'),
        onPress:() => {alert('go back')},
      };
      let rightItem2 = {
        title:'添加',
        onPress:() => {alert('setting')}
      };

    let leftItem3 = {
        icon:{
            name: 'back',
            group: 'core'
        },
        iconColor: 'red',
        onPress:() => {alert('go back')},
      };
      let rightItem3 = {
        icon: {
            name: 'add',
            group: 'core',
            strokeWidth: 1,
            color: 'red'
        },
        onPress:() => {alert('setting')}
      };

    let leftItem4 = {
        renderItem: () => (<MtIcon group='core' name="back" size={25} color="green"/>),
        onPress:() => {alert('go back')},
    };
    let rightItem4 = {
        renderItem: () => (<Text style={{color: 'blue'}}>hello</Text>),
        onPress:() => {alert('setting')}
    };


    return (
        <UIExplorerPage title="MtNavBar">
          <UIExplorerBlock
              title="statusBarHeight"
          >
              <Text
                  style={{textAlign: 'center'}}
              >
                  {MtNavBar.statusBarHeight}
              </Text>
          </UIExplorerBlock>
            <UIExplorerBlock
              title="NavBar with title"
              containerStyle={ {backgroundColor: 'black'}}
          >
              <MtNavBar
                  pop = {()=> alert("hello")}
                  title = 'Title'
              />
          </UIExplorerBlock>
          <UIExplorerBlock
              title="NavBar with left back image"
              containerStyle={ {backgroundColor: 'black'}}
          >
              <MtNavBar
                  title='hello world'
                  leftItem={leftItem1}
              />
          </UIExplorerBlock>
          <UIExplorerBlock
              title="NavBar with left image and right title"
              containerStyle={ {backgroundColor: 'black'}}
          >
              <MtNavBar
                  title = 'hello world'
                  leftItem={leftItem2}
                  rightItem={rightItem2}
              />
          </UIExplorerBlock>
            <UIExplorerBlock
              title="NavBar with left image and right title with dark foreground"
          >
              <MtNavBar
                  title = 'hello world'
                  leftItem={leftItem2}
                  style={{backgroundColor: 'black'}}
                  rightItem={rightItem2}
                  foreground="dark"
              />
          </UIExplorerBlock>
          <UIExplorerBlock
              title="NavBar with left and right Icon"
              containerStyle={ {backgroundColor: 'black'}}
          >
            <MtNavBar
                title = 'hello world'
                leftItem={leftItem3}
                rightItem = {rightItem3}
            >
            </MtNavBar>
          </UIExplorerBlock>
          <UIExplorerBlock
              title="NavBar with custom element"
              containerStyle={ {backgroundColor: 'black'}}
          >
            <MtNavBar
              leftItem={leftItem3}
              rightItem = {rightItem3}
            >
              <View
                style={ {backgroundColor:'gray',height:40,width:150}}
              >
              </View>
            </MtNavBar>
          </UIExplorerBlock>
          <UIExplorerBlock
              title="NavBar with custom component"
              containerStyle={ {backgroundColor: 'black'}}
          >
            <MtNavBar
              leftItem={leftItem4}
              rightItem = {rightItem4}
            >
            </MtNavBar>
          </UIExplorerBlock>
        </UIExplorerPage>
    );
  },

});

module.exports = NavBarExample;