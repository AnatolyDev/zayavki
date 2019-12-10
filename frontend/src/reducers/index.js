import { combineReducers } from 'redux';

import authReducer from './auth-reducer';
import unitReducer from './unit-reducer';

export default combineReducers({
    auth : authReducer,
    unit : unitReducer
});