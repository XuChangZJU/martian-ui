/**
 * Created by Hey on 2016/7/7.
 */
import React, {Component, PropTypes} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, RefreshControl } from 'react-native';
import { MtL3 } from './Text';

class Empty extends Component {
    static defaultProps = {
        renderImage: () => <Image source={require('./images/logo.png')}/>
    };

    render() {
        const { onRefresh, desc, refreshing, textStyle, containerStyle } = this.props;
        return (
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{ flex: 1 }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing || false}
                        onRefresh={onRefresh}
                    />}
            >
                <View style={[styles.container,containerStyle]}>
                    {this.props.renderImage()}
                    <MtL3 style={[styles.text, textStyle]}>{desc}</MtL3>
                </View>
            </ScrollView>
        );
    }
}

module.exports = Empty;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
        flex: 1,
    },
    text: {
        // marginTop: 10,
        // fontSize: 20,
        textAlign: 'center',
    },
});