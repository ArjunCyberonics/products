import { combineReducers } from "redux";
import { productReducer } from "./ProductReducer";
import { selectedProductReducer } from "./ProductReducer";

const allReducers = combineReducers({
    allProducts: productReducer,
    selectedProduct: selectedProductReducer

})

export default allReducers