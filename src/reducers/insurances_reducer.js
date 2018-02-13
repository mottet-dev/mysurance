import _ from 'lodash';
import { ADD_INSURANCE, REMOVE_INSURANCE } from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    console.log(state);
    switch (action.type) {
        case ADD_INSURANCE:
            return _.uniqBy([action.payload, ...state], 'id');
        case REMOVE_INSURANCE:
            return state.filter(insurance => insurance.id !== action.payload);
        default:
            return state;
    }
}