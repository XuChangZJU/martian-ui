/**
 * Created by Hey on 2016/6/16.
 */
import React, {Component, PropTypes} from 'react';
import { StyleSheet, RefreshControl, ListView, View, Text } from 'react-native';
import { separator } from '../utils/color';
import StaticContainer from 'react-native/Libraries/Components/StaticContainer.react';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class MtListView extends Component {
    constructor(props) {
        super(props);
    }


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

    renderFooter = () => {
        //Temporary condition
        return (
            <StaticContainer>
                {
                    this.props.data && this.props.data.length > 5 &&
                    <Text style={styles.bottom} >
                        已经到底了
                    </Text>
                }
            </StaticContainer>
        );
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
        height: 1,
        backgroundColor: separator,
        // backgroundColor: 'red',
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