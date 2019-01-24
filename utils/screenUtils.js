/**
 * 屏幕工具类 以及一些常用的工具类封装
 * ui设计基准,iphone 6 2倍图
 * width:750px
 * height:1334px
 * @2x
 */
import {
    PixelRatio,
    Dimensions,
    Platform,
} from 'react-native';

const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
const fontScale = PixelRatio.getFontScale();
const pixelRatio = PixelRatio.get();
//像素密度
const DEFAULT_DENSITY = 2;
//px转换成dp
//以iphone6为基准,如果以其他尺寸为基准的话,请修改下面的defaultWidth和defaultHeight为对应尺寸即可. 以下为1倍图时
const defaultWidth = 375;
const defaultHeight = 667;
const w2 = defaultWidth / DEFAULT_DENSITY;
//px转换成dp
const h2 = defaultHeight / DEFAULT_DENSITY;

//缩放比例
const _scaleWidth = screenW / defaultWidth;
const _scaleHeight = screenH / defaultHeight;

// iPhoneX
const X_WIDTH = 375;
const X_HEIGHT = 812;

/**
 * 屏幕适配,缩放size , 默认根据宽度适配，纵向也可以使用此方法
 * 横向的尺寸直接使用此方法
 * 如：width ,paddingHorizontal ,paddingLeft ,paddingRight ,marginHorizontal ,marginLeft ,marginRight
 * @param size 设计图的尺寸
 * @returns {number}
 */
function scaleSize(size) {
    return size * _scaleWidth;
}

/**
 * 屏幕适配 , 纵向的尺寸使用此方法应该会更趋近于设计稿
 * 如：height ,paddingVertical ,paddingTop ,paddingBottom ,marginVertical ,marginTop ,marginBottom
 * @param size 设计图的尺寸
 * @returns {number}
 */
function scaleHeight(size) {
    return size * _scaleHeight;
}

/**
 * 设置字体的size（单位px）
 * @param size 传入设计稿上的px , allowFontScaling 是否根据设备文字缩放比例调整，默认不会
 * @returns {Number} 返回实际sp
 */
function setSpText(size, allowFontScaling) {
    const scale = Math.min(_scaleWidth, _scaleHeight);
    const fontSize = allowFontScaling ? 1 : fontScale;
    return size * scale / fontSize;
}


/* 最初版本尺寸适配方案 也许你会更喜欢这个*/
function scaleSizeByOld(size) {
    let scaleWidth = screenW / w2;
    let scaleHeight = screenH / h2;
    let scale = Math.min(scaleWidth, scaleHeight);
    size = Math.round((size * scale + 0.5));
    return size / DEFAULT_DENSITY;
}

function setSpTextByOld(size) {
    const scaleWidth = screenW / w2;
    const scaleHeight2 = screenH / h2;
    const scale = Math.min(scaleWidth, scaleHeight2);
    const size2 = Math.round((size * scale + 0.5));

    return size2 / DEFAULT_DENSITY * fontScale;
}

/**
 * 判断是否为iphoneX
 * @returns {boolean}
 */
function isIphoneX() {
    return (Platform.OS === 'ios' && (Number(((screenH / screenW) + "").substr(0,4)) * 100) === 216);
}

/**
 * 根据是否是iPhoneX返回不同的样式
 * @param iphoneXStyle
 * @param iosStyle
 * @param androidStyle
 * @returns {*}
 */
function ifIphoneX(iphoneXStyle, iosStyle = {}, androidStyle) {
    if (isIphoneX()) {
        return iphoneXStyle;
    }
    if (Platform.OS === 'ios') {
        return iosStyle;
    }
    if (androidStyle) return androidStyle;
    return iosStyle;
}


module.exports = {
    width: screenW,
    height: screenH,
    fontScale: fontScale,
    pixelRatio: pixelRatio,

    scaleSize: scaleSize,
    scaleHeight: scaleHeight,
    setSpText: setSpText,

    scaleSizeByOld: scaleSizeByOld,
    setSpTextByOld: setSpTextByOld,

    isIphoneX: isIphoneX,
    ifIphoneX: ifIphoneX,
};