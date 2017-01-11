/**
 * Created by lavystord on 17/1/1.
 */
import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    Navigator,
    Animated,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
    TouchableWithoutFeedback
} from 'react-native';
const UIExplorerBlock = require('UIExplorerBlock');
const UIExplorerPage = require('UIExplorerPage');
const UIExplorerTitle = require('UIExplorerTitle');
const PopupView = require('martian-ui').MtPopupView;
const Edit = require('martian-ui').MtEdit;



const PopupViewExample = React.createClass({
    statics: {
        title: 'MtPopupView',
        description: 'a view popup from the bottom',
    },
    getInitialState() {
        return {
            disable: false,
            scale: new Animated.Value(1),
        }
    },
    open() {
        this.state.scale.setValue(1);
        Animated.timing(this.state.scale, { toValue: 0.9}).start()
    },
    close() {
        // Animated.timing(this.state.scale, { toValue: 1}).start()
        this.state.scale.setValue(1);
    },
    render() {
        // const ABUIExplorerPage = Animated.createAnimatedComponent(UIExplorerPage);
        return (
            <UIExplorerPage containerStyle={{ transform: [{scale: this.state.scale}]}} noScroll={true}>
                <UIExplorerBlock title="Default MtPopupView">
                    <Button
                        title="open PopupView1"
                        onPress={() => {this.popupView1.open(); this.open();}}
                    />
                </UIExplorerBlock>
                <UIExplorerBlock title="MtPopupView contains lots of children">
                    <Button
                        title="open PopupView2"
                        onPress={() => {this.popupView2.open()}}
                    />
                </UIExplorerBlock>
                <UIExplorerBlock title="MtPopupView includes input">
                    <Button
                        title="open PopupView3"
                        onPress={() => {this.popupView3.open()}}
                    />
                </UIExplorerBlock>
                <PopupView
                    ref={(popupView) => this.popupView1 = popupView }
                    onClose={this.close}
                >
                    <View style={[styles.box,{ marginTop:50}]}>
                        <Text style={styles.text}>Box One</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text}>Box Two</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text}>Box Three</Text>
                    </View>
                    <Button onPress={() => { this.setState({disable:!this.state.disable})}}
                            title="hello world"
                            color={ this.state.disable ? 'red' : 'navy'}
                    />
                </PopupView>
                <PopupView
                    ref={(popupView) => this.popupView2 = popupView }
                >
                    <ScrollView>
                    <View style={styles.box}>
                        <Text style={styles.text}>Box One</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text}>Box Two</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text}>Box Three</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text}>Box Four</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text}>Box Five</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text}>Box Six</Text>
                    </View>
                    </ScrollView>
                </PopupView>
                <PopupView
                    ref={(popupView) => this.popupView3 = popupView }
                >
                    <Text style={styles.title}>
                        This is title
                    </Text>

                    <ScrollView ref="scroll">
                    <View style={styles.box}>
                        <Text style={styles.text}>Box One</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text}>Box Two</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text}>Box Three</Text>
                    </View>
                    <Edit
                        title="count"
                        placeholder="type your choice"
                        keyboardType="numeric"
                        onFocus={() => {
                            this.refs.scroll.scrollTo({ y:0, animated: true})
                        }}
                        onBlur={() => {this.refs.scroll.scrollTo({ y: 0, animated: false})}}
                    />
                    </ScrollView>
                </PopupView>
            </UIExplorerPage>
        );
    }
});

const styles = StyleSheet.create({
    title: {
        height: 20,
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 16,

    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 30,
    },
    button: {
        backgroundColor: '#ccc',
        borderRadius: 5,
        padding: 10
    },
    close: {
        position: 'absolute',
        right: 20,
        top: 40,
        zIndex: 2,
        backgroundColor: 'red'
    },
    popupViewContainer: {
        height: 100,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    box: {
        height: 100,
        backgroundColor: 'deepskyblue',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    text: {
        color: '#fff'
    },
});

module.exports = PopupViewExample;

