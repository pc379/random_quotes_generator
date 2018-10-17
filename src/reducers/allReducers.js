import {combineReducers} from 'redux';
import colorReducer from './colorReducer';
import quoteReducer from './quoteReducer';

const allReducers = combineReducers({
    colorReducer,
    quoteReducer
});

export default allReducers;