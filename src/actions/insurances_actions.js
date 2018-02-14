import { ADD_INSURANCE, REMOVE_INSURANCE } from './types';
import { NavigationActions } from 'react-navigation';

export const add_insurance = (insurance, callback) => {
    return (dispatch) => {
        dispatch({ 
            payload: { ...insurance, id: Math.random().toString(36).substr(2, 10) },
            type: ADD_INSURANCE
        });
        callback();
    }
};

export const remove_insurance = (id) => {
    return {
        payload: id,
        type: REMOVE_INSURANCE
    }
}