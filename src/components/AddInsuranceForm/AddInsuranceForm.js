import React, { Component } from 'react';
import { View } from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';

class AddInsuranceForm extends Component {
    render() {
        return (
            <View>
                <FormLabel>Title:</FormLabel>
                <FormInput />

                <FormLabel>Premium (yearly):</FormLabel>
                <FormInput />

                <FormLabel>Category:</FormLabel>
                <FormInput />

                <Button />
            </View>
        );
    }
}

export default AddInsuranceForm;