import React, { Component } from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import routers from "@/router/router.config";
import SlideMenu from "./SlideMenu";

import Loadable from 'react-loadable';
import Loading from '@/components/LoadingComponent';

import { Layout, Icon,Menu,Tabs } from 'antd';
const { Header,Content } = Layout;

const baseRouters = routers['/']
const getRoutes = (routes)=>{
    let newRoutes = [];
    routes.forEach((item,index)=>{
        if(item.children){
            newRoutes = newRoutes.concat(getRoutes(item.children))
        }else{
            newRoutes.push(item)
        }
    })
    return newRoutes;
}
const getRedirect = (routes)=>{
    let newRoutes = [];
    routes.forEach((item,index)=>{
        if(item.children){
            newRoutes.push({
                path:item.path,
                redirectTo:item.children[0].path
            })
        }
    })
    return newRoutes;
}
const RenderRouter = ()=>{
    const routerss = getRoutes(baseRouters)
    const redirectRouters = getRedirect(baseRouters);
    return(
        <div>
            <Switch>
                <Redirect from="/" exact to="/home"/>
                {
                    redirectRouters.map((item,index)=>{
                        return <Redirect from={item.path} key={index} exact to={item.redirectTo} />
                    })
                }
            </Switch>
            <Switch>
                {
                   routerss.map((item,index)=>{
                    return <Route path={item.path} key={index} exact render={()=>{
                        const RouterComponent = Loadable({
                            loader:item.component,
                            loading:Loading
                        })
                        return <RouterComponent />
                    }}></Route>
                   }) 
                }
            </Switch>
        </div>    
    )
}
let Contents = ({children,collapsed,toggle})=>{
    return (
            <Layout>
            <Header style={{ background: '#000', padding: 0 }}>
                <Icon
                className="trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={toggle}
                />
                <div style={{color:"#fff",fontSize:"20px",fontWeight:"bold"}}>应用监控系统</div>
                <Menu theme="dark" style={{ lineHeight: '64px'}} mode="horizontal"> 
                    <Menu.Item key="1">首页</Menu.Item>
                    <Menu.Item key="2">反馈</Menu.Item>
                    <Menu.Item key="3">帮助</Menu.Item>
                </Menu>
            </Header>
            <Content style={{
                margin: '24px 16px', padding: 24, background: '#fff'
            }}
            >
            <Tabs>
                <Tabs.TabPane tab="行业榜单" key="1">{children}</Tabs.TabPane>
                <Tabs.TabPane tab="粉丝榜单" key="2">Content of tab 2</Tabs.TabPane>
                <Tabs.TabPane tab="黑马榜单" key="3">Content of tab 3</Tabs.TabPane>
            </Tabs>
            </Content>
        </Layout>
    )
      
}
class BaseLayout extends Component{
    constructor(props){
        super(props)
        this.state = {
            collapsed: false,
        }
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
 render(){
        return(
        <Layout>
            <SlideMenu collapsed={this.state.collapsed}/>
            <Contents collapsed={this.state.collapsed} toggle={this.toggle}>
                <RenderRouter />
            </Contents>
        </Layout>
    )
    }
}
export default BaseLayout
//代理
// "proxy": {
    //     "/analysisv2": {
    //         "target": "http://api.data.cqxcx.net",
    //         "changeOrigin":true
    //     }
    // },