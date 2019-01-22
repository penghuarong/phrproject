import storage from "@/utils/storage";
const initState = {
    info: storage.getItem('user') || {},
    token: storage.getItem('token') || '',
    isLogin: false
}
const user = (state = initState, action) => {
    switch (action.type) {
        case 'SET_USER_INFO':
            storage.setItem('user', action.info)
            return Object.assign({}, state, {
                info: action.info
            })
        default:
            return state;
    }
}
export default user