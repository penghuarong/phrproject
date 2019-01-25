const todo = {
    namespaced: true,
    state: {
        list: [],
        newlist: []
    },
    getters: {},
    mutations: {
        ADD_TODOLIST(state, item) {
            state.list.push(item)
        },
        DEL_TODOLIST(state, index) {
            state.list.splice(index, 1)
        },
        DELE_TODOLIST(state, index) {
            state.newlist.splice(index, 1)
        },
        CHECK_TODOLIST(state, ind) {
            state.list.forEach((item) => {
                if (item.id === ind) {
                    item.flag = true
                    state.newlist.push(item)
                }
            })
        }
    },
    actions: {
        // addTodo({ commit, state }, text) {
        //     commit("ADD_TODOLIST", {
        //         type: false,
        //         text: text
        //     })
        // }
    },
    modules: {}
}
export default todo