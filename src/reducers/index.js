import {combineReducers} from 'redux';
import flimreducer from './reducer_flims';
const rootReducer = combineReducers({
	 flims :	flimreducer,
});
export default rootReducer;