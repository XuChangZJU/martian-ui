/**
 * Created by lavystord on 17/1/10.
 */
import React, { Component } from 'react';
import { PickerIOS } from 'react-native';
const Item = PickerIOS.Item;
class Picker extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        options: React.PropTypes.arrayOf(React.PropTypes.oneOf([React.PropTypes.number, React.PropTypes.string])),
        selectedOption: React.PropTypes.any,
        selectedIndex: React.PropTypes.number,
        onSelect: React.PropTypes.func.isRequired,
        transformOption: React.PropTypes.func,
    };

    static defaultProps = {
        transformOption: a => a
    };

    render() {
        const { onSelect, options, transformOption, selectedOption, optionStyle } = this.props;
        return (
            <PickerIOS
                style={[this.props.style]}
                itemStyle={optionStyle}
                selectedValue={selectedOption && options.findIndex((item) => transformOption(item) === transformOption(selectedOption))}
                onValueChange={(idx) => {
                  onSelect && onSelect(options[idx], idx)
               }}
            >
                {
                    options.map((item,id) => <Item label={transformOption(item)} value={id} key={id} />)
                }
            </PickerIOS>
        );
    }


}



module.exports = Picker;