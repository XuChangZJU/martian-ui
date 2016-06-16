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
                { ...this.props }
                disabled={disabledChange|| disabledGetCode}
                containerStyle={ (disabledChange|| disabledGetCode) ? GlobalStyle.btnLargeBlueContainerDisabled :GlobalStyle.btnLargeBlueContainer}
            >

            </Button>
        )

    }

}

const styles = StyleSheet.create( {
    btnLargeBlueContainerDisabled: {			// 大蓝按钮不可用状态下的容器样式
        backgroundColor: 'gray',
        margin: 20,
        justifyContent: 'center',
        height:50,
    },
    btnLargeBlueContainer: {					// 大蓝按钮容器样式
        margin: 20,
        justifyContent: 'center',
        height:50,
        backgroundColor:'#0079CC'
    },

 });

module.exports = MtButton;