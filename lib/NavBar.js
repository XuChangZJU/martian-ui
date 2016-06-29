/**
 * Created by biliyuan on 16/6/19.
 */
/**
 * Created by Bly on 2016/4/11.
 */
//todo 重构
import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
const Icon = require('react-native-vector-icons/MaterialIcons');
class BackBtn extends Component{
    render() {
        return (
            <Icon.Button name="arrow-back" size={30} color="white" underlayColor="teal" backgroundColor="transparent" style={{width: 40}} onPress={this.props.onClick}/>
        )
    }
}
class MtNavBar extends Component{
    render(){
        const hasBackBtn = (this.props.hasBackBtn !== undefined) ? this.props.hasBackBtn : true;
        const backBtn = hasBackBtn ?
            (this.props.backBtn ? this.props.backBtn : (
                <BackBtn onClick={this.props.pop}/>
            )) : (
            <View style={{width: 40}}/>
        );
        const rightIcon = this.props.rightIcon || (
                <View style={{width: 40}}/>
            );
        return (
            <View style={[styles.container, styles.navBar, this.props.style]}>
                {backBtn}
                <Text style={[styles.navBarTitle, this.props.titleStyle]}>{this.props.title}</Text>
                {rightIcon}
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    navBar: {
        height: 50,
        backgroundColor: 'black'
    },
    navBarTitle: {
        color: 'white',
        flex: 1,
        textAlign: 'center',
        fontSize: 20
    },

});

module.exports = MtNavBar;