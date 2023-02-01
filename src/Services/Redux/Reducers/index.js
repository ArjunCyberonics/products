import modalOpenReducer from "./ModalOpen";
import { combineReducers } from "redux";
import { productReducer } from "./ProductReducer";
import { selectedProductReducer } from "./ProductReducer";

const allReducers = combineReducers({
    modal: modalOpenReducer,
    allProducts: productReducer,
    selectedProduct: selectedProductReducer

})

export default allReducers