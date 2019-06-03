import * as types from "./actionTypes";

export function createCustomer(customers) {
    return { type: types.CREATE_CUSTOMER, customers }
}

export function loadCustomersSuccess(customers) {
    return { type: types.LOAD_CUSTOMERS_SUCCESS, customers };
}

export function loadCustomers() {
    return function(dispatch) {
        return fetch('http://localhost:8641/customers').then(response => {
            response.json().then(data => {
                dispatch(loadCustomersSuccess(data));
            })
        })
        .catch(error => {
            console.log('an err has ocurred ' , error);
        });
    }
}