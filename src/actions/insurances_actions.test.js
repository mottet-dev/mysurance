import * as actions from './insurances_actions';
import * as types from './types';

it('removes an insurance', () => {
    const id = '1';
    const expectedAction = { type: types.REMOVE_INSURANCE, payload: id };

    expect(actions.remove_insurance(id)).toEqual(expectedAction);
});