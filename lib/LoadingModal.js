/**
 * Created by Hey on 2016/6/16.
 */
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback,
    View, ActivityIndicator } from 'react-native';
import Modal from './Modal';
import { main as mainColor} from '../utils/color'
import { LinesLoader } from 'react-native-indicator'
class LoadingModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible || false
        };
    }

    static defaultProps = {
        blocked: false
    };

    componentWillReceiveProps(nextProps) {
        this.setState({ visible: nextProps.visible || false })
    }

    render() {
        const { tip }=this.props;
        //todo how to handle with the timeout
        return (
            <Modal
                /*  animationType={this.state.animationType}*/
                transparent={true}
                visible={this.state.visible}
                onRequestClose = { ()=> {
                    this.setState({ visible: false });
                }}
            >
                <TouchableWithoutFeedback
                    onPress={() => {
                            this.setState({ visible: false });
                    }}
                    disabled={this.props.blocked}
                >
                    <View style={[styles.container, {backgroundColor: 'transparent'} ]}>
                        <View style={[styles.innerContainer]}>
                            <LinesLoader
                                color={mainColor}
                            />
                            <Text style={styles.text}>
                                {tip || '加载中'}
                                {`...`}
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
        // return null;

    }
}

module.exports = LoadingModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 30,
        paddingHorizontal: 100,
    },
    text: {
        color: 'white',
        marginTop:10
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 30,
    },
});

/**
 * @deprecated without pressing whitespace to close
 */

// class LoadingModal extends Component {
//     render() {
//         const {statement}=this.props;
//         //todo how to handle with the timeout
//         return (
//             <Modal
//                 /*  animationType={this.state.animationType}*/
//                 transparent={true}
//                 visible={true}
//                 onRequestClose = { ()=>{/*alert('what happened')* handle android backButton */} }
//             >
//                 <View style={[styles.container, {backgroundColor: 'rgba(0, 0, 0, 0.5)'} ]}>
//                     <View style={[styles.innerContainer, {backgroundColor: '#fff', padding: 20}]}>
//                         <ActivityIndicator
//                             size="large"
//                         />
//                         <Text>加载中...</Text>
//                     </View>
//                 </View>
//             </Modal>
//         )
//
//
//     }
// }

