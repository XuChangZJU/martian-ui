import React from "react";
import {Text} from "react-native";
import {MtTabBar} from "martian-ui";

export default React.createClass({
  render() {
    return <MtTabBar
      style={{marginTop: 20}}
      /*renderTabBar={() => <DefaultTabBar  */
    >
      <Text tabLabel='Tab #1'>My</Text>
      <Text tabLabel='Tab #2'>favorite</Text>
      <Text tabLabel='Tab #3'>project</Text>
    </MtTabBar>;
  },
});
