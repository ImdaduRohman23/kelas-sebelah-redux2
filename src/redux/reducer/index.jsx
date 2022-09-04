import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import navbarReducer from "./navbarReducer";
import authReducer from "./authReducer";


const rooterReducer = combineReducers({
    cardReducer,
    navbarReducer,
    authReducer,
});

export default rooterReducer