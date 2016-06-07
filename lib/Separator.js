/**
 * Created by Hey on 2016/4/11.
 */
import React, {
    Component,
} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
class Separator extends Component {
    render() {
        return (
            <View
                style={[styles.separator,this.props.style]}
            />
        );
    }

}

const styles = StyleSheet.create( {
    separator:{
        height:1,
        backgroundColor:'rgba(0, 0, 0, 0.1)'
    }

});

module.exports = Separator;