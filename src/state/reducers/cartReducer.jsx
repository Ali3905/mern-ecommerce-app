const intialCart = {
   products: [],
};

const cartReducer = (state=intialCart, action) => {

    if(action.type === "add"){
        if({"success":"already"}){
            return state
        }else {
        return {...state, products:[...state.products, action.payload]}
        }
    }else if(action.type === "remove"){
        const i = state.products.indexOf(action.payload)
        const newArr = [...state.products]
        newArr.splice(i, 1)
        return {...state, products: newArr}
    }else if(action.type === "fetch"){
        return {...state, products:action.payload}
    }else if(action.type === "empty"){
        return {...state, products:[]}
    }else{
            return state
        }
    }

export default cartReducer