
const initialState = {
    products: []
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_PRODUCT":
            return { ...state, products: payload }
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case "SELECTED_PRODUCT":
            return { ...state, ...payload }
        case "REMOVE_OLD_PRODUCT":
            return {}
        default:
            return state
    }
}
