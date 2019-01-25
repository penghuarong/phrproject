import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage.jsx';
// import HomePage from './routes/home.jsx';
// import ProductList from './routes/productList.jsx';
// import User from './routes/user.jsx';
// import Car from "./routes/quickCar";
import BaseLayout from "./layout/BaseLayout";
import {getRouteLayout} from "./common/router.config.js";

function RouterConfig({ history,app }) {
  const routes = getRouteLayout(app)
  return (
    // <Router history={history}>
    //   <Switch>
    //     <Route path="/" render={(props)=>{
    //       return <BaseLayout {...props} app={app}/>
    //     }} />
    //   </Switch>
    // </Router>
    <Router history={history}>
      <Switch>
        {routes.map((item, index) => {
          return (
            <Route path={item.path} component={item.component} key={index}/>
          )
        })}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
// "proxy": {
//   "/api": {
//       "target": "http://39.108.180.233:3001",
//       "changeOrigin": true
//   }
// }
// {
//   getRouterLayout().map((item,index)=>{
//     return (
//       <Route path={item.path} component={item.component}>
//     )
//   })
// }