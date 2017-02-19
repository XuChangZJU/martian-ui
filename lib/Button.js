import React, { Component } from "react";
import { StyleSheet, Dimensions } from "react-native";
import Button from "react-native-button";

class MtButton extends Component {

    render() {
        const {disabled ,style, containerStyle, ...props} = this.props;
        return (
            <Button
                containerStyle={ [styles.container,(disabled)? styles.containerColorDisabled:styles.containerColor,containerStyle]}
                style={[styles.text,styles.textColor,style]}
                disabled={disabled}
                { ...props }
            >

            </Button>
        )

    }

}


const styles = StyleSheet.create( {
    container: {					// 容器样式
        marginLeft: 15,
        marginRight: 15,
        marginTop: 38,
        marginBottom: 38,
        justifyContent: 'center',
        height: 50,
        borderRadius: 2,
        // borderRadius:4
    },
    containerColor:{
        backgroundColor:'#ff630e',
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

});

module.exports = MtButton;