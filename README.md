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

## Component

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
	
### MtTextArea
多行输入框

#### props
- [View props](http://facebook.github.io/react-native/docs/textinput.html)
- 禁用props：
	- clearButtonMode
	- multiline
- 常用props：
	- containerStyle 容器样式
	- style
	- hintStyle 右下角提示文字样式

### MtButton
基本的Button
#### props
- 常用props：
	- `onPress：function `点击所触发的动作
	- ` disabled：bool` button是否可以点击。false=可以
- 可选props：
	- `style：object` button中文字的文字样式
	- `containerStyle：object` button背景样式

### MtFixedButton
固定于页面底部的Button
#### props
- 常用props：
	- `onPress：function `点击所触发的动作
	- ` disabled：bool` button是否可以点击。false=可以
- 可选props：
	- `style：object` button中文字的文字样式
	- `foreground：string` button中背景颜色深浅
	- `containerStyle：object` button背景样式
	
### MtActionButton
固定于页面底部的Button
#### props
- 常用props：
	- `onPress：function `点击所触发的动作
	- ` disabled：bool` button是否可以点击。false=可以
- 可选props：
	- `style：object` button中文字的文字样式
	- `foreground：string` button中边框颜色是否为浅色
	- `containerStyle：object` button背景样式	
	
### MtLoadingModal
loadingModal
#### props
- `visible:bool` 是否可见
- `tip:string` 中间的提示文字

### MtModal
#### method
- `open()` 
- `close()`
#### props
- `style: Object`

### MtPopupView
从底部弹出的页面
#### method
- `open()` 
- `close()`
#### props
- `style: Object` 页面总样式
- `onClose: func`
- `disableClose: bool` 右上角是否有关闭按钮
- `iconStyle: Object` 按钮样式


### MtListView
基本的列表视图
#### props
- [View Props](http://facebook.github.io/react-native/docs/listview.html)
- 常用props
	- `data：Array` 数据源 
	- `onRefresh：function`   下拉刷新
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
- MtText：普通文字 16号 颜色#b4b4b4
- MtHeading 标题
- MtLabel： 标签 16号 颜色#262626
- MtM1：16 + 2号 颜色#ff630e
- MtM2：14 + 2号 颜色#ff630e
- MtM3：12 + 2号 颜色#ff630e
- MtM4：10 + 2号 颜色#ff630e
- MtM8：11 + 2号 颜色#ff630e
- MtW2：14 + 2号 颜色white
- MtW3：12 + 2号 颜色white
- MtW4：10 + 2号 颜色white
- MtT2：14 + 2号 颜色#262626
- MtT3：12 + 2号 颜色#262626
- MtT4：10 + 2号 颜色#262626
- MtT6：15 + 2号 颜色#262626
- MtT8：11 + 2号 颜色#262626
- MtL2：14 + 2号 颜色#8f8f8f
- MtL3：12 + 2号 颜色#8f8f8f
- MtL4：10 + 2号 颜色#8f8f8f
- MtL8：11 + 2号 颜色#8f8f8f
- MtR4：10 + 2号 颜色#ff0000
- MtB4：10 + 2号 颜色#3aa1ee


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
	 	- `image`:当有title且无layout时disable
	 	- `icon`:
	 	- `onPress`:
	 	- `layout`:设为icon,则title为disable
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
	- `initialPage：number` 被选中的初始标签页，从0开始计数
	- `tabBarUnderlineColor：string`默认标签栏下划线颜色
	- `tabBarBackgroundColor：string`标签栏背景色
	- `tabBarActiveTextColor：string`标签项被选中文字颜色
	- `tabBarInActiveTextColor：string`标签项未被选中文字颜色
	- `tabBarTextStyle：Object`标签项样式
- [More detail props](https://github.com/skv-headless/react-native-scrollable-tab-view)

### MtEmptyView
listview中在第一次网络请求前的空白页

### MtStateFlow
状态指示条,可用于显示一个业务的进度

#### props
- 必写props
	- `states：array`：状态数组
	- `current：number` 当前状态
- 可选props
	- `containerStyle:Object` 容器样式

### MtRadioButton
多选一按钮
#### props
- 必写props
	- `options: array`：选项数组
	- `onSelect:function(selectedOption,selectedIndex)` 选中时的回调
- 可选props
	- `renderOption:function(option,selected,onSelect,index)` 应返回一个选项node，默认node为选项值，被选中时有对勾
	- `transformOption:function(option)`当option为obj时，可以选择option的显示值
	- `testOptionEqual:function(option1,option2)`配合transformOption使用，判断option是否相等
	- `renderContainer:function(optionNodes)`
	- `selectedOption` 初始选中选项，代码中用到setState时**必写**
	- `selectedIndex` 初始选中下标

### MtPicker
滚轮式多选一按钮
- 必写props
	- `options: array`：选项数组
	- `onSelect:function(selectedOption,selectedIndex)` 选中时的回调
- 可选props
    - `style: Object`
	- `renderOption:function(option,selected,onSelect,index)` 应返回一个选项node，默认node为选项值，被选中时有对勾
	- `transformOption:function(option)`当option为obj时，可以选择option的显示值
	- `testOptionEqual:function(option1,option2)`配合transformOption使用，判断option是否相等
	- `renderContainer:function(optionNodes)`
	- `selectedOption` 初始选中选项，代码中用到setState时**必写**
	- `selectedOptionColor: string` android only
	- `selectedOptionSize: number` android only
	- `optionStyle: Object` iOS only


###MtCheckItem
选中按钮
#### props
- 必写props
   - `checked:bool`:是否选中
   - `onPress: function(checked)`
- 可选props
    - `size:number`大小
    - `disabled:bool`按钮是否可按
    - `backgroundColor: string`背景颜色
    - `iconColor: string`图标颜色
    - `borderColor: string` 边框颜色

###MtWord
环中一个字
#### props
- 可选props
    - `size:number`大小
    - `color:string`颜色
    - `style: object`字样式
    - `containerStyle: string`容器样式

### MtCheckBox
多选多按钮
#### props
- 必写props
	- `options: array`：选项数组
	- `selectedOption:array` 选中的选项数组
	- `onSelect:function(selectedOption,selected，indexInOptions)` 选中时的回调
- 可选props
	- `renderOption:function(option,selected,onSelect,index)` 应返回一个选项node，默认node为选项值，被选中时有对勾
	- `transformOption:function(option)`当option为obj时，可以选择option的显示值
	- `testOptionEqual:function(option1,option2)`配合transformOption使用，判断option是否相等
	- `containerStyle:Object`
	 		

### MtEditablePanel
可选择多项面板
#### props
- 必写props
	- `items:array` 多项数组
	- `renderItem:function(item,index,editable,itemSize)`  **最好**和renderItem的大小一致（因为item默认居中布局，否则容易有空白)
- 可选props
	- `editable:bool`是否可编辑，默认为false
	- `onClickInEditing:function(item,index,selected)`在可编辑状态下点击每项的回调函数
	- `onClick(item,index)` 在不可编辑状态下点击每项的回调函数,默认为全屏显示该项
	- `containerStyle:Object`面板样式，通常情况可不写，一般写时只需决定是否有边框
	- `disableAdd:bool`:是否有尾部加号框，默认为false
	- `onAdd:function` 点击尾部加号框时的回调
	- `itemSize:number`每项的大小（暂只为方形）

### MtBadge
消息数量展示
#### props
- 必写props
	- `number:number`数量
- 可选props
	- `style`文字样式
	- `containerStyle`文字外围容器样式

### MtSwiper
轮播组件，可用于显示图片、广告等
#### props
- 可选props
	- `height:number`整个组件高度，默认flex：1
	- `width:number`整个组件宽度，默认flex：1
	- `style:object`整个组件样式
	- `dotStyle:object`小点的样式
	- `activeDotStyle:object`小点激活时的样式
	- `renderPagination:function`:页码完全自定义渲染函数（Android对absolute为负值支持有问题）
	- `autoplay:bool`是否自动播放
-  [More detail props](https://github.com/leecade/react-native-swiper)

### MtEdit
带有Label的textInput组件
#### props
- 必写props 
	- `title: string` label显示内容
- 可选props
	- `titleStyle:Object`label样式
	- `style:Object`input部分样式
	- `containerStyle:Object`整体样式

### MtLabelBar
带有label的内容展示横条
#### props
- 必写props
	- `title:string` label显示内容
-  可选props
	- `value:string`与label相对应的值 	
	- `titleStyle:Object`label样式
	- `style:Object`value部分样式
	- `disableIcon: bool`是否显示Icon
	- `disablePress: bool`是否可以点击
	- `containerStyle:Object`整体样式
	
### MtFloatingBar
带有倒计时功能的浮动横条
#### props
-  可选props
	- `message:string`显示的内容 	
	- `deadline:number`截止时间(单位:毫秒)
	- `onEnd: func` 倒计时结束时的回调函数
	- `countdownMessage: func`倒计时显示内容
	- `style:Object`文字样式
	- `containerStyle:Object`整体样式 		

## API Component	
	
### MtToast	
android like 组件
#### method
- static show(message:string, option:object)
    - option
        - `duration: number` 显示时间长短
        - `position: number` 正数表示离顶部距离,负数表示离底部距离,0表示正中央
        - `animation: bool` 是否有动画
        - `shadow: bool` toast 元素是否有阴影
        - `onShow: func`
        - `onShown: func`
        - `onHide: func`
        - `onHidden: func`
- static hide(handler)
- [more detail](https://github.com/magicismight/react-native-root-toast)

### MtKeyboardView
用于解决ios、android的键盘遮挡问题
#### props
单个TextInput和多个TextInput的解决方案详情在example中,注意注释中标注import的部分,为必写内容

	
