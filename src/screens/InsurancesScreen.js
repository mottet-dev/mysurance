import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';

import { backgroundColor, lightColor, strongColor } from '../constants';
import InsurancesList from '../components/InsurancesList/InsurancesList';

class InsurancesScreen extends Component {
    render() {
        const { screenStyle, headerOuterStyle, componentTitleStyle } = styles;

        return (
            <View style={screenStyle}>
                <Header
                    outerContainerStyles={headerOuterStyle}
                    centerComponent={{ text: 'Mysurance', style: componentTitleStyle }}
                />
                <InsurancesList />
            </View>
        );
    }
}

const styles = {
    screenStyle: {
        backgroundColor,
        flex: 1,
    },
    headerOuterStyle: {
        backgroundColor: strongColor,
    },
    componentTitleStyle: {
        color: lightColor,
        fontSize: 20
    }
}

export default InsurancesScreen;