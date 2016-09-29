/**
 * Created by Hey on 16/7/04.
 */
import React, {Component} from 'react';
import { StyleSheet, Text, View, Platform, Image, TouchableOpacity } from 'react-native';
import MtIcon from 'martian-icon';

/*
 const Icon = require('react-native-vector-icons/MaterialIcons');
 class BackBtn extends Component{
 render() {
 return (
 <Icon.Button name="arrow-back" size={30} color="white" underlayColor="teal" backgroundColor="transparent" style={{width: 40}} onPress={this.props.onClick}/>
 )
 }
 }
 class MtNavBar extends Component{
 render(){
 const hasBackBtn = (this.props.hasBackBtn !== undefined) ? this.props.hasBackBtn : true;
 const backBtn = hasBackBtn ?
 (this.props.backBtn ? this.props.backBtn : (
 <BackBtn onClick={this.props.pop}/>
 )) : (
 <View style={{width: 40}}/>
 );
 const rightIcon = this.props.rightIcon || (
 <View style={{width: 40}}/>
 );
 return (
 <View style={[styles.container, styles.navBar, this.props.style]}>
 {backBtn}
 <Text style={[styles.navBarTitle, this.props.titleStyle]}>{this.props.title}</Text>
 {rightIcon}
 </View>
 );
 }
 }

 var styles = StyleSheet.create({
 container: {
 justifyContent: 'center',
 alignItems: 'center',
 flexDirection: 'row',
 backgroundColor: 'white'
 },
 navBar: {
 height: 50,
 backgroundColor: 'black'
 },
 navBarTitle: {
 color: 'white',
 flex: 1,
 textAlign: 'center',
 fontSize: 20
 },

 });

 module.exports = MtNavBar;*/

class NavBar extends React.Component {

    render() {
        const {leftItem, title, rightItem, foreground} = this.props;
        const titleColor = foreground === 'dark' ? '#032250' : '#262626';
        const itemsColor = foreground === 'dark' ? '#7F91A7' : '#262626';
        // const itemsColor = foreground === 'dark' ? 'black' : 'white';

        const content = React.Children.count(this.props.children) === 0
            ? <Text style={[styles.titleText, {color: titleColor}]}>
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
                style={styles.itemWrapper}>
                {content}
            </TouchableOpacity>
        );
    }
}


var STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 25;
var HEADER_HEIGHT = Platform.OS === 'ios' ? 44 + STATUS_BAR_HEIGHT : 56 + STATUS_BAR_HEIGHT;

var styles = StyleSheet.create({
    toolbarContainer: {
        paddingTop: STATUS_BAR_HEIGHT,
    },
    toolbar: {
        height: HEADER_HEIGHT - STATUS_BAR_HEIGHT,
    },
    header: {
        backgroundColor: 'white',
        // backgroundColor: 'black',
        paddingTop: STATUS_BAR_HEIGHT,
        height: HEADER_HEIGHT,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#d8d8d8'
    },
    titleText: {
        color: 'white',
        // fontWeight: 'bold',
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
        fontSize: 14,
        color: '#262626',
    },
});

const Header =  NavBar ;
Header.height = HEADER_HEIGHT;
module.exports = NavBar;
