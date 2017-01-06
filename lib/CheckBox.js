/**
 * Created by lavystord on 16/9/22.
 */

import React, {Component, PropTypes} from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Color from '../utils/color';

class CheckBox extends Component {
    componentWillMount() {
        // const a = this.props;
        // console(a.transformOption);
    }

    render() {
        const { containerStyle, options, onSelect, selectedOptions, transformOption, renderOption, testOptionEqual } = this.props;

        const children = options.map((option, index) => {
            const selected = (selectedOptions && selectedOptions.find((item) => testOptionEqual(option, item))) ? true : false;
            const onPress = ( ) => {
                onSelect && onSelect(option, !selected, index);
            };
            return renderOption(option, selected, onPress, index, transformOption);
        });

        return (
            <View style={[styles.container,containerStyle]} >
                {children}
            </View>
        );
    }

    static defaultRenderOption(option, selected, onSelect, index, transformOption) {
        let checkMark = selected ?
            <Icon name="ios-checkmark" size={30} color={Color.main} />
            : null;
        // const { transformOption } = this.props;
        const item = transformOption ? transformOption(option) : option;
        return (
            <TouchableHighlight
                onPress={onSelect}
                key={index}
            >
                <View style={[styles.baseStyle, index ? styles.basePlusStyle: null]}>
                    <Text style={styles.textStyle}>{item}</Text>
                    {checkMark}
                </View>
            </TouchableHighlight>
        );
    }
}

CheckBox.defaultProps = {
    testOptionEqual: (a,b) => a === b,
    transformOption: a => a,
    renderOption: CheckBox.defaultRenderOption,
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    textStyle: {
        // paddingTop: 10,
        // paddingBottom: 10,
        marginTop: 10,
        marginBottom: 10,
        color: 'black',
        flex: 1,
        fontSize: 16,
    },
    baseStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        paddingLeft: 20,
        backgroundColor: 'white',
        height: 50,
    },
    basePlusStyle: {
        borderTopColor: '#eeeeee',
        borderTopWidth: 1,
    },

});

CheckBox.propTypes = {
    options: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    selectedOptions: PropTypes.array.isRequired,
};

module.exports = CheckBox;
