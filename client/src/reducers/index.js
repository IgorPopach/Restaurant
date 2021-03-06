import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import ordersReducer from './ordersReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    orders: ordersReducer,
});