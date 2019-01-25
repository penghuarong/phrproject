import Vue from "vue";
import Vuex from "vuex";
import todo from "./modules/todo";
import user from "./modules/user";
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        list: [],
        num: 0,
        arr: []
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        todo,
        user
    }
})
export default store
// import Vue from "vue";
// import Vuex from "vuex";
// Vue.use(Vuex);
// const store = new Vuex.Store({
//     state: {
//         name: "华荣",
//         name2: "晶晶",
//         age: 18,
//         sex: "女",
//         arr: [1, 2, 3, 4, 5],
//         list: [
//             { name: "云云", sex: "男" },
//             { name: "文文", sex: "女" },
//             { name: "姐姐", sex: "男" }
//         ]
//     },
//     getters: {
//         man(state) {
//             return state.list.filter((item) => {
//                 return item.sex === "男"
//             })
//         },
//         woman(state) {
//             return state.list.filter((item) => {
//                 return item.sex === "女"
//             })
//         },
//         count(state) {
//             return state.list.length
//         }
//     },
//     mutations: {
//         SET_NAME(state, payload) {
//             state.name = payload.name
//             state.arr[0] = 10000;
//             state.list[0].name = "1111111111111111111111111";
//             Vue.set(state.list[1], "name", 222)
//         }
//     },
//     actions: {}
// })
// export default store