import React from 'react';
import { shallow } from 'enzyme';
import { Header } from 'react-native-elements';

import InsurancesScreen from './InsurancesScreen';

describe('<AddInsuranceScreen />', () => {
    const screen = shallow(<InsurancesScreen />);

    it('renders properly', () => {
        expect(screen).toMatchSnapshot();
    });

    it('contains 1 <Header />', () => {
        expect(screen.find('View').children(Header).length)
            .toEqual(1);
    });

    it('contains 1 <InsurancesList />', () => {
        expect(screen.find('View').children('InsurancesList').length)
            .toEqual(1);
    });
});