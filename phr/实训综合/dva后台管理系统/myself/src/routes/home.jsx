import React,{ Component } from 'react';
import { connect } from 'dva';
import styles from './home.css';
import { Layout, Menu, Button,Table,Modal,Input } from 'antd';
const { Header, Content } = Layout;
class HomePage extends Component{
    constructor(props) {
        super(props)
        this.state={
            data:[{
                key: '1',
                name: 'John Brown',
                email: "13233007852@162.com",
                website: 'New York No. 1 Lake Park'
              }, {
                key: '2',
                name: 'Jim Green',
                email: "15901422059@162.com",
                website: 'London No. 1 Lake Park'
              }, {
                key: '3',
                name: 'Joe Black',
                email: "13383441530@162.com",
                website: 'Sidney No. 1 Lake Park'
              },{
                key: '4',
                name: 'Joe Black',
                email: "13383441530@162.com",
                website: 'Sidney No. 1 Lake Park'
              },{
                key: '5',
                name: 'Joe Black',
                email: "13383441530@162.com",
                website: 'Sidney No. 1 Lake Park'
              },{
                key: '6',
                name: 'Joe Black',
                email: "13383441530@162.com",
                website: 'Sidney No. 1 Lake Park'
              },{
                key: '7',
                name: 'Joe Black',
                email: "13383441530@162.com",
                website: 'Sidney No. 1 Lake Park'
              },{
                key: '8',
                name: 'Joe Black',
                email: "13383441530@162.com",
                website: 'Sidney No. 1 Lake Park'
              },{
                key: '9',
                name: 'Joe Black',
                email: "13383441530@162.com",
                website: 'Sidney No. 1 Lake Park'
              },{
                key: '10',
                name: 'Joe Black',
                email: "13383441530@162.com",
                website: 'Sidney No. 1 Lake Park'
              },{
                key: '11',
                name: 'Joe Black',
                email: "13383441530@162.com",
                website: 'Sidney No. 1 Lake Park'
              },{
                key: '12',
                name: 'Joe Black',
                email: "13383441530@162.com",
                website: 'Sidney No. 1 Lake Park'
              }],
            columns:[{
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
              }, {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
              }, {
                title: 'Website',
                dataIndex: 'website',
                key: 'website',
              }],
              visible: false
        }
    }
    addMsg=()=>{
        this.setState({
            visible: true,
        })
    }
    handleOk = (e) => {
        console.log(e,124);
        this.setState({
            visible: false,
        });
        let obj = {};
        obj.key = this.state.list.length+1;
        obj.name = this.refs.name.state.value;
        obj.email = this.refs.email.state.value;
        obj.website = this.refs.website.state.value;
        this.state.data.push(obj);
        console.log(this.state.data,111)
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    render(){
        return(
            <Layout className="layou">
                <Header>
                <div className="logo" />
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
                <Content style={{ padding: '0 50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    <Button type="primary" onClick={()=>this.addMsg()}>creatUser</Button>
                    <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                        <Input placeholder="请输入name" ref="name"/>
                        <Input placeholder="请输入email" ref="email"/>
                        <Input placeholder="请输入website" ref="website"/>
                    </Modal>
                    <div className={styles.content}>
                        <Table columns={this.state.columns} dataSource={this.state.data} />
                    </div>
                </div>
                </Content>
                
            </Layout>
        )
    }
}

HomePage.propTypes = {
};

export default connect()(HomePage);
