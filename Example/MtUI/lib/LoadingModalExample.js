/**
 * Created by Hey on 2016/6/16.
 */
var React = require('react');
var ReactNative = require('react-native');
var {
    Alert,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} = ReactNative;

var MtLoadingModal = require('martian-ui').MtLoadingModal;

exports.title  = 'MtLoadingModal';
exports.description = 'A component covers the native view with loading state';
exports.examples = [
    {
        title: 'Plain LoadingModal',
        render(): ReactElement {
            return <Sample />;
        }
    },
    {
        title: 'Todo',
        render: function () {
            return (
                <Text>
                    对props有疑义的请联系XiaoMing
                </Text>
            );
        }
    }];

class Sample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:true
        };
    }

    componentDidMount() {
        setTimeout(()=> {   this.setState({loading:false}) },3000)
    }

    render() {
        if(this.state.loading)
            return(
                <MtLoadingModal
                    visible={this.state.loading}
                >
                </MtLoadingModal>
            );
        return (
            <TouchableHighlight onPress={()=> {
                this.setState({loading:true});
                setTimeout(()=> {   this.setState({loading:false}) },3000) }
            }
            >
                <Text style = { {height:30,justifyContent:'center',backgroundColor:'silver',textAlign:'center',fontSize:20}}>show</Text>
            </TouchableHighlight>
        )
    }
}