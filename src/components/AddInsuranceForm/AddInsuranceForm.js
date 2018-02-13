import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';
import axios from 'axios';

import { textColor, strongColor, lightColor } from '../../constants';

class AddInsuranceForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            premium: '',
            category: 'healthinsurance',
            categories: []
        };
    }

    componentDidMount() {
        axios.get('https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:Types_of_insurance&cmtype=subcat&format=json&origin=*')
            .then(response => {
                const categories = response.data.query.categorymembers.map(category => {
                    return category.title.replace('Category:', '');
                });
                this.setState({ categories });
            })
            .catch(error => {
                console.log(error);
            });
    }

    renderPicker() {
        return this.state.categories.map(category => {
            return (<Picker.Item key={category} label={category} value={category} />);
        });
    }

    render() {
        const { 
            labelStyle, 
            buttonStyle, 
            buttonTextStyle, 
            formStyle,
            formInputContainerStyle,
            formInputStyle,
            pickerStyle,
            pickerItemStyle 
        } = styles;

        const { title, premium, category } = this.state;

        return (
            <View style={formStyle}>
                <View>
                    <FormLabel labelStyle={labelStyle}>Title:</FormLabel>
                    <FormInput
                        containerStyle={formInputContainerStyle}
                        inputStyle={formInputStyle}
                        underlineColorAndroid={'transparent'}
                        keyboardType="default"
                        label="title"
                        value={title}
                        onChangeText={text => this.setState({ title: text})}
                    />

                    <FormLabel labelStyle={labelStyle}>Premium (yearly):</FormLabel>
                    <FormInput
                        containerStyle={formInputContainerStyle}
                        inputStyle={formInputStyle}
                        underlineColorAndroid={'transparent'}
                        keyboardType="numeric"
                        label="premium"
                        value={premium}
                        onChangeText={text => this.setState({ premium: text})}
                    />

                    <FormLabel labelStyle={labelStyle}>Category:</FormLabel>
                    <Picker
                        style={pickerStyle}
                        pickerItemStyle={pickerItemStyle}
                        mode="dropdown"
                    >
                        {this.renderPicker()}
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
    }
}

export default AddInsuranceForm;