/**
 * Created by lavystord on 16/9/9.
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import { MtButton, MtTabBar } from "martian-ui";
import MultipleInputExample from './MultipleInputExample';
import SingleInputExample from './SingleInputExample';

var Sample = React.createClass({
    statics: {
        title: 'MtKeyboardView',
        description: 'Base component for views that automatically or manually adjust their height or position to move out of the way of the keyboard.'
    },

    render() {
        return <Navigator
            style={{flex: 1 }}
            initialRoute={{}}
            renderScene={this.renderScene}
        />;
    },

    renderScene(route, nav) {
        switch (route.id) {
            case 'single':
                return <SingleInputExample />;
            case 'multiple':
                return <MultipleInputExample />;
            default:
                return <View style={styles.container}>
                    <MtButton
                        onPress={() => nav.push({id: 'single', })}
                    >
                        Single  Input Example
                    </MtButton>

                    <MtButton
                        onPress={() => nav.push({id: 'multiple', })}
                    >
                        Multiple Input Example
                    </MtButton>
                </View>;
        }
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    },
    button: {
        padding: 10,
        backgroundColor: 'blue',
    },
});

module.exports = Sample;