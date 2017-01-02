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
        }
    }

    static propTypes = {
        visible: PropTypes.bool,
        disableClose: PropTypes.bool,
    };

    static defaultProps = {
        visible: false
    };

    open = () => {
        this.state.y.setValue(500);
        Animated.timing(this.state.y, {
            toValue: 0
        }).start();
        this.setState({
            visible: true
        });
    };

    close = () => {
        Animated.timing(this.state.y, {
            toValue: ScreenHeight
        }).start(() => {
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
                style={[ styles.style,
                style]}
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
                        <Icon
                            name="ios-close"
                            size={30}
                            style={[styles.closeIcon, iconStyle]}
                            color="#bcbcbc"
                            hitSlop={{ left:50}}
                            onPress={() => {this.close();}}
                        />
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
        justifyContent: 'flex-end'
    },
    absolute: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.2)'
        // backgroundColor: 'yellow'
    },
    container: {
        backgroundColor: '#e9eaed',
        maxHeight: ScreenHeight - 150,
        minHeight: 350,
    },
    closeIcon: {
        position: 'absolute',
        top: 5,
        right: 10,
        zIndex: 2,
        fontWeight: 'bold',
        backgroundColor: 'transparent'
    }
});

module.exports = MtPopupView;
