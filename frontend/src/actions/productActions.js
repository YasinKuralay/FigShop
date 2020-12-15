import axios from 'axios';
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
} from '../constants/productConstants';

//think of these as action creators, and the rest of the actions as just actions
export const listProducts = () => async (dispatch) => {
    // the `async (dispatch) =>` is redux thunk
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });

        const { data } = await axios.get('/api/products');

        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
