import '../../setupTest';
import React from 'react';
import { shallow } from 'enzyme';
import AddInsuranceForm from './AddInsuranceForm';
import { FormInput, FormLabel, Button } from 'react-native-elements';

describe('AddInsuranceForm Component', () => {
    const component = shallow(<AddInsuranceForm />);

    it('renders properly', () => {
        expect(component).toMatchSnapshot();
    });

    it('contains 3 <FormInput />', () => {
        expect(component.find('View').children(FormInput).length).toEqual(3);
    });

    it('contais 3 <FormLabel />', () => {
        expect(component.find('View').children(FormLabel).length).toEqual(3);
    });

    it('contains 1 <Button />', () => {
        expect(component.find('View').children(Button).length).toEqual(1);
    })
});
