import React from 'react';
import { shallow } from 'enzyme';
import AddInsuranceForm from './AddInsuranceForm';
import { FormInput, FormLabel, Button } from 'react-native-elements';

describe('<AddInsuranceForm />', () => {
    const component = shallow(<AddInsuranceForm />);

    it('renders properly', () => {
        expect(component).toMatchSnapshot();
    });

    it('contains 2 <FormInput />', () => {
        expect(component.find('View > View').children(FormInput).length).toEqual(2);
    });

    it('contains 3 <FormLabel />', () => {
        expect(component.find('View > View').children(FormLabel).length).toEqual(3);
    });

    it('contains 1 <Picker />', () => {
        expect(component.find('View > View').children('Picker').length).toEqual(1);
    });

    it('contains 1 <Button />', () => {
        expect(component.find('View').children(Button).length).toEqual(1);
    });
});
