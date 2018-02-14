import { ADD_INSURANCE, REMOVE_INSURANCE } from './types';
import { NavigationActions } from 'react-navigation';

export const add_insurance = (insurance, callback) => {
    /* Add a new insurance in the application's state and redirect the user */

    return (dispatch) => {
        dispatch({ 
            payload: { ...insurance, id: Math.random().toString(36).substr(2, 10) },
            type: ADD_INSURANCE
        });
        callback();
    }
};

export const remove_insurance = (id) => {
    /* Remove an insurance from the application's state */
    return {
        payload: id,
        type: REMOVE_INSURANCE
    }
};