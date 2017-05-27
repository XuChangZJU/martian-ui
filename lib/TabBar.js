/**
 * Created by Hey on 2016/6/30.
 */
import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import  {  StyleSheet, Text, View, Animated, ViewPropTypes } from 'react-native';
import Touchable from './Touchable';
import { main as mainColor } from '../utils/color';

const DefaultTabBar = React.createClass({
    propTypes: {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.arrayOf(React.PropTypes.string),
        backgroundColor: React.PropTypes.string,
        activeTextColor: React.PropTypes.string,
        inactiveTextColor: React.PropTypes.string,
        textStyle: Text.propTypes.style,
        tabStyle: ViewPropTypes.style,
        renderTab: React.PropTypes.func,
        underlineStyle: ViewPropTypes.style,
    },

    getDefaultProps() {
        return {
            activeTextColor: mainColor,
            inactiveTextColor: 'black',
            backgroundColor: 'white',
        };
    },

    renderTabOption(name, page) {
    },

    renderTab(name, page, isTabActive, onPressHandler) {
        const { activeTextColor, inactiveTextColor, textStyle } = this.props;
        const textColor = isTabActive ? activeTextColor : inactiveTextColor;
        const fontWeight = isTabActive ? 'bold' : 'normal';

        return (
            <Touchable
                style={{ flex: 1 }}
                key={name}
                accessible={true}
                accessibilityLabel={name}
                accessibilityTraits="button"
                onPress={() => onPressHandler(page)}
            >
                <View style={[styles.tab, this.props.tabStyle]}>
                    <Text style={[{ color: textColor, fontWeight }, textStyle]}>
                        {name}
                    </Text>
                </View>
            </Touchable>
        );
    },

    render() {
        const containerWidth = this.props.containerWidth;
        const numberOfTabs = this.props.tabs.length;
        const tabUnderlineStyle = {
            position: 'absolute',
            width: containerWidth / numberOfTabs,
            height: 4,
            backgroundColor: mainColor,
            bottom: 0,
        };

        const left = this.props.scrollValue.interpolate({
            inputRange: [0, 1], outputRange: [0, containerWidth / numberOfTabs],
        });
        return (
            <View style={[styles.tabs, { backgroundColor: this.props.backgroundColor }, this.props.style]}>
                {this.props.tabs.map((name, page) => {
                    const isTabActive = this.props.activeTab === page;
                    const renderTab = this.props.renderTab || this.renderTab;
                    return renderTab(name, page, isTabActive, this.props.goToPage);
                })}
                <Animated.View style={[tabUnderlineStyle, { left }, this.props.underlineStyle]} />
            </View>
        );
    },
});

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
    },
    tabs: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 0,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },
});

class MtTabBar extends Component {

    static defaultProps = {
        renderTabBar: () => <DefaultTabBar/>
    };

    goToPage(num) {
        this.tab.goToPage(num);
    }

  render() {
    return (
      <ScrollableTabView
          ref={(tab) => this.tab = tab}
            {...this.props}
      >
        
      </ScrollableTabView>
    );
  }
}



module.exports = MtTabBar;