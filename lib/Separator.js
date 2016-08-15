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
        let style = {};
        style.height = this.props.height || 1;
        style.backgroundColor = this.props.color || '#e8e8e8';
        return (
            <View
                style={[style]}
            />
        );
    }

}

/*const styles = StyleSheet.create( {
 separator:{
 height:1,
 backgroundColor:'rgba(0, 0, 0, 0.1)'
 }

 });*/

module.exports = Separator;