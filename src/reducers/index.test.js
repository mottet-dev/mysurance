import reducers from './index';

describe('reducers', () => {
    it('initializes the default state', () => {
        expect(reducers({}, {})).toEqual({ insurances: [] });
    });
})