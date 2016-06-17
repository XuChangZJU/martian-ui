/**
 * Created by Hey on 2016/6/16.
 */
import React, {
    Component,
} from 'react';
import {
    Modal,
    StyleSheet,
    Text,
    View,
    ProgressBarAndroid,
    ActivityIndicatorIOS,
    Platform
} from 'react-native';
class LoadingModal extends Component {
    render() {
        const {statement}=this.props;

        if(Platform.OS === "android") {
            this.loadingView=<ProgressBarAndroid styleAttr="Normal"  />;
        }else{
            this.loadingView=<ActivityIndicatorIOS color="gray" size="small"  />;
        }
        //todo figure out  how mount on children view
        return (
            <Modal
                /*  animationType={this.state.animationType}*/
                transparent={true}
                visible={true}
                onRequestClose = { ()=>{/*alert('what happened')* handle android backButton */} }
            >
                <View style={[styles.container, {backgroundColor: 'rgba(0, 0, 0, 0.5)'} ]}>
                    <View style={[styles.innerContainer, {backgroundColor: '#fff', padding: 20}]}>
                        {this.loadingView}
                        <Text>加载中...</Text>
                    </View>
                </View>
            </Modal>
        )


    }
}

module.exports = LoadingModal;

const styles = StyleSheet.create({
    modal: {
        position: 'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        opacity: 80,
        // backgroundColor:'rgba(255,255,255 ,0.8)'
        backgroundColor:'blue'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
    },
});