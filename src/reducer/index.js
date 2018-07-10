import { combineReducers } from 'redux';

import { counter } from '../redux/index.redux';
import { auth } from '../redux/auth.redux';

const reducer=combineReducers({counter,auth});

export default reducer;