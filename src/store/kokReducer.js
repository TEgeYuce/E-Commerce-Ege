import {urunReducer} from "./reducers/urunReducer";
import {clientReducer} from "./reducers/clientReducer";
import {shoppingKartReducer} from "./reducers/shoppingKartReducer";
import {combineReducers} from "redux";

const kokReducer = combineReducers({
    client: clientReducer,
    product: urunReducer,
    shoppingCart: shoppingKartReducer,
});

export default kokReducer;