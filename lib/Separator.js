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

    static defaultProps = {
        color: '#dddddd',
        height: 0.5,
    };

    render() {
        return (
            <View
                style={[this.props.style,{ backgroundColor:this.props.color, height:this.props.height }]}
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