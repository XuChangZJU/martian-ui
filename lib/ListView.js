/**
 * Created by Hey on 2016/6/16.
 */
import React, {Component, PropTypes} from 'react';
import { StyleSheet, RefreshControl, ListView, View, Text, ActivityIndicator } from 'react-native';
import { separator, main as mainColor } from '../utils/color';
import StaticContainer from 'react-native/Libraries/Components/StaticContainer.react';
import { EatBeanLoader } from 'react-native-indicator'


var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class MtListView extends Component {
    constructor(props) {
        super(props);
        // this.renderFooter = this.renderFooter.bind(this);
    }


    scrollTo(coordinate) {
        this.refs.list.scrollTo(coordinate);
    }

    render() {
        const {style, data,refreshing,onRefresh } = this.props;
        const dataWithRows = data && ds.cloneWithRows(data);
        return (
            <ListView
                dataSource={dataWithRows}
                ref="list"
                renderFooter={this.renderFooter}
                renderSeparator={this.renderSeparator}
                {...this.props}
                refreshControl={ onRefresh &&
                               <RefreshControl
                                 refreshing={refreshing || false}
                                 onRefresh={onRefresh}
                               />
                                 }
            />
        )
    }

    /*renderFooter = () => {
        //Temporary condition
        if(this.props.loadingMore){
            return (
                <View style={styles.indicator}>
                    <EatBeanLoader  color={mainColor}  />
                </View>);

        }

        return (
            this.props.data && this.props.data.length > 5 &&
            <StaticContainer>
                <Text style={styles.bottom} >
                    已经到底了
                </Text>
            </StaticContainer>
        );
    }*/
    renderFooter = () => {
        return (
            <View style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                {this.props.loadingMore && <ActivityIndicator animating={true} size="small" />}
                {!this.props.hasMore && this.props.data && this.props.data.length > 5 &&
                <Text style={{ fontSize: 14, color: '#8f8f8f' }}>已经到底了</Text>}
            </View>
        )
    }

    renderSeparator = (sectionID, rowID) =>  <View style={styles.separator} key={rowID} />


}





const styles = StyleSheet.create( {
    rowSeparator: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 1,
        marginLeft: 4
    },
    separator: {
        height: 0.5,
        backgroundColor: separator,
        // backgroundColor: 'red',
    },
    bottom: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 14,
        color: '#8f8f8f',
    },
    indicator: {
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: 'transparent',
    }

});

MtListView.propTypes = {
    data:PropTypes.array,
    refreshing:PropTypes.bool,
    onRefresh:PropTypes.func
};

module.exports = MtListView;