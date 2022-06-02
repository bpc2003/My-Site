import { SEND_MESSAGE } from "../actions/types";

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
        
        default:
            return state;
    }
}