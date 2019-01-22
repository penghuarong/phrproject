import React from 'react'
import { Redirect } from 'dva/router'
const HeightRouter = (WrapComponent) => {
  const isLogin = window.localStorage.getItem('userlogin') ? true : false
  // const isLogin = store.getState().UserReducers.token ? true : false
  return () => {
    if (isLogin) {
      return <WrapComponent />
    } else {
      return <Redirect to='/user/login' />
    }
  }
}
export default HeightRouter