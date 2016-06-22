/**
 * Created by biliyuan on 16/6/21.
 */
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
class MtContainer extends Component {
    render() {
        return (
            <View
                style={[styles.container,this.props.style]} {...this.props}>

            </View>
        );
    }

}

const styles = StyleSheet.create( {
    container:{
        flex:1,
        backgroundColor: 'white'
    }

});

module.exports = MtContainer;