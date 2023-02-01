export const modalHandler = () => {
    return {
        type: 'MODAL_HANDLER'
    }
}


export const addProduct = (products) => {
    return {
        type: 'ADD_PRODUCT',
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: 'SELECTED_PRODUCT',
        payload: product
    }
}

export const removeOldProduct = () => {
    return {
        type: 'REMOVE_OLD_PRODUCT'
    }
}