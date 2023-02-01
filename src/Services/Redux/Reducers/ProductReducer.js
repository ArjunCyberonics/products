
const initialState = {
    products: []
}

const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_PRODUCT":
            return { ...state, products: payload }
        default:
            return state;
    }
}

export default productReducer