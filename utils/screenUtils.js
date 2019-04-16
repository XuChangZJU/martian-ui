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
const designWidth = 750.0;
const designHeight = 1334.0;


// 根据dp获取屏幕的px
const screenPxW = PixelRatio.getPixelSizeForLayoutSize(screenW);
const screenPxH = PixelRatio.getPixelSizeForLayoutSize(screenH);


/**
 * 设置text
 * @param size  px
 * @returns {Number} dp
 */
function setSpText(size) {
    const scaleWidth = screenW / designWidth;
    const scaleHeight2 = screenH / designHeight;
    const scale = Math.min(scaleWidth, scaleHeight2);
    const size2 = Math.round(size * scale / fontScale + 0.5);
    return size2;
}

/**
 * 设置高度
 * @param size  px
 * @returns {Number} dp
 */
function scaleHeight(size) {
    const scaleHeight2 = size * screenPxH / designHeight;
    const size2 = Math.round((scaleHeight2 / pixelRatio + 0.5));
    return size2;
}

/**
 * 设置宽度
 * @param size  px
 * @returns {Number} dp
 */
function scaleSize(size) {
    const scaleWidth = size * screenPxW / designWidth;
    const size2 = Math.round((scaleWidth / pixelRatio + 0.5));
    return size2;
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

const isIos = Platform.OS === 'ios';
const statusBarHeight = getStatusBarHeight();
const safeAreaViewHeight = isIphoneX() ? 34 : 0;
const androidAPILevel = !isIos && Platform.Version;
const appBarHeight = isIos ? 44 : 50;

//状态栏的高度
function getStatusBarHeight() {
    if (!isIos) return StatusBar.currentHeight;
    if (isIphoneX()) {
        return 44;
    }
    return 20;
}

module.exports = {
    width: screenW,
    height: screenH,
    fontScale: fontScale,
    pixelRatio: pixelRatio,

    scaleSize: scaleSize,
    scaleHeight: scaleHeight,
    setSpText: setSpText,

    isIphoneX: isIphoneX,
    ifIphoneX: ifIphoneX,
    isIos: isIos,
    statusBarHeight: statusBarHeight,
    safeAreaViewHeight: safeAreaViewHeight,
    androidAPILevel: androidAPILevel,
    getStatusBarHeight: getStatusBarHeight,
    appBarHeight: appBarHeight,
};