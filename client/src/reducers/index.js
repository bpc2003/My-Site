import { combineReducers } from "redux";
import contactReducers from "./contactReducer";
import homeReducer from "./homeReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
    home: homeReducer,
    contact: contactReducers,
    error: errorReducer
});