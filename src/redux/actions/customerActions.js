import * as types from "./actionTypes";

export function createCustomerSuccess(customer) {
    return { type: types.CREATE_CUSTOMER_SUCCESS, customer }
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
        return fetch('http://localhost:8641/customers/' + id, {
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

export function createCustomer(customer) {
    return function(dispatch) {
        console.log('front creating: ' , customer);
        return fetch('http://localhost:8641/customers/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({first_name: customer.first_name, last_name: customer.last_name})
        }).then(response => {
            response.json().then(data => {
                dispatch(createCustomerSuccess(data));
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