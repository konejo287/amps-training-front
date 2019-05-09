import { combineReducers } from 'redux';
import courses from './courseReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    courses: courses,
    form: formReducer
})

export default rootReducer;
