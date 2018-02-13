import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import axios from 'axios';

import { textColor, strongColor, lightColor } from '../../constants';
import { add_insurance } from '../../actions/insurances_actions';

class AddInsuranceForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            premium: '',
            selectedCategory: '',
            categories: []
        };
    }

    componentDidMount() {
        axios.get('https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:Types_of_insurance&cmtype=subcat&format=json&origin=*')
            .then(response => {
                const categories = response.data.query.categorymembers.map(category => {
                    return category.title.replace('Category:', '');
                });

                this.setState({ 
                    categories,
                    selectedCategory: categories[0]
                });
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

    handleButtonPress() {
        const { title, premium, selectedCategory } = this.state;
        const insurance = { title, premium, category: selectedCategory };

        this.props.add_insurance(insurance);
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

        const { title, premium, category, selectedCategory } = this.state;

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
                        selectedValue={selectedCategory}
                        onValueChange={(itemValue, itemIndex) => this.setState({selectedCategory: itemValue})}
                    >
                        {this.renderPicker()}
                    </Picker>
                </View>

                <View>
                    <Button 
                        title="Done"
                        buttonStyle={buttonStyle}
                        textStyle={buttonTextStyle}
                        onPress={() => this.handleButtonPress()}
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

export default connect(null, { add_insurance })(AddInsuranceForm);