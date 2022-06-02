import axios from 'axios';
import { SEND_MESSAGE } from "./types";

export const sendMessage = message => dispatch => {
    axios
        .post('/api/contact', message)
        .then(res => dispatch({
            type: SEND_MESSAGE,
            payload: res.data
        }))
}