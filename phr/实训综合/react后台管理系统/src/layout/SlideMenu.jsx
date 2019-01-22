import React, { Component } from "react";
import menuConfig from "@/router/menu.config";
import { Layout, Menu, Icon } from 'antd';
import { withRouter } from "react-router-dom";
const { Sider} = Layout;
const SubMenu = Menu.SubMenu;
class SlideMenu extends Component{
    constructor(props){
        super(props)
    }
    menuClick=({key})=>{
        this.props.history.push(key)
    }
    render(){
        const {collapsed} = this.props;
        return(
            <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            >
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this.menuClick}>
              {
                  menuConfig.map((item,index)=>{
                      if(item.children){
                        return(
                            <SubMenu key={item.path} title={<span><Icon type="mail" /><span>{item.text}</span></span>}>
                                {item.children.map((subItem,subIndex)=>{
                                    return <Menu.Item key={subItem.path}>{subItem.text}</Menu.Item>
                                })}
                            </SubMenu>
                        )
                      }else{
                        return(
                            <Menu.Item key={item.path}>
                            <Icon type="user" />
                            <span>{item.text}</span>
                            </Menu.Item>
                        )
                      }
                  })
              }
              </Menu>
          </Sider>
        )
    }
}
export default withRouter(SlideMenu)