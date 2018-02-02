import { combineReducers } from 'redux';
import rate from '../modules/rate/Rate.reducer';

const rootReducer = combineReducers({
	rate
});

export default rootReducer;