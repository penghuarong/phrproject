import React from 'react'
import { Switch } from 'dva/router'
import { getBaseLayoutPage, RedirectRouter } from '../config/router'
class BaseLayout extends React.Component {
  constructor (props) {
    super (props)
  }
  render () {
    const app = this.props.app
    const routers = getBaseLayoutPage(app, "/")
    const redirectRouter = RedirectRouter()
    return (
      <div>
        <Switch>
          {
            redirectRouter
          }
        </Switch>
        <Switch>
          {routers}
        </Switch>
      </div>
    )
  }
}
export default BaseLayout