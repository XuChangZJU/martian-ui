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

### MtCaptcha
 发送验证码按钮

#### props
- 常用props：
 	- `text:string`  倒计时前显示文字
 	- `disabled：bool`
 	- `onPress：function`
- 可选props：
	- `time：number` 倒计时时长
	
### MtNavBar
用于导航栏，左上角为返回按钮
#### props
- 常用props：
 	- `pop:function`  返回按钮的跳转函数
 	- `title:string` 导航栏标题
- 可选props：
	- `rightIcon:element` 右侧元素


### MtContainer
基本容器组件
#### props
- 常用props：
- 可选props：

