import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';

import { textColor, strongColor, lightColor } from '../../constants';

class AddInsuranceForm extends Component {
    render() {
        const { 
            labelStyle, 
            buttonStyle, 
            buttonTextStyle, 
            formStyle,
            formInputContainerStyle,
            formInputStyle,
            pickerStyle,
            pickerItemStyle } = styles;

        return (
            <View style={formStyle}>
                <View>
                    <FormLabel labelStyle={labelStyle}>Title:</FormLabel>
                    <FormInput
                        containerStyle={formInputContainerStyle}
                        inputStyle={formInputStyle}
                        underlineColorAndroid={'transparent'}
                        keyboardType="default"
                    />

                    <FormLabel labelStyle={labelStyle}>Premium (yearly):</FormLabel>
                    <FormInput
                        containerStyle={formInputContainerStyle}
                        inputStyle={formInputStyle}
                        underlineColorAndroid={'transparent'}
                        keyboardType="numeric"
                    />

                    <FormLabel labelStyle={labelStyle}>Category:</FormLabel>
                    <Picker
                        style={pickerStyle}
                        pickerItemStyle={pickerItemStyle}
                        mode="dropdown"
                    >
                        <Picker.Item label="Health Insurance" value="healthInsurance" />
                        <Picker.Item label="Car Insurance" value="carInsurance" />
                        <Picker.Item label="House Insurance" value="houseInsurance" />
                    </Picker>
                </View>

                <View>
                    <Button 
                        title="Done"
                        buttonStyle={buttonStyle}
                        textStyle={buttonTextStyle}
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    labelStyle: {
        color: textColor,
        fontSize: 18
    },
    buttonStyle: {
        backgroundColor: strongColor,
        height: 60
    },
    buttonTextStyle: {
        fontSize: 18
    },
    formStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    formInputContainerStyle: {
        backgroundColor: lightColor,
        borderWidth: 0.5,
        borderColor: '#95989A'
    },
    formInputStyle: {
        color: 'black',
        fontSize: 16,
    },
    pickerStyle: {
        backgroundColor: lightColor,
        marginRight: 15,
        marginLeft: 15,
        borderWidth: 0.5,
        borderColor: '#95989A',
    },
    pickerItemStyle: {
        color: 'black',
        fontSize: 16,
        borderWidth: 0.5,
    }
}

export default AddInsuranceForm;