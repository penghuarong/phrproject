import { handleActions } from 'redux-actions'
import { CAR_INDEX_DATA, CHOOSE_DATA } from '../types/car'
export default handleActions({
    [CAR_INDEX_DATA](state, action) {
        return {
            ...state,
            indexdata: action.payload
        }
    },
    [CHOOSE_DATA](state, action) {
        return {
            ...state,
            choosecar: action.payload
        }
    }
}, {
    indexdata: [],
    choosecar: []
})