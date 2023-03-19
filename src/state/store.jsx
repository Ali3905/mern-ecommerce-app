import Reducers from "./reducers/combineReducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const store = createStore(Reducers, {}, applyMiddleware(thunk))

export default store