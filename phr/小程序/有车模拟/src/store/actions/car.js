import { createAction } from 'redux-actions'
import { CAR_INDEX_DATA, CHOOSE_DATA, DUSHE_DATA } from '../types/car'
export const getCarIndexData = createAction(CAR_INDEX_DATA, () => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: "https://www.easy-mock.com/mock/5b66e3d11fc80e53a3ad62d4/example/index ",
            success(res) {
                console.log(res)
            }
        })
    })
})
export const getCarChooseData = createAction(CHOOSE_DATA, () => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: "https://www.easy-mock.com/mock/5bed2e440dfee6695b4bc6af/list/getcardata",
            success(res) {
                console.log(res)
            }
        })
    })
})