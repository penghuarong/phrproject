const defaultState = { navData: [], listData: [] };
const DiscussStore = (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "SAVE_NAV":
            return {...state, navData: payload }
        case "SAVE_LIST":
            return {...state, listData: payload }
        default:
            return state
    }
}
export default DiscussStore
// const defaultState = {nav:[]};
// const AA = (state=defaultState,action)=>{
//     const {type,payload} = action;
//     switch(type){
//         case "":
//         return {...state,nav:payload}
//         default:
//         return state
//     }
// }
// export default AA