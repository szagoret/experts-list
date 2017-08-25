import { combineReducers } from 'redux';
import ExpertsReducer from './reducer_experts';

const rootReducer = combineReducers({
  experts: ExpertsReducer
});

export default rootReducer;
