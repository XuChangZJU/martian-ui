/**
 * Created by lavystord on 17/1/1.
 */
import React, {Component, PropTypes} from "react";
import {
    StyleSheet,
    BackAndroid,
    View,
    Animated,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    TouchableWithoutFeedback
} from "react-native";
import Modal from "react-native-root-modal";
import Icon from "react-native-vector-icons/Ionicons";

/**
 * @Note: Import library any where inside your code before AppRegistry.registerComponent is called.
 */

const {height: ScreenHeight} = Dimensions.get('window')

class MtPopupView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            y: new Animated.Value(0)
        };
        this.handleBackPress = this._handleBackPress.bind(this);
    }

    static propTypes = {
        visible: PropTypes.bool,
        disableClose: PropTypes.bool,
    };

    static defaultProps = {
        visible: false
    };

    _handleBackPress() {
        this.close();
        return true;
    }

    open = () => {
        this.state.y.setValue(500);
        Animated.timing(this.state.y, {
            toValue: 0
        }).start();
        BackAndroid.addEventListener('hardwareBackPress', this.handleBackPress);
        this.setState({
            visible: true
        });
    };

    close = () => {
        Animated.timing(this.state.y, {
            toValue: ScreenHeight
        }).start(() => {
            BackAndroid.removeEventListener('hardwareBackPress', this.handleBackPress)
            this.setState({
                visible: false
            });
            this.props.onClose && this.props.onClose();
        });
    };

    render() {
        const {style, visible, children, disableClose, iconStyle, ...otherProps} = this.props;
        return (
            <Modal
                style={[ styles.style, style]}
                visible={this.state.visible || visible}
                {...otherProps}
            >
                <TouchableOpacity
                    style={styles.absolute}
                    onPress={() => {this.close();}}
                >
                </TouchableOpacity>
                <Animated.View
                    style={[styles.container,{transform:[
                                {
                                translateY: this.state.y
                                }]},
                           ]}
                >
                    {
                        !disableClose &&
                        <TouchableOpacity
                            onPress={() => {this.close();}}
                            style={[styles.closeIcon, iconStyle]}>
                            <Icon
                                name="ios-close"
                                size={35}
                                color="#bcbcbc"
                            />
                        </TouchableOpacity>
                    }
                    {children}
                </Animated.View>
            </Modal>
        );
    }


}

const styles = StyleSheet.create({
    style: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'flex-end',
    },
    absolute: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: ScreenHeight,
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    container: {
        backgroundColor: '#e9eaed',
        maxHeight: ScreenHeight - 150,
        minHeight: 250,
        // height: 400,
    },
    closeIcon: {
        position: 'absolute',
        top: 5,
        right: 10,
        zIndex: 2,
        backgroundColor: 'transparent'
    }
});

module.exports = MtPopupView;
