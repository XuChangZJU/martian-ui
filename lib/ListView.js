/**
 * Created by Hey on 2016/6/16.
 */
import React, {Component, PropTypes} from 'react';
import { StyleSheet, RefreshControl, ListView, View, Text } from 'react-native';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class MtListView extends Component {

    scrollTo(coordinate) {
        this.refs.list.scrollTo(coordinate);
    }

    render() {
        const {style, data,refreshing,onRefresh } = this.props;
        const dataWithRows = ds.cloneWithRows(data);
        return (
            <ListView
                dataSource={dataWithRows}
                ref="list"
                renderSeparator={commonRenderSeparator}
                renderFooter={commonRenderFooter}
                {...this.props}
                refreshControl={ onRefresh &&
                               <RefreshControl
                                 refreshing={refreshing || false}
                                 onRefresh={onRefresh}
                               />
                                 }
            >

            </ListView>
        )
    }

}

function commonRenderSeparator (sectionID, rowID, adjacentRowHighlighted) {
    /* var style = styles.rowSeparator;
     if (adjacentRowHighlighted) {
     style = [style, styles.rowSeparatorHide];
     }
     return (
     <View key={'SEP_' + sectionID + '_' + rowID}  style={style}/>
     );*/
    return (
        <View
            key={`${sectionID}-${rowID}`}
            style={{
          height: adjacentRowHighlighted ? 4 : 1,
          backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#e8e8e8',
        }}
        />
    );
}



function commonRenderFooter() {
    // if(isLoading) {
    //     return (
    //       <View  style={{alignItems: 'center'}}>
    //           <ProgressBarAndroid/>
    //       </View>
    //     );
    // }
    // else{
    return (
        <Text style={styles.bottom} >
            没有更多数据
        </Text>
    );
    // }
}

const styles = StyleSheet.create( {
    rowSeparator: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 1,
        marginLeft: 4
    },
    rowSeparatorHide: {
        opacity: 0.0
    },
    bottom: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 14,
        color: '#8f8f8f',
    }

});

MtListView.propTypes = {
    data:PropTypes.array,
    refreshing:PropTypes.bool,
    onRefresh:PropTypes.func
};

module.exports = MtListView;