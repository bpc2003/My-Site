import axios from 'axios';
import {
    GET_SKILLS,
    ITEMS_LOADING
} from './types';

export const loadHomePage = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get("/api/home")
        .then(res => {
            dispatch({
                type: GET_SKILLS,
                payload: res.data
            })
        });
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};