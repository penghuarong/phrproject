import React from 'react'
import menuConfig from '../../config/menu'
import { Menu, Layout, Icon } from 'antd'
import { withRouter } from 'react-router-dom'
const SubMenu = Menu.SubMenu
const { Sider } = Layout
@withRouter
class MenuList extends React.Component {
  constructor () {
    super()
  }
  toMenuPath = ({key, keyPath}) => {
    this.props.history.push(key)
  }
  render () {
    return (
      <Sider style={{ background: '#fff' }}>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}  onClick={this.toMenuPath}>
          {
            menuConfig.map((item, index) => {
              return <SubMenu key={item.path} title={
                <span><Icon type={item.icon} /><span>{item.text}</span></span>
              }>
                {
                item.children.map((subItem, subIndex) => {
                  return <Menu.Item key={subItem.path}>
                          <Icon type={subItem.icon} />
                          <span>{subItem.text}</span>
                        </Menu.Item>
                })
              }
              </SubMenu>
            })
          }
        </Menu>
      </Sider>
    )
  }
}
export default MenuList