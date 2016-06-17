/**
 * Created by Bly on 2016/4/11.
 */
import React, {
    Component,
} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
class MtText extends Component {
    render() {
        return (
            <Text
                style={[styles.text,this.props.style]} {...this.props}>

            </Text>
        );
    }

}

const styles = StyleSheet.create( {
    text:{
        fontFamily: 'Cochin',
        fontSize: 20,
        fontWeight: 'bold',
    }

});

module.exports = MtText;