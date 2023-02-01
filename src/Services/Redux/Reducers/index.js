import modalOpenReducer from "./ModalOpen";
import { combineReducers } from "redux";
import productReducer from "./ProductReducer";


const allReducers = combineReducers({
    modal: modalOpenReducer,
    allProducts: productReducer
})

export default allReducers