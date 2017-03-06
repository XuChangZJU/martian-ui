/**
 * Created by Hey on 2016/7/11.
 */
import React, {Component, PropTypes} from 'react';
import {StyleSheet, Text, View, Platform, Dimensions} from 'react-native';
import { main } from '../utils/color';

const WINDOW_WIDTH =Dimensions.get('window').width;
const containerWidth = WINDOW_WIDTH - 40;
const numberSize = 20;
const textWidths = [];



class StateFlow extends Component {


    render() {
        const { states, current,containerStyle } = this.props;
        let totalTextWidth = 0;
        const length =  states.length;
        const content = states.map((item, index) => {
            const colorStyle = index <= current ? {color: main}: null;
            const width = calcTextWidth(item.length);
            textWidths.push(width);
            totalTextWidth += width;
            return (
                <Text style={[styles.text,colorStyle,{width}]}
                      key={index}>
                    {item}
                </Text>
            );
        });

        let flow = [];
        const gapWidth = (containerWidth - totalTextWidth) / (length-1);
        for ( let i =0; i<length; i++) {
            const numberColor = (i <= current) ? { backgroundColor: main} : null;
            const lineColor = (i < current) ? { backgroundColor: main} : null;
            const lineWidth = gapWidth + (textWidths[i]-numberSize)*0.5 + (textWidths[i+1]-numberSize)*0.5 ;
            const marginLeft = i==0 ? (textWidths[i]-numberSize)*0.5 : 0;
            const marginRight = i=== length-1 ? (textWidths[i]-numberSize)*0.5 : 0;
            flow.push(
                <View
                    key={i}
                    style={[styles.numberContainer,numberColor,{marginLeft,marginRight}]}
                >
                  <Text
                      style={[styles.number]}
                  >
                      {i+1}
                  </Text>
                </View>
            );
            if (i !== length-1) {
                flow.push(
                    <View style={[styles.line,{width: lineWidth},lineColor] } key={ i+length }/>
                );
            }
        }

        return (
            <View style={[styles.container,containerStyle]}>
              <View style={styles.row1}>
                  {flow}
              </View>
              <View style={styles.row2}>
                  {content}
              </View>
            </View>
        );

    }

}

function calcTextWidth(size) {
    return (size+1)/2*14;
}


const styles = StyleSheet.create({
    container: {
        height: 80,
        // backgroundColor : 'lightgray',
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 10,
        width: containerWidth
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    row2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    text: {
        fontSize: 14,
        // width: 30,
        color: 'silver',
        textAlign: 'center',
    },
    numberContainer:{
        height: numberSize,
        width: numberSize,
        borderRadius: numberSize/2,
        backgroundColor: 'silver',
        justifyContent: 'center',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    number: {
        fontSize: 14,
        color: 'white',
        // textAlign: 'center',
    },
    line: {
        height:2,
        backgroundColor: 'silver',
    }
});

module.exports = StateFlow;

StateFlow.propTypes = {
    states: PropTypes.array.isRequired,
    current: PropTypes.number.isRequired
};
