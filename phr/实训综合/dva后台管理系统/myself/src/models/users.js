import getUsersList from "../services/users";
const user = {
    namespace: "auditEnter",
    state: {
        list: []
    },
    effects: {
        * getUsers({ action }, { call, put }) {
            const users = yield call(getUsersList)
            yield put({ type: "SET_LIST", list: users.data })
        }
    },
    reducers: {
        SET_LIST(state, action) {
            return Object.assign({}, state, {
                list: action.list
            })
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === "/auditEnter") {
                    dispatch({ type: 'getUsers' })
                }
            })
        }
    }
}
export default user