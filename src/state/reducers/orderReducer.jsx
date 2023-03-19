const initialOrders = {
    orders : [
    ]

}

const orderReducer = (state=initialOrders, action) => {
    if (action.type === "addOrder") {
        return {...state, orders:[...state.orders, action.payload]} 
    }else if (action.type === "Order") {
        return {...state, orders: action.payload} 
    } else {
        return state
    }
}

export default orderReducer