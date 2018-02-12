import { ADD_INSURANCE, REMOVE_INSURANCE } from './types';

const add_insurance = (insurance) => {
    return { 
        payload: { ...insurance, id: Math.random().toString(36).substr(2, 10) },
        type: ADD_INSURANCE
    };
};

const remove_insurance = (id) => {
    return {
        payload: id,
        type: REMOVE_INSURANCE
    }
}