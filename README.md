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
用于导航栏，通常左上角为返回按钮
#### props
- 常用props：
 	- `leftItem:Object`  左Item
	 	- `title`:
	 	- `icon`:当有title且无layout时disable
	 	- `onPress`:
	 	- `layout`:设为icon,则tilte为disable
 	- `title:string` 导航栏标题
 	- `rightItem:Object` 属性同leftItem
- 可选props：
	- `foreground:string`  “dark”暗色系


### MtContainer
基本容器组件
#### props
- 常用props：
- 可选props：

### MtTabBar
可带滑动属性的TabBar
#### props
- 常用props：
	- `tabBarPosition：string` 标签栏位置
	- `children：ReactComponent`每个component必须有一个`tabLabel`属性用来区别标签项
- 可选props：
	- `renderTabBar：ReactComponent` 自定义渲染效果，用默认值可以不写
	- `intialPage：number` 被选中的初始标签页，从0开始计数
	- `tabBarUnderlineColor：string`默认标签栏下划线颜色
	- `tabBarBackgroundColor：string`标签栏背景色
	- `tabBarActiveTextColor：string`标签项被选中文字颜色
	- `tabBarInActiveTextColor：string`标签项未被选中文字颜色
	- `tabBarTextStyle：Object`标签项样式
- [More detail props](https://github.com/skv-headless/react-native-scrollable-tab-view)

### MtEmptyView
listview中在第一次网络请求前的空白页

### MtCircleView
圆形view
#### props
- 常用props：
	- `size: number` 直径大小
	- `color:string` 背景颜色
- 可选props：
	- [ RN View Props](http://facebook.github.io/react-native/docs/view.html)	

