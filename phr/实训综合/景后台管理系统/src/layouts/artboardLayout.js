import React from 'react'
import { Switch } from 'dva/router'
import { Layout,  Breadcrumb, Tooltip, Icon } from 'antd'
import Headers from './components/headers'
import styles from './css/style.css'
import { getBaseLayoutPage, RedirectRouter } from '../config/router'
import MenuList from './components/menu'
const { Content } = Layout
class ArtboardLayout extends React.Component {
  constructor () {
    super()
  }
  render () {
    const app = this.props.app
    const routers = getBaseLayoutPage(app, '/artboard')
    const redirectRouter = RedirectRouter()
    return (
      <div>
        <Layout className="baseLayoutHeader">
          <Headers>
            <Tooltip placement="bottomLeft" arrowPointAtCenter={true}>
              <p>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURcHBwb+/v7+/v76+vujo6OHh4cnJydTU1IOqnXYAAAADdFJOUxPppyMYpxkAAAD6SURBVEjH7dfbDYIwFAbguoHRCYwTKLcBOIUBaHQAIAxQwvwSEQpyaH/FFxP+5y89vacV4uQBOQix86DsxRmDV3HE4EV4YDa4QQRWSjYILKnNzQ0jekY7Yd3B1AVDeiV3wKCHsQPWPUwdkIbYYWSgtsLAwMwKfQNjFCZWWPwBhEcNz+NoZfLfrLXZPYkD+gtd/H6H97UT5+EK0FPY1ZbABaDYygysuTEvtqg9sI9AiyV/o8xgRNj0DLtHaiuszOahxgJLGueeL8Gpa8vnPHx30yEZGKo5lBwMiEnGwIKDKQMVB+UaSGzWwO2psMGPIfxgh78A8KcC/aY8ACmMo3JtJ3ljAAAAAElFTkSuQmCC" alt=""/>
                <span>淘小宝技术部</span>
                <Icon type="caret-down" />
              </p>
            </Tooltip>
          </Headers>
          <Layout className={styles.baseLayoutContent}>
          <MenuList />
          <Layout>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <h2>首页</h2>
            <Content style={{
              margin: '24px 16px', paddingBottom:"20px", background: '#fff', minHeight: 280,
            }}
            >
            <Switch>
              {
                redirectRouter
              }
            </Switch>
            <Switch>
              {routers}
            </Switch>
            </Content>
          </Layout>
        </Layout>
          </Layout>
        
      </div>
    )
  }
}
export default ArtboardLayout