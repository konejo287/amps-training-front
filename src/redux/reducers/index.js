import { combineReducers } from 'redux';
import customers from './customerReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    customers: customers,
    form: formReducer
})

export default rootReducer;
