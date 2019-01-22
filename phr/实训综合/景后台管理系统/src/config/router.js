import dynamic from 'dva/dynamic'
import { Route, Redirect } from 'dva/router'
const routerConfig = [{
  path: '/',
  children: [{
    path: '/',
    component: () => import('../routes/IndexPage'),
    models: ['user']
  }]
}, {
  path: '/artboard',
  models: ['artboard'],
  children: [{
    path: '/artboard/list',
    component: () => import('../routes/list/'),
    models: ['list']
  }, {
    path: '/artboard/list/detail/:id',
    component: () => import('../routes/detail/'),
    models: ['artboard']
  }, {
    path: '/artboard/product',
    component: () => import('../routes/product'),
    models: ['product', 'artboard']
  }, {
    path: '/artboard/addproduct',
    component: () => import('../routes/addproduct/'),
    models: ['addProduct', 'list']
  }]
}]


/**
 * 
 * @param {*} app  将定义的路由由数组的格式转化为对象
 */
const mountData = ( data) => {
  let obj = {}
  data.map((item, index) => {
    obj[item.path] = item.children
  })
  return obj
}

/**
 * 路由的重定向
 */
 export const RedirectRouter = () => {
  const redirectrouter = routerConfig.map((item, index) => {
    if (!item.component && item.children) {
      // const router = dynamic({
      //   app,
      //   models: () => item.children[0].models.map((models) => {
      //     return import(`../models/${models}`)
      //   }),
      //   component: item.children[0].component
      // })
      // console.log(router)
      return (
        <Redirect to={item.children[0].path}  path={item.path} exact component={item.children[0].component} key={index}></Redirect>
      )
    }
    // if (!item.children.component && item.children.children) {
    //   RedirectRouter(item.children)
    // }
  })
  return redirectrouter
}



/**
 * 获取为baseLayout的页面
 * @param {*} str 
 */
let newRouter = mountData(routerConfig)
export const getBaseLayoutPage = (app, val) => {
  const baseRouterpage = newRouter[val].map((item, index) => {
    const router = dynamic({
      app,
      models: () => item.models.map((models) => {
        return import(`../models/${models}`)
      }),
      component: item.component
    })
    return (
      <Route path={item.path} exact component={router} key={index}></Route>
    )
  })
  return baseRouterpage
}


// /**
//  * 获取为artboardLayout的页面
//  * @param {*} str
//  */

// export const getArtboardLayouPage = (app) => {
//   const ArtboardLayout = routerConfig[1].children.map((item, index)=> {
//     const router = dynamic({
//       app,
//       models: () => item.models.map((models) => {
//         return import(`../models/${models}`)
//       }),
//       component: item.component
//     })
//     return(
//       <Route path={item.path} exact component={router} key={index}></Route>
//     )
//   })
//   return ArtboardLayout
// }

// export default routerConfig