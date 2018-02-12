import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Header } from 'react-native-elements';

import { backgroundColor, lightColor, strongColor } from '../constants';

import AddInsuranceForm from '../components/AddInsuranceForm/AddInsuranceForm';

class AddInsuranceScreen extends Component {
    render() {
        const { screenStyle, headerOuterStyle, componentTitleStyle } = styles;

        return (
            <View style={screenStyle}>
                <StatusBar hidden />
                <Header
                    outerContainerStyles={headerOuterStyle}
                    centerComponent={{ text: 'Add Insurance', style: componentTitleStyle }}
                />
                <AddInsuranceForm />
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
        backgroundColor: strongColor
    },
    componentTitleStyle: {
        color: lightColor,
        fontSize: 20
    }
}

export default AddInsuranceScreen;