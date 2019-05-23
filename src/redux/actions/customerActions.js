import * as types from "./actionTypes";


export function createCustomer(customers) {
    return { type: types.CREATE_CUSTOMER, customers }
}

export function loadCustomersSuccess() {
    return { type: types.LOAD_CUSTOMERS_SUCCESS };
}

export function loadCustomers() {
    return function(dispatch) {
        return fetch('http://localhost:8641/customers').then(customers => {
            dispatch(loadCustomersSuccess(customers));
        })
        .catch(error => {
            console.log('an err has ocurred ' , error);
        });
    }
}

function fetchCustomers(dispatch) {
    return 
}