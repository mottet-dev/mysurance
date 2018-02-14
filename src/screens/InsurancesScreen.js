import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button } from 'react-native-elements';


import { backgroundColor, lightColor, strongColor } from '../constants';
import InsurancesList from '../components/InsurancesList/InsurancesList';

class InsurancesScreen extends Component {
    render() {
        const { 
            screenStyle, 
            headerOuterStyle,
            componentTitleStyle,
            buttonStyle,
            buttonTextStyle,
            buttonContainerStyle,
        } = styles;

        return (
            <View style={screenStyle}>
                <Header
                    outerContainerStyles={headerOuterStyle}
                    centerComponent={{ text: 'Mysurance', style: componentTitleStyle }}
                />
                
                <InsurancesList />

                <View style={buttonContainerStyle}>
                    <Button 
                        textStyle={buttonTextStyle}
                        buttonStyle={buttonStyle}
                        title="Add Insurance"
                        onPress={() => this.props.navigation.navigate('addinsurance')}
                    />
                </View>
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
    },
    buttonStyle: {
        backgroundColor: strongColor,
        height: 60,
        borderRadius: 50,
    },
    buttonTextStyle: {
        fontSize: 18
    },
    buttonContainerStyle: {
        position: 'absolute',
        bottom: 20,
        right: 0,
        left: 0
    }
};

export default InsurancesScreen;