import { createStore, combineReducers } from "redux";
import DiscussStore from "./reducer/reducer.js";
const store = combineReducers({
    DiscussStore
})
export default createStore(store)