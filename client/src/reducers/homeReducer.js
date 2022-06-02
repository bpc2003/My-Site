import { GET_SKILLS, ITEMS_LOADING } from "../actions/types";

const initState = {
    technologies: [],
    certs: [],
    loading: false
};

export default function(state=initState, action) {
    switch(action.type) {
        case GET_SKILLS:
            return {
                technologies: action.payload[0],
                certs: action.payload[1]
            };
        
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            };
            
        default:
            return state;
    }
}