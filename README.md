# Martian-UI
The lib includes a sample app that showcases Martian wrapped views and modules.

## Running this app

Before running the app, make sure you ran:

    git clone https://github.com/XuChangZJU/martian-ui.git
    cd martian-ui
    npm install

## bly Usage

### MtChar
基本文字组件
```js
import {MtChar} from 'martian-ui';
let {MtText,MtHeading,MtLabel} = MtChar;
```
#### 组件
- MtText：普通文字
- MtHeading 标题
- MtLabel： 标签


#### props 
通常情况直接使用就好，不用重定义style
- [View Props](http://facebook.github.io/react-native/docs/text.html)
