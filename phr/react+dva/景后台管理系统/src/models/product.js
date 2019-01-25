import * as userService from '../services/user'
export default {
  namespace: 'product',
  state: {
    list: [],
    total: null,
    columns: [{
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'email',
      dataIndex: 'email',
      key: 'email'
    }, {
      title: 'website',
      dataIndex: 'website',
      key: 'website'
    }, {
      title: '操作',
      dataIndex: 'opration',
      key: 'opration',
      render: (text, record) => (
        <span>
          <b>更新</b>
          <b>删除</b>
        </span>
      )
    }],    
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({pathname, query}) => {
        if (pathname === '/artboard/product') {
          dispatch({type: 'fetch', payload: query})
        }
      })
    },
  },

  effects: {
    *fetch({ payload}, { call, put }) {
      const { data}  = yield call(userService.fetch)
      let newData = data.map((item, index) => {
        return {
          ...item,
          key: index
        }
      })
      yield put({type: 'SAVELIST', payload: {newData }})
    },
  },

  reducers: {
    SAVELIST(state, action) {
      return {...state, list: action.payload.newData, total: action.payload.newData.length}
    }
  }
}