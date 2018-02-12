import React, { Component } from 'react';
import { View } from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';

import { textColor, strongColor } from '../../constants';

class AddInsuranceForm extends Component {
    render() {
        const { labelStyle, buttonStyle, buttonTextStyle } = styles;

        return (
            <View>
                <FormLabel labelStyle={labelStyle}>Title:</FormLabel>
                <FormInput />

                <FormLabel labelStyle={labelStyle}>Premium (yearly):</FormLabel>
                <FormInput />

                <FormLabel labelStyle={labelStyle}>Category:</FormLabel>
                <FormInput />

                <Button 
                    title="Done"
                    buttonStyle={buttonStyle}
                    textStyle={buttonTextStyle}
                />
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
    }
}

export default AddInsuranceForm;