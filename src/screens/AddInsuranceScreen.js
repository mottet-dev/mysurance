import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Header } from 'react-native-elements';

import { backgroundColor, lightColor, strongColor } from '../constants';

import AddInsuranceForm from '../components/AddInsuranceForm/AddInsuranceForm';
import NavigationChevron from '../components/NavigationChevron/NavigationChevron';

class AddInsuranceScreen extends Component {
    render() {
        const { screenStyle, headerOuterStyle, componentTitleStyle } = styles;

        return (
            <View style={screenStyle}>
                <StatusBar hidden />
                <Header
                    leftComponent={<NavigationChevron navigateInsurances={() => this.props.navigation.navigate('insurances')} />}
                    outerContainerStyles={headerOuterStyle}
                    centerComponent={{ text: 'Add Insurance', style: componentTitleStyle }}
                />
                <AddInsuranceForm 
                    navigateInsurances={() => this.props.navigation.navigate('insurances')}
                />
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