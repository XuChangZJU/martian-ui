/**
 * Created by Hey on 2016/6/16.
 */

'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    Alert,
    StyleSheet,
    Text,
    ListView,
    RefreshControl,
    View,
    Image
} = ReactNative;

var MtListView = require('martian-ui').MtListView;


var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


/*exports.title  = 'MtListView';
exports.description = 'A Wrapped  Component with scrollable list of data.';
exports.examples = [
    {
        title: 'Basic ListView',
        render(): ReactElement {
            return <Sample />;
        }

    },

];*/


var Sample = React.createClass( {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         loading:false,
    //         dataWareHouse: this._genRows({}),
    //         dataSource: ds.cloneWithRows(this._genRows({})),
    //     };
    // },

    statics: {
        title: 'MtListView',
        description: 'A Wrapped  Component with scrollable list of data.'
    },

    getInitialState: function() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(this._genRows({})),
            loading:false,
            dataWareHouse: this._genRows({})
        };
    },




    
    render() {
        return (
            <MtListView
                data={this.state.dataWareHouse}
               /* dataSource={this.state.dataSource}*/
                renderRow={this._renderRow}
               /* refreshControl={
                               <RefreshControl
                                 refreshing={this.state.loading}
                                 onRefresh={this._onRefresh}
                               />
                               }*/
                refreshing={this.state.loading}
                onRefresh={this._onRefresh}
            >
            </MtListView>
        );
    },

    _onRefresh() {
         alert('hello');
        this.setState({loading: true});
        setTimeout(()=> {   this.setState({loading:false}) },3000)
    },

    _renderRow(rowData, sectionID, rowID, highlightRow) {
    var rowHash = Math.abs(hashCode(rowData));
    var imgSource = THUMB_URLS[rowHash % THUMB_URLS.length];
    return (
                <View>
                    <View style={styles.row}>
                         <Image style={styles.thumb} source={imgSource} />
                         <Text style={styles.text}>
                            {rowData + ' - ' + LOREM_IPSUM.substr(0, rowHash % 301 + 10)}
                         </Text>
                    </View>
                </View>
    );
},
    
    
    _genRows(pressData: {[key: number]: boolean}): Array<string> {
    var dataBlob = [];
    for (var ii = 0; ii < 100; ii++) {
        var pressedText = pressData[ii] ? ' (pressed)' : '';
        dataBlob.push('Row ' + ii + pressedText);
    }
    return dataBlob;
    }
    
    

});


var hashCode = function(str) {
    var hash = 15;
    for (var ii = str.length - 1; ii >= 0; ii--) {
        hash = ((hash << 5) - hash) + str.charCodeAt(ii);
    }
    return hash;
};

var THUMB_URLS = [
    require('./Thumbnails/like.png'),
    require('./Thumbnails/dislike.png'),
    require('./Thumbnails/call.png'),
    require('./Thumbnails/fist.png'),
    require('./Thumbnails/bandaged.png'),
    require('./Thumbnails/flowers.png'),
    require('./Thumbnails/heart.png'),
    require('./Thumbnails/liking.png'),
    require('./Thumbnails/party.png'),
    require('./Thumbnails/poke.png'),
    require('./Thumbnails/superlike.png'),
    require('./Thumbnails/victory.png'),
];


var LOREM_IPSUM = 'Lorem ipsum dolor sit amet, ius ad pertinax oportere accommodare, an vix civibus corrumpit referrentur. Te nam case ludus inciderint, te mea facilisi adipiscing. Sea id integre luptatum. In tota sale consequuntur nec. Erat ocurreret mei ei. Eu paulo sapientem vulputate est, vel an accusam intellegam interesset. Nam eu stet pericula reprimique, ea vim illud modus, putant invidunt reprehendunt ne qui.';



var styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6',
    },
    thumb: {
        width: 64,
        height: 64,
    },
    text: {
        flex: 1,
    },
});

module.exports = Sample;