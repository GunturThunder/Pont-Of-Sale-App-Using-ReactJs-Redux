const initialState = {
}
const order = (state = initialState, action) => {
    switch (action.type) {
        case "POST_ORDER_PENDING":
            return {
                ...state
            };
        case "POST_ORDER_REJECTED":
            return {
                ...state
            };
        case "POST_ORDER_FULFILLED":
            return {
                ...state
            };
        default:
            return state;
    }
}
export default order