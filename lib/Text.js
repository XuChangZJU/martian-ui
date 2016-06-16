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
class Text extends Component {
    render() {
        return (
            <Text
        style={[styles.text,this.props.style]}>
                {this.props.content}
            </Text>
    );
    }

}

const styles = StyleSheet.create( {
    text:{
        height:1,
        backgroundColor:'rgba(0, 0, 0, 0.1)'
    }

});

module.exports = ;