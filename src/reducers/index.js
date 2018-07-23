import {combineReducers} from 'redux'
import counter from './counter'
import user from './user'

const rootReducer =combineReducers({
    counter,
    user
})//组合多个state状态

export default rootReducer