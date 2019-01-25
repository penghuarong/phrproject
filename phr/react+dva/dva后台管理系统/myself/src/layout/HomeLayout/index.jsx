import React from 'react';
import {Switch, Route} from 'dva/router'
import {getChildRouter,getRouteLayout} from '../../common/router.config'
import { Layout, Menu,Icon} from 'antd';
// import { withRouter } from "dva/router";
import {Link} from "dva/router";
// console.log(getRouteLayout()[0].children,"124")
const { SubMenu } = Menu;
const { Header, Content,Sider} = Layout;
// const first = getRouteLayout()[0].children.map((item,index)=>{
//   console.log(item.title,9090)
//   return item.path
// })
const HomeLayout = (props) => {
  const app = props.app;
  const routes = getChildRouter(app, '/admin');
  return (
    <div>
     <Layout>
      <Header className="header">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
          {
            getRouteLayout()[0].children.map((item,index)=>{
              return(
                <SubMenu key={index} title={<span><Icon type="user" />{item.title}</span>}>
                  {item.children ? 
                    item.children.map((itm,ind)=>{
                      return <Link to={itm.path} style={{height:"50px"}} key={item.path}><Menu.Item key={itm.path} style={{height:"50px",textAlign:"center",lineHeight:"50px",color:"rgba(0,0,0,.5)"}}>{itm.title}</Menu.Item></Link>
                    }) : ""
                  }
                </SubMenu>
              )
            })
          }
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content style={{ padding: '0 30px', marginTop: 0}}>
            <Switch>
              {routes.map((item,index) => (
                <Route path={item.path} component={item.component} key={index} />
              ))}
            </Switch>
          </Content>
        </Layout>
      </Layout>
  </Layout>
    </div>
  );
};
export default HomeLayout;