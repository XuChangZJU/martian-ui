/**
 * Created by Bly on 2016/4/11.
 */
import React, {Component} from "react";
import {StyleSheet, Text, Dimensions} from "react-native";
class MtText extends Component {
    render() {
        const {style,...props} =this.props;
        return (
          <Text
            style={[styles.text,style]}
            {...props}>
          </Text>
        );
    }
}

class MtT2 extends Component {
    render() {
        const {style,...props} =this.props;
        return (
          <Text
            style={[styles.t2,style]}
            {...props}>
          </Text>
        );
    }
}

class MtT3 extends Component {
    render() {
        const {style,...props} =this.props;
        return (
          <Text
            style={[styles.t3,style]}
            {...props}>
          </Text>
        );
    }
}

class MtHeading extends Component {
    render() {
        const {style,...props} =this.props;
        return (
          <Text
            style={[styles.h1,style]}
            {...props}>
          </Text>
        );
    }
}

class MtLabel extends Component {
    render() {
        const {style,...props} =this.props;
        return (
          <Text
            style={[styles.label,style]}
            {...props}>
          </Text>
        );
    }
}

class MtL2 extends Component {
    render() {
        const {style,...props} =this.props;
        return (
          <Text
            style={[styles.l2,style]}
            {...props}>
          </Text>
        );
    }
}

class MtL3 extends Component {
    render() {
        const {style,...props} =this.props;
        return (
          <Text
            style={[styles.l3,style]}
            {...props}>
          </Text>
        );
    }
}

const scale = Dimensions.get('window').width / 375;

function normalize(size: number): number {
    return Math.round(scale * size);
}

const styles = StyleSheet.create( {
    text:{
        // fontFamily: 'Cochin',
        fontSize: 20,
        color: 'black'
        // fontWeight: 'bold',
    },
    h1: {
        fontSize: normalize(24),
        lineHeight: normalize(27),
        color: '#032250',
        fontWeight: 'bold',
        letterSpacing: -1,
        height:30
    },
    t2: {
        fontSize: normalize(18),
        color: 'black'
    },
    t3: {
        fontSize: normalize(14),
        color: 'black'
    },
    l2: {
        fontSize: normalize(18),
        color: 'gray',
    },
    l3: {
        fontSize: normalize(14),
        color: 'gray',
    },
    label: {
        fontSize: normalize(15),
        lineHeight: normalize(23),
        // color: '#7F91A7',
        fontWeight: 'bold',
        color: 'gray',
    },

});

module.exports = {
    MtText,
    MtHeading,
    MtLabel,
    MtT2,
    MtT3,
    MtL2,
    MtL3,
};