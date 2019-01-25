import { combineReducers } from 'redux'
import counter from './counter'
import car from "./car"
export default combineReducers({
    counter,
    car
})