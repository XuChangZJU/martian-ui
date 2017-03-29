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
            visible: this.props.visible || false,
        }
        this.handleBack = this._handleBack.bind(this);
    }

    static propTypes = {
        visible: PropTypes.bool,
    };

    static defaultProps = {
        visible: false,
        onBack: () => {}
    };

    _handleBack() {
        // this.setState({
        //     visible: false
        // });
        this.close();
        return true;
    }

    componentDidMount() {
        // console.warn('didMount');
        // console.warn('firstState:', this.state.visible)

    }

    componentWillReceiveProps(nextProps, nextState) {
        if(nextProps.visible !== this.props.visible) {
            this.setState({visible: nextProps.visible});
        }
    }

    // componentWillUpdate(nextProps,nextState) {
    //     console.warn('currentProps:', this.props.visible)
    //     console.warn('currentState:', this.state.visible)
    //     console.warn('nextState:', nextState.visible)
    //     console.warn('nextProps:', nextProps.visible)
    //     console.warn('***********************************')
    // }
    //
    componentDidUpdate(preProps, preState) {
       /* if(this.state.visible && !preState.visible) {
            BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
        }
        if (!this.state.visible && preState.visible) {
            BackAndroid.removeEventListener('hardwareBackPress', this.handleBack)
        }*/
    }

    componentWillUnMount() {

    }


    render() {
        const { style, visible, ...otherProps} = this.props;
        return (
            <Modal
                style = {[ styles.style, style]}
                visible = {this.state.visible}
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

