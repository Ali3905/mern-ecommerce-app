let initail_bill = {
    cart_bill : {
        items_price : 0,
        shipping : 0,
        discount_in_percent : 10,
        total : 0
    }
}

const cartBilReducer = (state=initail_bill, action) => {
    if (action.type==='bill') {
        var itemsPrice = 0
        for( let i = 0; i < action.payload.length; i++){
            itemsPrice = itemsPrice + action.payload[i].price
        }
        let shippingCost = 10
        let totalCost = (itemsPrice + shippingCost - itemsPrice*0.1).toFixed(2)
        const bill = {
            items_price : itemsPrice,
            shipping : 10,
            discount_in_percent : 10,
            total : totalCost
        }
        return {...state, cart_bill: bill}
    }else{
        return state
    }
}

export default cartBilReducer