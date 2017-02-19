/**
 * Created by lavystord on 16/12/29.
 */
import React, { Component, PropTypes } from 'react';
import Modal from 'react-native-root-modal';
import { StyleSheet, BackAndroid } from 'react-native';
/**
 * @Note: Import library any where inside your code before AppRegistry.registerComponent is called.
 */
class MtModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    static propTypes = {
        visible: PropTypes.bool,
    };

    static defaultProps = {
        visible: false
    };

    render() {
        const { style, visible, ...otherProps} = this.props;
        return (
            <Modal
                style = {[ styles.style, style]}
                visible = {this.state.visible || visible}
                {...otherProps}
            />
        );
    }

    open = () => {
        this.setState({
            visible: true
        });
    };

    close = () => {
        this.setState({
            visible: false
        });
    };



}

const styles = StyleSheet.create({
    style: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        // backgroundColor: 'yellow'
    }
});

module.exports = MtModal;

