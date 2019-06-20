import * as types from "./actionTypes";

export function createCustomer(customers) {
    return { type: types.CREATE_CUSTOMER, customers }
}

export function deleteCustomerSuccess(customerId) {
    return { type: types.DELETE_CUSTOMER_SUCCESS, customerId }
}

export function loadCustomersSuccess(customers) {
    return { type: types.LOAD_CUSTOMERS_SUCCESS, customers };
}

export function deleteCustomer(id) {
    return function(dispatch) {
        console.log('front deleting');
        return fetch('http://localhost:8641/' + id, {
            method: 'DELETE'
        }).then(response => {
            response.json().then(data => {
                dispatch(deleteCustomerSuccess(data));
            })
        })
        .catch(error => {
            console.log('an err has ocurred ' , error);
        });
    }
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