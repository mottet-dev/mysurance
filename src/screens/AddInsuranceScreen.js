import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

import AddInsuranceForm from '../components/AddInsuranceForm/AddInsuranceForm';

class AddInsuranceScreen extends Component {
    render() {
        return (
            <View>
                <Header />
                <AddInsuranceForm />
            </View>
        );
    }
}

export default AddInsuranceScreen;