import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';

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
        /* get the insurances categories */
        axios.get('https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:Types_of_insurance&cmtype=subcat&format=json&origin=*')
            .then(response => {
                const categories = response.data.query.categorymembers.map(category => {
                    // cleans the title and adds it to the 'categories' array
                    return category.title.replace('Category:', '');
                });

                /* the default value of the 'selectedCategory' state is the first 
                element of the categories array */
                this.setState({ 
                    categories,
                    selectedCategory: categories[0]
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    validInput(input) {
        /* checks if the given input is not null, undefined or blank */
        return !(!input || /^\s*$/.test(input));
    } 

    handleButtonPress() {
        const { title, premium, selectedCategory } = this.state;
        
        /* checks if the required input contains something */
        if (this.validInput(title) && this.validInput(premium) && this.validInput(selectedCategory)) {
            const insurance = { title, premium, category: selectedCategory };

            // reset the inputs state
            this.setState({ title: '', premium: '', selectedCategory: this.state.categories[0]});
            // add the insurance to the state
            this.props.add_insurance(insurance, () => { this.props.navigateInsurances(); });
        }

        
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
        height: 60,
        borderRadius: 50
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
};

AddInsuranceForm.propTypes = {
    add_insurance: PropTypes.func.isRequired,
    navigateInsurances: PropTypes.func.isRequired
};

export default connect(null, { add_insurance })(AddInsuranceForm);