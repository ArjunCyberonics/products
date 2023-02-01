import counterReducer from "./Counter";
import { combineReducers } from "redux";


const allReducers = combineReducers({
    counterReducer
})

export default allReducers