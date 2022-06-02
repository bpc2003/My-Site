import { combineReducers } from "redux";
import contactReducers from "./contactReducer";
import homeReducer from "./homeReducer";

export default combineReducers({
    home: homeReducer,
    contact: contactReducers,
    loading: false
});