import React from 'react';
import {Switch} from 'dva/router'
import {getBaseRoute} from '../../config/router'

const BaseLayout = (props) => {
  const app = props.app;
  const routes = getBaseRoute(app);
console.log(routes,123)
  return (
    <div>
      模板
      <Switch>
        {routes}
      </Switch>
    </div>
  );
};

BaseLayout.propTypes = {
};

export default BaseLayout;
