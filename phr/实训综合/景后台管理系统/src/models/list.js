import { tradeList, modifyData, getDetail } from '../services/aidoulist'
export default {
  namespace: 'list',
  state: {
    dataList: [],
    total: '',
    ediotDetail: {}
  },
  subscriptions: {
  },
  effects: {
    *fetch({action,payload}, { call, put }) {
      const data =yield call(tradeList,{page:action.page,page_size: action.page_size, categoryId: action.categoryId})
      yield put({type: 'SAVELIST', payload: data.data})
    },
    *ediot(action, { put, call }) {
      const data = yield call(getDetail, action['id'])
      yield put({type: 'ediotData', payload: data})
    },
    *modify({action, payload} , {call, put}) {
      const data = yield call(modifyData, {id: action.id})
      console.log(data)
    }
  },
  reducers: {
    SAVELIST(state, action) {
      return {
        ...state,
        total: action.payload.total - 1,
        dataList: action.payload.data.map((item, index) => {
          return {
            ...item,
            key: index
          }
        })
      }
    },
    ediotData (state, action) {
      return {
        ...state,
        ediotDetail: action.payload.data.data
      }
    } 
  }
}
