import React, {
    Component,
} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import Button from 'react-native-button';

class MtButton extends Component {

    render() {
        const {disabled} = this.props;
        return (
            <Button
                containerStyle={ [styles.container,(disabled)? styles.containerColorDisabled:styles.containerColor]}
                style={[styles.text,styles.textColor]}
                { ...this.props }
            >

            </Button>
        )

    }

}

const styles = StyleSheet.create( {
    container: {					// 大蓝按钮容器样式
        margin: 20,
        justifyContent: 'center',
        height:50,
        // borderRadius:4
    },
    containerColor:{
        backgroundColor:'#0079CC',
        // backgroundColor:'green'
    },
    containerColorDisabled:{
        backgroundColor: 'gray',
    },
    text: {
        fontSize: 20
    },
    textColor: {
        color: 'white',
    },
    textColorDisabled: {
        color: 'silver',
    },

});

module.exports = MtButton;