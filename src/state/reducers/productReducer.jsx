const intialProducts = {
    products : [
            ]
}

const productReducer = (state=intialProducts, action)=>{
    if (action.type === "cart") {
        return {...state, products: action.payload}
    } else {
        return state
    }
}

export default productReducer