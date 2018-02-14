import * as types from '../actions/types';
import insurancesReducer from './insurances_reducer';

describe('insurancesReducer', () => {
    const id = '1';
    const insurance = {
        id,
        title: 'title',
        premium: '23',
        category: 'category'
    };

    it('adds insurance into the state', () => {
        const action = {
            type: types.ADD_INSURANCE,
            payload: insurance
        }

        expect(insurancesReducer([], action)).toEqual([insurance]);
    });

    it('removes insurance from the state', () => {
        const action = { type: types.REMOVE_INSURANCE, payload: id };
        const initialState = [insurance];
        const finalState = [];
        
        expect(insurancesReducer(initialState, action)).toEqual(finalState);
    });
});