/**
 * Created by lavystord on 16/10/20.
 */

import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Modal,
    Alert,
} from 'react-native';

class demo extends Component {
    state = {
        showModal: false,
    }

    onShowModal = () => {
        this.setState({ showModal: true });
    }
    onCloseModal1 = () => {
        this.setState({ showModal: false }, () => {
            Alert.alert('Alert', 'UI will be blocked by the modal');
        });
    }
    onCloseModal2 = () => {
        this.setState({ showModal: false }, () => {
            setTimeout(() => {
                Alert.alert('Alert', 'Alert won\'t show');
            }, 200);
        });
    }
    onCloseModal3 = () => {
        this.setState({ showModal: false }, () => {
            setTimeout(() => {
                Alert.alert('Alert', 'Works fine');
            }, 510);
        });
    }
    render() {
        const { showModal } = this.state;
        return (
            <View style={styles.container}>
                <Text onPress={this.onShowModal}>Show modal</Text>
                <Modal animationType='slide' visible={showModal} onRequestClose={this.onCloseModal3} >
                    <View style={styles.container}>
                        <Text onPress={this.onCloseModal1}>Close modal immediately</Text>
                        <Text onPress={this.onCloseModal2}>Close modal after 200ms</Text>
                        <Text onPress={this.onCloseModal3}>Close modal after more then 500ms</Text>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});



demo.title = 'Demo';
module.exports = demo;