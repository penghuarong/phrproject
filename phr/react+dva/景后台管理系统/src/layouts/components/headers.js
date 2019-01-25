import React from 'react'
import { Layout, Icon } from 'antd'
import styles from '../css/style.css'
const { Header } = Layout

class Headers extends React.Component {
  constructor () {
    super()
  }
  render () {
    const { children } = this.props
    return (
      <Header className={styles.header}>
        <h2>应用管理系统</h2>
        <ul>
          <li>
          <Icon type="home" />
            <span>首页</span>
          </li>
          <li>
          <Icon type="exception" />
            <span>反馈</span>
          </li>
          <li>
            <Icon type="question-circle" />
            <span>帮助</span>
          </li>
          {children}
       </ul>
      </Header>
    )
  }
}

export default Headers
