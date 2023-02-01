const modalOpenReducer = (state = false, action) => {
    switch (action.type) {
        case 'MODAL_HANDLER':
            return !state;
        default:
            return state
    }
}

export default modalOpenReducer