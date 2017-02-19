import React from "react";
import {Text} from "react-native";
import TimerMixin from "react-timer-mixin";
import {MtTabBar} from "martian-ui";

export default React.createClass({
  mixins: [TimerMixin],

  getInitialState() {
    return {
      tabs: [],
    };
  },

  componentDidMount() {
    this.setTimeout(
      () => { this.setState({ tabs: [1, 2, 3, ], }); },
      100
    );
  },

  render() {
    return <MtTabBar
      style={{marginTop: 20, }}
    >
    {this.state.tabs.map((tab, i) => {
      return <Text tabLabel={`tab${i}`} key={i}>{`tab${i}`}</Text>
    })}
    </MtTabBar>;
  },
});
