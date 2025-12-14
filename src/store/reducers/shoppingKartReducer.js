import {SET_PRICE, SET_CART, SET_ADDRESS, SET_PAYMENT} from "../actions/shoppingKartAction";

const initialState = {
    cart: [],
    payment: null,
    address: null,
    price: 0,
};

function shoppingKartReducer(state = initialState, action) {
    switch(action.type) {
        case SET_CART:
            return {
                ...state,
                cart: action.payload || [],
            };
        
        case SET_PAYMENT:
            return {
                ...state,
                payment: action.payload,
            };

        case SET_ADDRESS:
            return {
                ...state,
                address: action.payload,
            };

        case SET_PRICE:
            return {
                ...state,
                price: action.payload,
            };

        default:
            return state;
    }
}

export { shoppingKartReducer };