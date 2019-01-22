import api from "@/api";
const getUserInfo = ({ phone, password }) => {
    return (dispatch) => {
        return new Promise((resolve) => {
            api.user.login({
                phone,
                password
            }).then((res) => {
                dispatch({
                    type: "SET_USER_INFO",
                    info: res
                })
                resolve()
            })
        })
    }
}
export {
    getUserInfo
}