/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @flow
 */
'use strict';

const React = require('React');

export type UIExplorerExample = {
    key: string;
    module: React.Component;
};

var ComponentExamples: Array<UIExplorerExample> = [
    {
        key: 'ActionButtonExample',
        module: require('./lib/ActionButtonExample')
    },
    {
        key: 'ActionSheetExample',
        module: require('./lib/ActionSheetExample')
    },
    {
        key: 'BadgeExample',
        module: require('./lib/BadgeExample')
    },
    {
        key: 'ButtonExample',
        module: require('./lib/ButtonExample')
    },
    {
        key: 'CaptchaExample',
        module: require('./lib/CaptchaExample'),
    },
    {
        key: 'CheckBoxExample',
        module: require('./lib/CheckBoxExample'),
    },
    {
        key: 'CheckItemExample',
        module: require('./lib/CheckItemExample'),
    },
    {
        key: 'ContainerExample',
        module: require('./lib/ContainerExample')
    },
    {
        key: 'DateTimePickerExample',
        module: require('./lib/DateTimePickerExample')
    },
    {
        key: 'EditExample',
        module: require('./lib/EditExample')
    },
    {
        key: 'EditableItemPanelExample',
        module: require('./lib/EditableItemPanelExample')
    },
    {
        key: 'EmptyViewExample',
        module: require('./lib/EmptyViewExample')
    },
    {
        key: 'FixedButtonExample',
        module: require('./lib/FixedButtonExample')
    },
    {
        key: 'FloatingBarExample',
        module: require('./lib/FloatingBarExample')
    },
    {
        key: 'InputExample',
        module: require('./lib/InputExample')
    },
    {
        key: 'IconLabelBarExample',
        module: require('./lib/IconLabelBarExample')
    },
    {
        key: 'KeyboardAvoidingExample',
        module: require('./lib/KeyboardAvoidingExample/KeyboardAvoidingExample')
    },
    {
        key: 'LabelBarExample',
        module: require('./lib/LabelBarExample')
    },
    {
        key: 'ListViewExample',
        module: require('./lib/ListViewExample')
    },
    {
        key: 'LoadingModalExample',
        module: require('./lib/LoadingModalExample')
    },
    {
        key: 'ModalExample',
        module: require('./lib/ModalExample')
    },
    {
        key: 'NavBarExample',
        module: require('./lib/NavBarExample')
    },
    {
        key: 'PickerExample',
        module: require('./lib/PickerExample')
    },
    {
        key: 'PopupPickerExample',
        module: require('./lib/PopupPickerExample')
    },
    {
        key: 'PopupViewExample',
        module: require('./lib/PopupViewExample')
    },
    {
        key: 'RadioButtonExample',
        module: require('./lib/RadioButtonExample')
    },
    {
        key: 'SeparatorExample',
        module: require('./lib/SeparatorExample')
    },
    {
        key: 'StateFlowExample',
        module: require('./lib/StateFlowExample')
    },
    {
        key: 'SwiperExample',
        module: require('./lib/SwiperExample')
    },
    {
        key: 'TabBarExample',
        module: require('./lib/TabBarExample/TabBarExample')
    },
    {
        key: 'TextExample',
        module: require('./lib/TextExample'),
    },
    {
        key: 'TextAreaExample',
        module: require('./lib/TextAreaExample')
    },
    {
        key: 'ToastExample',
        module: require('./lib/ToastExample')
    },
    {
        key: 'TouchableExample',
        module: require('./lib/TouchableExample')
    },
    {
        key: 'WordExample',
        module: require('./lib/WordExample')
    },
    {
        key: 'Demo',
        module: require('./lib/Demo')
    },
    // undo component
    {
        key: 'GridExample',
        module: require('./lib/GridExample')
    },
    // officialExample
    {
        key: 'ListViewPageExample',
        module: require('./lib/OfficialExample/ListViewPagingExample')
    },
    {
        key: 'PickerOfficialExample',
        module: require('./lib/OfficialExample/PickerExample')
    },
    {
        key: 'LayoutAnimationExample',
        module: require('./lib/OfficialExample/LayoutAnimationExample')
    },


];

const APIExamples = [

    {
        key: 'AlertExample',
        module: require('./AlertExample').AlertExample,
    },
];

const Modules = {};

APIExamples.concat(ComponentExamples).forEach(Example => {
    Modules[Example.key] = Example.module;
});

const UIExplorerList = {
    APIExamples,
    ComponentExamples,
    Modules,
};

module.exports = UIExplorerList;
