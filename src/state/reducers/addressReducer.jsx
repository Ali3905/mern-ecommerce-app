const intialAddress = {
    items: [
        ],
}

const addressReducer = (state=intialAddress, action) => {
    if (action.type === "addAdress") {
        return {...state, items:[...state.items, action.payload]}
    } else if(action.type === "getAdresses"){
        return {...state, items: action.payload}
    }else if(action.type === "removeAdresses"){
        return {...state, items: action.payload}
    } else{
        return state
    }
}

export default addressReducer