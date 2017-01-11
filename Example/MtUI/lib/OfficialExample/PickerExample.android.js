/**
 * Created by lavystord on 17/1/7.
 */

const React = require('react');
const ReactNative = require('react-native');
const StyleSheet = require('StyleSheet');
const UIExplorerBlock = require('UIExplorerBlock');
const UIExplorerPage = require('UIExplorerPage');

const {
    Text,
} = ReactNative;

let data = [];
for(let i=0; i<100; i++) {
    data.push(i);
}

import { WheelPicker as Picker} from 'react-native-wheel-picker-android'
let Item = Picker.Item;
class PickerExample extends React.Component {
    static title = '<Picker>';
    static description = 'Provides multiple options to choose from, using either a dropdown menu or a dialog.';

    state = {
        selected1: 'key1',
        selected2: 'key1',
        selected3: 'key1',
        color: 'red',
    };

    render() {
        return (
            <UIExplorerPage title="<Picker>">
                <UIExplorerBlock title="Basic Picker">
                    <Picker
                        data={data}
                        isCurved
                        indicatorColor="#E6E7E9"
                        renderIndicator={true}
                        isCurtain={true}
                        itemTextColor="#b1b1b1"
                        isAtmospheric={true}
                        selectedItemTextColor="black"
                        onItemSelected={(event) => { this.setState({data: event.data})}}
                        style={{ width:200, height: 200}}
                    >
                    </Picker>
                    <Text>
                        {`your choice is: ${this.state.data}`}
                    </Text>
                </UIExplorerBlock>
            </UIExplorerPage>
        );
    }

    changeMode = () => {
        const newMode = this.state.mode === Picker.MODE_DIALOG
            ? Picker.MODE_DROPDOWN
            : Picker.MODE_DIALOG;
        this.setState({mode: newMode});
    };

    onValueChange = (key: string, value: string) => {
        const newState = {};
        newState[key] = value;
        this.setState(newState);
    };
}

var styles = StyleSheet.create({
    picker: {
        width: 200,
    },
});

module.exports = PickerExample;
