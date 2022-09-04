import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import navbarReducer from "./navbarReducer";

const rooterReducer = combineReducers({
    cardReducer,
    navbarReducer,
});

export default rooterReducer