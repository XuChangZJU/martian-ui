/**
 * Created by Hey on 2016/7/7.
 */
import React, {Component, PropTypes} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, RefreshControl } from 'react-native';
import { MtLabel } from './Text';

class Empty extends Component {
    render() {
        const { onRefresh, desc, refreshing } = this.props;
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={{ flex: 1 }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing || false}
                        onRefresh={onRefresh}
                        // colors={[MtColor.main]}
                        // progressBackgroundColor="white"
                        // tintColor={MtColor.main}
                        // title={loadMyOrderPayListIsFetching ? '刷新中' : '下拉刷新'}
                    />}
            >

                <Image source={require('./images/logo.png')}/>
                <MtLabel style={styles.text}>{desc}</MtLabel>
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
        paddingBottom: 140,
        flex: 1,
        // height: 100,
        // borderWidth: 1,
    },
    text: {
        marginTop: 10,
        fontSize: 20,
        color: 'red',
        textAlign: 'center',
    },
});
