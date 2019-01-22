import React,{Component} from 'react';
// import { connect } from 'dva';
import { Table,Button,Input,Pagination,Popconfirm, message} from 'antd';
import {getUsersList,getRemove} from "../services/users.js";
import {Link} from "dva/router"
import styles from "./car.css";
// const mapStateToProps = (state)=>{
//   const user = state.user;
//   console.log(state,124)
//   return {
//     ...user,
//     loading: state.loading.models.user
//   }
// }
// @connect(mapStateToProps)
class User extends Component{
  constructor(props){
    super(props)
    this.state={
      list:[],
      page:1,
      pagesize:10,
      total:0,
      visible: false,
  }}
  componentDidMount(){
    getUsersList({
      page:1,
      pagesize:10
    }).then((res)=>{
      this.setState({
        list:res.data.data,
        total:res.data.total
      })
    })
  }
  changePage=(pages)=>{
    getUsersList({
      page:pages,
      pagesize:10
    }).then((res)=>{
      this.setState({
        list:res.data.data,
        total:res.data.total
      })
    })
  }
  handleOk = (e) => {
    this.setState({
        visible: false,
    });
  }
  handleCancel = (e) => {
    this.setState({
        visible: false,
    });
  }
  confirm=(id)=> {
    message.info('Clicked on Yes.');
    getRemove(id).then((res)=>{
      if(res.code === 1){
        getUsersList({
          page:1,
          pagesize:10
        }).then((res)=>{
          this.setState({
            list:res.data.data,
            total:Math.ceil(res.data.total/2)
          })
        })
      }
    })
  }
  changeSelect = () => {
    getUsersList({
      searchname:this.refs.input.state.value
    }).then((res)=>{
      this.setState({
        list:res.data.data,
        total:Math.ceil(res.data.total)
      })
    })
  }
  addData=()=>{
    // console.log(this.props.history.push('/addUser'),22222222222)
    // this.props.history.push('/addUser')
  }
  modify=()=>{
    // this.props.history.push
  }
  render(){
    const list = this.state.list.map((item, index) => ({
      ...item,
      key: index
    }));
    const {total} = this.state;
    const {loading} = this.props;
    const columns = [{
      title: '商品信息',
      dataIndex: 'img',
      key: 'img',
      width:60,
      render: (text,record) => <img src={record.img} key={text} width="60px"/>,
    },{
      title: '',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '原价',
      dataIndex: 'origPrice',
      key: 'origPrice',
    },{
      title: '现价',
      dataIndex: 'price',
      key: 'price',
    },{
      title: '库存',
      dataIndex: 'count',
      key: 'count',
    },{
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="#" key={text} onClick={()=>this.modify()}>修改 </a>
          <Popconfirm placement="topLeft" title="你确定要删除吗？" onConfirm={()=>this.confirm(record.id)} okText="Yes" cancelText="No">
            <a href="#">删除</a>
          </Popconfirm>
        </span>
      ),
    }];
    return (
      <div style={{marginTop:"50px"}}>
        <Input placeholder="请输入筛选条件" style={{width:"200px"}} onPressEnter={()=>this.changeSelect()} ref="input"/>
        <Link to="/addUser"><Button type="primary">新增数据</Button></Link>
        <Table 
        columns={columns} 
        loading={loading} 
        dataSource={list}
        pagination={false}
        />
        <Pagination defaultCurrent={1} total={total} onChange={this.changePage}/>
      </div>
    );
  }
}
export default User;