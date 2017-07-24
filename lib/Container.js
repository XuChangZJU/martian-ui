/**
 * Created by biliyuan on 16/6/21.
 */
import React, { Component } from "react";
import {StyleSheet, View, ScrollView, RefreshControl} from "react-native";
class MtContainer extends Component {

    render() {
        const {style, refreshing, onRefresh} = this.props;
        let ContentWrapper;
        let wrapperProps = {};
        if (!this.props.scroll) {
            ContentWrapper = View;
        } else {
            ContentWrapper = ScrollView;
            wrapperProps.automaticallyAdjustContentInsets = !this.props.title;
            wrapperProps.keyboardShouldPersistTaps = 'handled';
            wrapperProps.keyboardDismissMode = 'interactive';
            wrapperProps.refreshControl = onRefresh &&
                <RefreshControl
                    refreshing={refreshing || false}
                    onRefresh={onRefresh}
                />
        }
        const header = typeof this.props.renderHeader === 'function' ?
            this.props.renderHeader() :
            null;

        // return (
        //     <ContentWrapper
        //         style={[styles.container, style]}
        //         {...wrapperProps}>
        //         {
        //             this.props.children
        //         }
        //     </ContentWrapper>
        // );
        return (
            <View style={styles.container}>
                {header}
                <ContentWrapper
                    style={[styles.wrapper, style]}
                    {...wrapperProps}>
                    {
                        this.props.children
                    }
                </ContentWrapper>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'blue'
        backgroundColor: 'whitesmoke'
    },
    wrapper: {
        flex: 1,
        // paddingTop: 10,
    },

});

module.exports = MtContainer;