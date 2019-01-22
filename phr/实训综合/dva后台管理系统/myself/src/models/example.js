export default {

    namespace: 'example',

    state: {
        name: "huahua",
        age: 18,
        sex: "女"
    },

    subscriptions: {
        setup({ dispatch, history }) { // eslint-disable-line
        },
    },

    effects: {
        * fetch({ payload }, { call, put }) { // eslint-disable-line
            yield put({ type: 'save' });
        },
    },

    reducers: {
        save(state, action) {
            return {...state, ...action.payload };
        },
    },

};