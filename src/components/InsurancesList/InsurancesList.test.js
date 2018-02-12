import React from 'react';
import { shallow } from 'enzyme';
import InsuranceList from './InsurancesList';
import { List, ListItem } from 'react-native-elements';

describe('<InsurancesList />', () => {
    const component = shallow(<InsuranceList />);

    it('renders properly', () => {
        expect(component).toMatchSnapshot();
    });

    it('containes 1 <List />', () => {
        expect(component.find(List).length).toEqual(1);
    });

    it('containes at 0 or more <ListItem />', () => {
        expect(component.find('View > List').children(ListItem).length).toBeGreaterThanOrEqual(0);
    });
});