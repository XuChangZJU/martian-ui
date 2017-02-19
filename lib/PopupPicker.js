/**
 * Created by lavystord on 17/1/11.
 */
import React, {Component} from "react";
import {View, StyleSheet, Text, Platform, Dimensions} from "react-native";
import Picker from "./Picker";
import PopupView from "./PopupView";
const {width: ScreenWidth} = Dimensions.get('window');

class PopupPicker extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        options: React.PropTypes.arrayOf(React.PropTypes.oneOf(React.PropTypes.number, React.PropTypes.string)),
        selectedOption: React.PropTypes.any,
        selectedIndex: React.PropTypes.number,
        onSelect: React.PropTypes.func.isRequired,
        transformOption: React.PropTypes.func,
        okText: React.PropTypes.string,
        cancelText: React.PropTypes.string,
    };

    static defaultProps = {
        okText: '确定',
        cancelText: '取消',
        // mode: 'date'
    };

    open() {
        this.popup.open();
    }

    close() {
        this.popup.close();
    }

    onComplete() {
        this.close();
        this.props.onComplete && this.props.onComplete()
    }

    render() {
        const {onComplete, cancelText, okText, title, pickerStyle, ...otherProps} = this.props;
        return (
            <PopupView
                disableClose={true}
                ref={popup => this.popup = popup}
            >
                <View style={[styles.header]}>
                    <Text
                        onPress={() => this.close()}
                        style={styles.text}
                    >
                        { this.props.cancelText }
                    </Text>
                    <Text
                        style={styles.title}
                    >
                        {title}
                    </Text>
                    <Text
                        onPress={()=>this.onComplete()}
                        style={styles.text}
                    >
                        { this.props.okText }
                    </Text>
                </View>
                <Picker
                    style={[styles.picker,pickerStyle]}
                    backgroundColor='white'
                    {...otherProps}/>
            </PopupView>
        );
    }

}


const styles = StyleSheet.create({
    text: {
        color: '#007aff',
        fontSize: 18,
    },
    title: {
        fontSize: 18,
    },
    header: {
        height: 45,
        paddingHorizontal: 15,
        borderBottomColor: '#dddddd',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    picker: Platform.select({
        ios: {
            backgroundColor: 'white'
        },
        android: {
            width: ScreenWidth
        }
    }),

});

module.exports = PopupPicker;
