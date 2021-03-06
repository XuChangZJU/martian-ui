/**
 * Created by biliyuan on 16/6/21.
 */
import React, { Component } from "react";
import {StyleSheet, View, ScrollView, RefreshControl} from "react-native";
class MtContainer extends Component {

    scrollTo(options) {
        if(this.props.scroll) {
            this.wrapper.scrollTo(options);
        }
    }

    scrollToEnd(options) {
        if(this.props.scroll) {
            this.wrapper.scrollToEnd(options);
        }
    }

    render() {
        const {style, refreshing, onRefresh, ...wrapperProps} = this.props;
        let ContentWrapper;
        if (!this.props.scroll) {
            ContentWrapper = View;
        } else {
            ContentWrapper = ScrollView;
            wrapperProps.automaticallyAdjustContentInsets = !this.props.title;
            wrapperProps.keyboardShouldPersistTaps = 'handled';
            wrapperProps.keyboardDismissMode = 'interactive';
            wrapperProps.contentContainerStyle = this.props.contentContainerStyle;
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
                    ref={(temp) => this.wrapper = temp}
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