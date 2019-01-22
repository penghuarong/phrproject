import fetch from "@/utils/fetch"
const user = {
    login: ({ phone, password }) => fetch.post('/api/admin/user/login_do', {
        phone,
        password
    }),
}
export default user