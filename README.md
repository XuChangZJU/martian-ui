# Martian-UI
The lib includes a sample app that showcases Martian wrapped views and modules.

## UI Example 

Before running the app, make sure you ran:

    git clone https://github.com/XuChangZJU/martian-ui.git
    cd ./martian-ui/Example/MtUI
    npm install


## Usage
```js
import {MtSeparator} from 'martian-ui'
```
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

### MtLoadingModal
loadingModal

### MtListView
基本的列表视图
#### props
- [View Props](http://facebook.github.io/react-native/docs/listview.html)
- 常用props
	- `data：Array` 数据源 
	- `onReresh：function`   下拉刷新
	- `refreshing：bool` 下拉时是否显示ActivityIndicator
- 可选props
	- `dataSource:ListViewDataSource` Native数据源，通常情况下可用props data代替


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


