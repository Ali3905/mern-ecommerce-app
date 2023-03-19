import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import cartBillReducer from "./cartBillReducer"
import addressReducer from "./addressReducer"
import orderReducer from "./orderReducer";


const Reducers = combineReducers({
    products: productReducer,
    cart: cartReducer,
    cartBill: cartBillReducer,
    shipping_address : addressReducer,
    orders : orderReducer,
})

export default Reducers