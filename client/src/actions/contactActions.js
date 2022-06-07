import axios from 'axios';
import { SEND_MESSAGE, FAILED_SEND } from "./types";
import { returnErrors } from './errorActions';

export const sendMessage = message => dispatch => {
    axios
        .post('/api/contact', message)
        .then(res => dispatch({
            type: SEND_MESSAGE,
            payload: res.data
        }))
        .catch(err => {
            if(err.response.status === 400) {
                dispatch(returnErrors(err.response.data, err.response.status, "EMPTY_FIELDS"));
            } else {
                dispatch(returnErrors(err.response.data, err.response.status, "SERVER_SIDE_ERROR"));
            }
            dispatch({
                type: FAILED_SEND
            });
        });
}