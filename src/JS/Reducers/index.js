import {combineReducers} from 'redux'
import userReducer from './user'
import caseReducer from './casee'
const rootReducer=combineReducers({userReducer,caseReducer})
export default rootReducer