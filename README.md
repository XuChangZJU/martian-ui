# Martian-UI
The lib includes a sample app that showcases Martian wrapped views and modules.

## Running this app

Before running the app, make sure you ran:

    git clone https://github.com/XuChangZJU/martian-ui.git
    cd martian-ui
    npm install

## Usage

### MtSeparator
用于两条Item之间的分离
#### props：
- 可选props：
 	- `height： number` MtSeparator的高度
 	- `backgroundColor：string` MtSeparator的颜色

### MtInput
单行输入框

#### props
- [View props](http://facebook.github.io/react-native/docs/textinput.html)
- 禁用props：
	- clearButtonMode
	- multiline
- 常用props：
	- placeholder 
	- value
	- onChangeText
	- secureTextEntry
	- keyboardType

### MtButton
基本的Button
#### props
- 常用props：
	- `onPress：function `点击所触发的动作
	- ` disabled：bool` button是否可以点击。false=可以
- 可选props：
	- `style：object` button中文字的文字样式
	- `containerStyle：object` button背景样式