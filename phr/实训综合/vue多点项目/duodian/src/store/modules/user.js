const user = {
    namespaced: true,
    state: {
        gps_location: JSON.parse(window.localStorage.getItem('location'))
    },
    getters: {},
    mutations: {
        SET_GPS(state, payload) {
            console.log(payload);
            state.gps_location = payload;
            window.localStorage.setItem("aa", "11")
            window.localStorage.setItem("location", JSON.stringify(payload))
        }
    },
    actions: {
        get_gps_location() {

        }
    },
    modules: {}
}
export default user