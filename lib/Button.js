import React, { Component } from "react";
import { StyleSheet, Dimensions } from "react-native";
import Button from "react-native-button";
import assign from "lodash/assign";

const styles = {
    container: {					// 大蓝按钮容器样式
        margin: 20,
        justifyContent: 'center',
        height:42,
        borderRadius: 2,
        // borderRadius:4
    },
    containerColor:{
        backgroundColor:'#ff8b4b',
        // backgroundColor:'green'
    },
    containerColorDisabled:{
        backgroundColor: '#929292',
    },
    text: {
        fontSize: 18,
        // fontSize: normalize(18),
    },
    textColor: {
        color: 'white',
    },
    textColorDisabled: {
        color: 'silver',
    },
};

class MtButton extends Component {

    render() {
        const {disabled ,style, containerStyle, ...props} = this.props;
        const containerStyle2 = assign({}, styles.container,(disabled)? styles.containerColorDisabled:styles.containerColor,containerStyle);
        const style2 = assign({}, styles.text, styles.textColor, style);
        return (
            <Button
                containerStyle={containerStyle2}
                style={style2}
                disabled={disabled}
                { ...props }
            >

            </Button>
        );
    }
}


module.exports = MtButton;