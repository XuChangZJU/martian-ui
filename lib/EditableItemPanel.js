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
  LayoutAnimation,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const WINDOW_WIDTH =Dimensions.get('window').width;
const containerWidth = WINDOW_WIDTH - 40;

class EditableItemPanel extends Component {

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = { views: [],};

  }



  render() {
    const {items, editable, containerStyle, onClickInEditing,onClick,disableAdd,renderItem,onAdd,itemSize} = this.props;
    let children;

    const itemStyle = { height: itemSize || 54,width:itemSize || 54 };
    const itemTotalSize = (itemSize || 54) + 2;
    const paddingLeft = (containerWidth - parseInt(containerWidth / itemTotalSize)*itemTotalSize-4)*0.5;

    children = items.map((item,index) =>
      <EditableItem key={index}
                    style={[styles.view, itemStyle]}
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

    if (!disableAdd) {
      const addItem = (
        <View style={[styles.view,itemStyle,styles.addItem]} key="addItem">
          <TouchableOpacity onPress={onAdd}>
            <Icon name="ios-add" size={40}/>
          </TouchableOpacity>
        </View>
      );
      children.push(addItem)
    }


    return(
      <ScrollView style={styles.container}>
        <View style={[styles.viewContainer,containerStyle,{paddingLeft}]}>
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
    this.state = { selected: false };

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.editable && this.props.editable !== nextProps.editable)
      this.setState({selected: false })
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    const { editable, item, index, renderItem, onClickInEditing, onClick,itemSize, ...props} = this.props;
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
               
          } }
      >
        <View
          {...props}
        >
          {renderItem(item,index,editable,itemSize)}
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
    // marginLeft: 20,
    // marginRight: 20,
  },
  viewContainer: {
    // flex: 1,
    width: containerWidth,
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
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
    height: 20,
    width: 20,
    borderRadius:10,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 2,
    bottom: 2
  }
});


EditableItemPanel.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  editable: PropTypes.bool
};

module.exports = EditableItemPanel;
