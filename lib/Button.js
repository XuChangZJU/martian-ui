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

const scale = Dimensions.get('window').width / 320;

function normalize(size) {
    return Math.round(scale * size);
}

const styles = StyleSheet.create( {
    container: {					// 容器样式
        marginLeft: 18,
        marginRight: 18,
        marginTop: 38,
        marginBottom: 18,
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

});

module.exports = MtButton;