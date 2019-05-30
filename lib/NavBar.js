/**
 * Created by Hey on 16/7/04.
 */
import React from 'react';
import { StyleSheet, Text, View, Platform, Image, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import MtIcon from 'martian-icon';
import { isIphoneX, statusBarHeight, androidAPILevel, isIos, appBarHeight } from '../utils/screenUtils';

class NavBar extends React.Component {

    render() {
        const { leftItem, title, rightItem, foreground, titleStyle } = this.props;
        const titleColor = foreground === 'dark' ? 'white' : '#262626';
        const itemsColor = foreground === 'dark' ? 'white' : '#262626';

        const content = React.Children.count(this.props.children) === 0
            ? <Text style={[styles.titleText, {color: titleColor}, titleStyle]}>
                {title}
            </Text>
            : this.props.children;
        return (
            <View style={[styles.header, this.props.style]}>
                <View style={styles.leftItem}>
                    <ItemWrapper color={itemsColor} item={leftItem} />
                </View>
                <View
                    accessible={true}
                    accessibilityLabel={title}
                    accessibilityTraits="header"
                    style={styles.centerItem}>
                    {content}
                </View>
                <View style={styles.rightItem}>
                    <ItemWrapper color={itemsColor} item={rightItem} />
                </View>
            </View>
        );
    }

}

class ItemWrapper extends React.Component {

    render() {
        const {item, color} = this.props;
        if (!item) {
            return null;
        }

        let content;
        const {title, icon, iconColor, layout, onPress, renderItem, image} = item;

        if (layout !== 'icon' && title) {
            content = (
                <Text style={[styles.itemText, {color}]}>
                    {title.toUpperCase()}
                </Text>
            );
        } else if (image) {
            content = <Image source={image} />;
        }
        else if (icon) {
            content = <MtIcon color="black" {...icon} size={18} />;
        }

        else if (renderItem) {
            content = renderItem();
        }

        return (
            <TouchableOpacity
                accessibilityLabel={title}
                accessibilityTraits="button"
                onPress={onPress}
                disabled={!onPress}
                style={styles.itemWrapper}>
                {content}
            </TouchableOpacity>
        );
    }
}
let _statusBarHeight = statusBarHeight;
if (!isIos && androidAPILevel < 19) {
    _statusBarHeight = 0;
}

const BAR_STYLE = !isIos && androidAPILevel >= 19 ? 'dark-content' : 'default';
const HEADER_HEIGHT = appBarHeight + _statusBarHeight;

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        paddingTop: _statusBarHeight, //adapt for android 4.3
        height: HEADER_HEIGHT,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#d8d8d8'
    },
    titleText: {
        color: 'white',
        fontSize: 20,
    },
    leftItem: {
        flex: 1,
        alignItems: 'flex-start',
    },
    centerItem: {
        flex: 2,
        alignItems: 'center',
    },
    rightItem: {
        flex: 1,
        alignItems: 'flex-end',
    },
    itemWrapper: {
        padding: 11,
    },
    itemText: {
        letterSpacing: 1,
        fontSize: 15,
        color: '#262626',
    },
});

const Header =  NavBar ;
Header.height = HEADER_HEIGHT;
Header.statusBarHeight = statusBarHeight;
Header.statusBarStyle = BAR_STYLE;
module.exports = NavBar;
