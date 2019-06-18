import * as types from "../actions/actionTypes";

export default function customerReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_CUSTOMER:
            console.log('reducer create values: ' , action.customers);
            return [ ...state, {...action.customers}];
        case types.LOAD_CUSTOMERS_SUCCESS:
            console.log('action customers: ' , action.customers);
            return action.customers;
        default:
            return state;
    }
}