import '../setupTest';
import React from 'react';
import { shallow } from 'enzyme';

import InsurancesScreen from './InsurancesScreen';

describe('<AddInsuranceScreen />', () => {
    const screen = shallow(<InsurancesScreen />);

    it('renders properly', () => {
        expect(screen).toMatchSnapshot();
    });
});