//Types
import { types } from './types';
import { api } from '../../api';

export const storeActions = Object.freeze({
    //Sync
    startFetching: () => {
        return {
            type: types.STORE_START_FETCHING
        }
    },
    stopFetching: () => {
        return {
            type: types.STORE_STOP_FETCHING
        }
    },
    fill: (payload) => {
        return {
            type: types.STORE_FILL,
            payload
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.STORE_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },
    fetchAsync: (id) => async (dispatch) => {
        dispatch(storeActions.startFetching());

        let response;
        if (id) {
            response = await api.products.fetchById(id);
        } else {
            response = await api.products.fetch();
        }
        if (response.status === 200) {
            dispatch(storeActions.fill(response.data));
        } else {
            const error = {
                status: response.status
            };
            dispatch(storeActions.setFetchingError(error));
        }
        dispatch(storeActions.stopFetching());
    }
})