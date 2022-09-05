// types 
import { types } from './types';

const initialState = {
    data: [null],
    isFetching: false,
    error: null,
};

export const storeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.STORE_START_FETCHING:
            return {
                ...state,
                isFetching: true,
            };
        case types.STORE_STOP_FETCHING:
            return {
                ...state,
                isFetching: false,
            };
        case types.STORE_SET_FETCHING_ERROR:
            return {
                ...state,
                error: payload,
                data: null,
            };
        case types.STORE_FILL:
            return {
                ...state,
                data: payload,
                error: null,
            };
        default:
            return state
    }
}