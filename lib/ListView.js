/**
 * Created by Hey on 2016/6/16.
 */
import React, {
    Component,
    PropTypes,
} from 'react';
import {
    StyleSheet,
    Text,
    ListView,
    TextInput,
    View
} from 'react-native';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class MtListView extends Component {

    render() {
        const {style, data} = this.props;
        const dataWithRows = ds.cloneWithRows(data);
        return (
           <ListView
               {...this.props}
               dataSource={dataWithRows}
               renderSeparator={commonRenderSeparator}
               renderFooter={commonRenderFooter}
           >

           </ListView>
        )
    }

}

function commonRenderSeparator (
    sectionID: number ,
    rowID: number ,
    adjacentRowHighlighted: boolean
) {
    var style = styles.rowSeparator;
    if (adjacentRowHighlighted) {
        style = [style, styles.rowSeparatorHide];
    }
    return (
        <View key={'SEP_' + sectionID + '_' + rowID}  style={style}/>
    );
}



function commonRenderFooter(isLoading) {
    if(isLoading) {
        return (
            <View  style={{alignItems: 'center'}}>
                <ProgressBarAndroid/>
            </View>
        );
    }
    else{
        return <View style={styles.scrollSpinner} />;
    }
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
    scrollSpinner: {
        marginVertical: 20
    }

});

MtListView.propTypes = {
  data:PropTypes.array
};

module.exports = MtListView;