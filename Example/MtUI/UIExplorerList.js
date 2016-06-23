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
