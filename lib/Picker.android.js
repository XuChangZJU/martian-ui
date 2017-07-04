/**
 * Created by lavystord on 17/1/10.
 */
import React, { Component, PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import { WheelPicker } from 'react-native-wheel-picker-android'
const Item = WheelPicker.Item;


class Picker extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        options: React.PropTypes.arrayOf(React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string, React.PropTypes.object])),
        selectedOption: React.PropTypes.any,
        selectedIndex: React.PropTypes.number,
        onSelect: React.PropTypes.func.isRequired,
        transformOption: React.PropTypes.func,
        optionColor: React.PropTypes.string,
        selectedOptionColor: React.PropTypes.string,
        selectedOptionSize: React.PropTypes.number,
        backgroundColor: React.PropTypes.string,
    };

    static defaultProps = {
        transformOption: a => a,
        optionColor: '#b1b1b1',
        selectedOptionColor: 'black',
    };

    render() {
        const { onSelect, transformOption, selectedOption, optionColor, selectedOptionColor } = this.props;
        const options = this.props.options || [];
        return (
            <WheelPicker
                data={options.map((item) => transformOption(item))}
                isCurved
                renderIndicator
                isAtmospheric
                indicatorColor="#E6E7E9"
                isCurtain
                itemTextColor={optionColor}
                selectedItemPosition={selectedOption && options.findIndex((item) => transformOption(item) === transformOption(selectedOption))}
                selectedItemTextColor={selectedOptionColor}
                onItemSelected={(event) => {
                    onSelect && onSelect(options[event.position], event.position)
                }}
                style={[styles.style,this.props.style]}
                backgroundColor='white'
            />
        );
    }
}




const styles = StyleSheet.create({
    style: {
        width:300,
        height: 200
    }
});

module.exports = Picker;
