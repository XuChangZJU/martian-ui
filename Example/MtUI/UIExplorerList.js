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
    key: 'ImageExample',
    module: require('./ImageExample')
  },
  {
    key: 'SeparatorExample',
    module: require('./lib/SeparatorExample')
  },
  {
    key: 'InputExample',
    module: require('./lib/InputExample')
  },
  {
    key: 'ButtonExample',
    module: require('./lib/ButtonExample')
  },
  {
    key: 'LoadingModalExample',
    module: require('./lib/LoadingModalExample')
  },
  {
    key: 'ListViewExample',
    module: require('./lib/ListViewExample')
  },
  {
  	key: 'TextExample',
    module: require('./lib/TextExample'),
  },
  {
    key: 'CaptchaExample',
    module: require('./lib/CaptchaExample'),
  },
  {
    key: 'NavBarExample',
    module: require('./lib/NavBarExample')
  },
  {
    key: 'ContainerExample',
    module: require('./lib/ContainerExample')
  },
  {
    key: 'TabBarExample',
    module: require('./lib/TabBarExample/TabBarExample')
  },
  {
    key: 'EmptyViewExample',
    module: require('./lib/EmptyViewExample')
  }, 
  {
    key: 'CircleViewExample',
    module: require('./lib/CircleViewExample')
  },
  {
    key: 'StateFlowExample',
    module: require('./lib/StateFlowExample')
  },
  {
    key: 'RadioButtonExample',
    module: require('./lib/RadioButtonExample')
  }, 
  {
    key: 'EditableItemPanelExample',
    module: require('./lib/EditableItemPanelExample')
  },
  {
    key: 'BadgeExample',
    module: require('./lib/BadgeExample')
  }, 
  {
    key: 'SwiperExample',
    module: require('./lib/SwiperExample')
  },
  {
    key: 'GridExample',
    module: require('./lib/GridExample')
  },
  {
    key: 'ListViewPageExample',
    module: require('./lib/ListViewPagingExample')
  },
  {
    key: 'PickerExample',
    module: require('./lib/PickerExample')
  },
  {
    key: 'LayoutAnimationExample',
    module: require('./lib/LayoutAnimationExample')
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
