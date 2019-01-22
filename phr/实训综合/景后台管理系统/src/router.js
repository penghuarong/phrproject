import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic'
function RouterConfig({ history, app }) {
  const BaseLayoutPage = dynamic({
    app,
    models: import('./models/example'),
    component: () => import('./layouts/baselayout.js')
  })
  const LoginPage = dynamic({
    app,
    models: import('./models/example'),
    component: () => import('./routes/login/')
  })
  const ArtboardLayout = dynamic({
    app,
    models: import('./models/example'),
    component: () => import('./layouts/artboardLayout')
  })
  return (
    <Router history={history}>
      <Switch>
        <Route
          path="/artboard"
          render={(props) => {
            return <ArtboardLayout {...props} app={app} />
          }}
          ></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route
          path="/"
          render={(props) => {
            return <BaseLayoutPage {...props} app={app} />
          }}
          />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
