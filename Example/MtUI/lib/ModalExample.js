/**
 * Created by lavystord on 16/12/29.
 */
import React from "react";
import {
    Button,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
    TouchableWithoutFeedback
} from "react-native";
const UIExplorerBlock = require('UIExplorerBlock');
const UIExplorerPage = require('UIExplorerPage');
const Modal = require('martian-ui').MtModal;

const ModalExample = React.createClass({
    statics: {
        title: 'MtModal',
        description: 'plain modal that cover all views except RN Modal',
    },
    getInitialState() {
        return {
            disable: false,
        }
    },
    render() {
        return (
            <UIExplorerPage>
                <UIExplorerBlock title="Default MtModal">
                    <Button
                        title="open modal1"
                        onPress={() => {this.modal1.open()}}
                    />
                </UIExplorerBlock>
                <UIExplorerBlock title="Custom Style MtModal">
                    <Button
                        title="open modal2"
                        onPress={() => {this.modal2.open()}}
                    />
                </UIExplorerBlock>
                <UIExplorerBlock title="Custom Style MtModal 2">
                    <Button
                        title="open modal3"
                        onPress={() => {this.modal3.open()}}
                    />
                </UIExplorerBlock>
                <Modal
                    ref={(modal) =>  {
                        this.modal1 = modal
                    }}
                    style={{ justifyContent: 'flex-end', backgroundColor: 'gray'}}
                >
                    <Text
                        style={[styles.button, styles.close]}
                        onPress={() => {this.modal1.close();}}
                    >
                        Close
                    </Text>
                    <View style={[styles.modalContainer]}>
                        <Text style={styles.text}>Awesome!</Text>
                    </View>
                    <View style={styles.modalContainer}>
                        <Text style={styles.text}>Amazing!</Text>
                    </View>
                    <TextInput
                        placeholder="type your name"
                        style={{height: 40}}
                    />
                    <View style={styles.close2}>
                        <Text style={styles.text}>Amazing!</Text>
                        <Text style={styles.text}>Amazing!</Text>
                    </View>
                </Modal>
                <Modal
                    ref={(modal) => this.modal2 = modal }
                    style={{   }}
                >
                    <View style={styles.bottomContentContainer}>
                        <TouchableOpacity
                            onPress={() => {this.modal2.close();}}
                            style={{  position:'absolute',top:0, left:0, right:0, bottom:0}}
                        >
                        </TouchableOpacity>
                        <View>
                            <Text
                                style={[styles.button,styles.close]}
                                onPress={() => {this.modal2.close();}}
                            >
                                Close
                            </Text>
                            <View style={styles.box}>
                                <Text style={styles.text}>Box One</Text>
                            </View>
                            <View style={styles.box}>
                                <Text style={styles.text}>Box Two</Text>
                            </View>
                            <TextInput placeholder="type your name"/>
                            <View style={styles.box}>
                                <Text style={styles.text}>Box Three</Text>
                            </View>
                            <View style={{ height: 60, backgroundColor: 'blue', overflow: 'visible'}}>
                                <View style={{ height: 50, backgroundColor: 'red', overflow: 'visible'}}/>
                                <View style={{ height: 50, backgroundColor: 'green', overflow: 'visible'}}/>
                            </View>
                            <Button onPress={() => { this.setState({disable:!this.state.disable})}}
                                    title="hello world"
                                    color={ this.state.disable ? 'red' : 'navy'}
                            />
                        </View>
                    </View>
                </Modal>
                <Modal
                    ref={modal => this.modal3 = modal }
                >
                    <TouchableWithoutFeedback
                        onPress={() => {this.modal3.close();}}
                    >
                        <View style={styles.container}>
                            <View style={[styles.innerContainer]}>
                                <ActivityIndicator
                                    size="large"
                                />
                                <Text style={styles.text}>
                                    { 'Loading'}
                                    {`...`}
                                </Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </UIExplorerPage>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    bottomContentContainer: {
        justifyContent: 'flex-end',
        flex: 1,
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
    close2: {
        position: 'absolute',
        top: 200,
        left: 0,
        zIndex: 2,
        backgroundColor: 'navy'
    },
    modalContainer: {
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

module.exports = ModalExample;

