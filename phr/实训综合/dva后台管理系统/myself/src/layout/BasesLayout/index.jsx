import React from 'react';
import {Switch, Route} from 'dva/router'
import {getChildRouter} from '../../common/router.config'

const BaseLayout = (props) => {
  const app = props.app;
  const routes = getChildRouter(app, '/');
  console.log(routes)
  return (
    <div>
      <Switch>
        {routes.map((item,index) => (
          <Route path={item.path} component={item.component} key={index} />
        ))}
      </Switch>
    </div>
  );
};

BaseLayout.propTypes = {
};

export default BaseLayout;
