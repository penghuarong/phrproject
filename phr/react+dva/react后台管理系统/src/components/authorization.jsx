import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import store from "@/store";
// const getUserInfo = ()=>{
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({
//                 name:"aaa"
//             })
//         },3000)
//     })
// }
const authorization = (WrapComponent) => {
    const isLogin = Object.keys(store.getState().user.info).length>=1 ? true : false
    console.log(isLogin)
    return ()=>{
        if (isLogin) {
            return <WrapComponent />
        } else {
            return <Redirect to="/login" />
        }
    }
}
export default authorization