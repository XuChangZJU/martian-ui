/**
 * Created by Hey on 2016/7/26.
 */
import React, {Component, PropTypes} from "react";
import {
    StyleSheet,
    TouchableWithoutFeedback,
    Platform,
    UIManager,
    View,
    TouchableOpacity,
    ScrollView,
    Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MtIcon from "martian-icon";

const WINDOW_WIDTH = Dimensions.get('window').width;
const containerWidth = WINDOW_WIDTH;


class EditableItemPanel extends Component {

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {views: [],};

  }


  render() {

    const {items, editable, containerStyle, onClickInEditing, onClick, disableAdd, renderItem, onAdd, itemSize} = this.props;
    let children;

    const itemStyle = {height: itemSize || 54, width: itemSize || 54};
    // const itemTotalSize = (itemSize || 54) + 2;
    // const paddingLeft = (containerWidth - parseInt(containerWidth / itemTotalSize) * itemTotalSize ) * 0.5;
    const paddingLeft = (containerWidth - 4*itemSize - 6 ) * 0.5;
    children = items.map((item, index) => {
          const marginLeft = index % 4 ===0 ? 0 : 1;
          const marginRight = index % 4 === 3 ? 0 : 1;
          return (
              <EditableItem key={index}
                            style={[styles.view, {marginLeft}, {marginRight}, itemStyle]}
                            editable={editable}
                            onClickInEditing={onClickInEditing}
                            onClick={onClick}
                            renderItem={renderItem}
                            item={item}
                            index={index}
                            itemSize={itemSize}
              >
              </EditableItem>
          );
        }

    );

    if (!disableAdd) {
      const addItem = (
          <TouchableOpacity onPress={onAdd} key="addItem">
            <View style={[styles.view,itemStyle,styles.addItem]}>
              <MtIcon group="core" name="add" color="gray" size={20}/>
            </View>
          </TouchableOpacity>
      );
      children.push(addItem)
    }


    return (
        <ScrollView style={styles.container}>
          <View style={[styles.viewContainer,containerStyle,{paddingLeft:paddingLeft}]}>
            {children}
          </View>
        </ScrollView>
    );

  }
}

class EditableItem extends Component {
  // 构造
  constructor(props) {
    super(props);
    this.state = {selected: false};

    // if (Platform.OS === 'android') {
    //   UIManager.setLayoutAnimationEnabledExperimental(true);
    // }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.editable && this.props.editable !== nextProps.editable)
      this.setState({selected: false})
  }

  // componentWillUpdate(nextProps, nextState) {
  //   if ( nextProps != this.props || nextState != this.state)
  //   LayoutAnimation.spring();
  // }

  //<MtIcon name="right" group="core" size={18} color="white"/>
  render() {
    const {editable, item, index, renderItem, onClickInEditing, onClick, itemSize, ...props} = this.props;
    const flag = (!this.state.selected || !editable) ? null :
        <View style={styles.flag}>
          <Icon name="ios-checkmark" size={20} color="white"/>
        </View>;

    const V = (
        <TouchableWithoutFeedback
            onPress={() => {
                    if(editable) {
                        onClickInEditing && onClickInEditing(item,index,!this.state.selected);
                        this.setState({selected: !this.state.selected});
                    }
                    else {
                        onClick && onClick(item,index);
                    }
                }}
        >
          <View
              {...props}
          >
            {renderItem(item, index, editable, itemSize)}
            {flag}
          </View>
        </TouchableWithoutFeedback>
    );


    return V;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderColor: 'blue',
    // borderWidth: 1,
    // marginLeft: 20,
    // marginRight: 20,
  },
  viewContainer: {
    // flex: 1,
    width: containerWidth,
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',

    // borderWidth: 1,
    // borderWidth: 2,
    // borderRightWidth:3,
  },
  view: {
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addItem: {
    borderWidth: 2,
    borderColor: 'gray'
  },
  flag: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: 'white',
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 2,
    bottom: 2,
  }
});


EditableItemPanel.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  editable: PropTypes.bool
};

module.exports = EditableItemPanel;
