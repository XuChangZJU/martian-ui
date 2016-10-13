/**
 * Created by Hey on 2016/6/16.
 */
import React, { Component } from 'react';
import { Modal, StyleSheet, Text, TouchableWithoutFeedback,
    View, ActivityIndicator } from 'react-native';
class LoadingModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };
    }
    // 'rgba(0, 0, 0, 0.1)'
    render() {
        const { tip }=this.props;
        //todo how to handle with the timeout
        return (
            <Modal
                /*  animationType={this.state.animationType}*/
                transparent={true}
                visible={this.state.visible}
                onRequestClose = { ()=>{
                    this.setState({ visible: false });
                    /*alert('what happened')* handle android backButton */
                }}
            >
                <TouchableWithoutFeedback
                    onPress={() => {
                            this.setState({ visible: false });
                    }}
                >
                    <View style={[styles.container, {backgroundColor: 'transparent'} ]}>
                        <View style={[styles.innerContainer]}>
                            <ActivityIndicator
                                size="large"
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


    }
}

module.exports = LoadingModal;

const styles = StyleSheet.create({
    /* modal: {
     position: 'absolute',
     top:0,
     bottom:0,
     left:0,
     right:0,
     opacity: 80,
     // backgroundColor:'rgba(255,255,255 ,0.8)'
     backgroundColor:'blue'
     },*/
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 30,
        paddingHorizontal: 100,
    },
    text: {
        color: 'white',
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 30,
    },
});

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

