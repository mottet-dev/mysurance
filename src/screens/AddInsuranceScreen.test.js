import '../setupTest';
import React from 'react';
import { shallow } from 'enzyme';
import { Header } from 'react-native-elements';

import AddInsuranceScreen from './AddInsuranceScreen';

describe('<AddInsuranceScreen />', () => {
    const screen = shallow(<AddInsuranceScreen />);

    it('renders properly', () => {
        expect(screen).toMatchSnapshot();
    });

    it('contains 1 <AddInsuranceForm />', () => {
        expect(screen.find('View').children('AddInsuranceForm').length)
            .toBe(1);
    });

    it('contains 1 <Header />', () => {
        expect(screen.find('View').children(Header).length)
            .toBe(1);
    });
});