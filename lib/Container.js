/**
 * Created by biliyuan on 16/6/21.
 */
/**
 * Created by Bly on 2016/4/11.
 */
import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
class MtContainer extends Component {
  const {style,...props} =this.props;
    render() {
        return (
            <View
                style={[styles.container,style]} {...props}>
            </View>
        );
    }

}

const styles = StyleSheet.create( {
    container:{
        flex:1,
        backgroundColor: 'whitesmoke'
    }

});

module.exports = MtContainer;