import { SEND_MESSAGE, FAILED_SEND } from "../actions/types";

const initState = {
    name: "",
    email: "",
    phone_number: "",
    msg: ""
};

export default function(state=initState, action) {
    switch(action.type) {
        case SEND_MESSAGE:
            return {
                name: action.payload.name,
                email: action.payload.email,
                phone_number: action.payload.phone_number,
                msg: action.payload.msg
            };
        
        case FAILED_SEND:
            return {
                name: "",
                email: "",
                phone_number: "",
                msg: ""
            };
        
        default:
            return state;
    }
}