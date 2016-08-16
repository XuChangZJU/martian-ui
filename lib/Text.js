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

class MtW2 extends Component {
    render() {
        const {style,...props} =this.props;
        return (
            <Text
                style={[styles.w2,style]}
                {...props}>
            </Text>
        );
    }
}

class MtW3 extends Component {
    render() {
        const {style,...props} =this.props;
        return (
            <Text
                style={[styles.w3,style]}
                {...props}>
            </Text>
        );
    }
}

class MtM2 extends Component {
    render() {
        const {style,...props} =this.props;
        return (
            <Text
                style={[styles.m2,style]}
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

class MtL4 extends Component {
    render() {
        const {style,...props} =this.props;
        return (
          <Text
            style={[styles.l4,style]}
            {...props}>
          </Text>
        );
    }
}
class MtR4 extends Component {
    render() {
        const {style,...props} =this.props;
        return (
          <Text
            style={[styles.r4,style]}
            {...props}>
          </Text>
        );
    }
}

const scale = Dimensions.get('window').width / 320;

function normalize(size) {
    return Math.round(scale * size);
}

const styles = StyleSheet.create( {
    text:{
        // fontFamily: 'Cochin',
        fontSize: normalize(14),
        color: '#b4b4b4'
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
        fontSize: normalize(14),
        color: '#262626'
    },
    t3: {
        fontSize: normalize(12),
        color: '#262626'
    },
    w2: {
        fontSize: normalize(14),
        color: 'white',
    },
    w3: {
        fontSize: normalize(12),
        color: 'white',
    },
    m2: {
        fontSize: normalize(14),
        color: '#ff630e',
    },
    l2: {
        fontSize: normalize(14),
        color: '#8f8f8f',
    },
    l3: {
        fontSize: normalize(12),
        color: '#8f8f8f',
    },
    l4: {
        fontSize: normalize(10),
        color: '#8f8f8f',
    },
    r4: {
        fontSize: normalize(10),
        color: '#ff0000',
    },
    label: {
        fontSize: normalize(14),
        // lineHeight: normalize(23),
        // color: '#7F91A7',
        // fontWeight: 'bold',
        color: '#262626',
    },

});

module.exports = {
    MtText,
    MtHeading,
    MtLabel,
    MtM2,
    MtW2,
    MtW3,
    MtT2,
    MtT3,
    MtL2,
    MtL3,
    MtL4,
    MtR4,
};