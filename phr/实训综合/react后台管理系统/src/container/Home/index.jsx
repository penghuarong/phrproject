import React, { Component } from "react";
import { Table,Button,Dropdown,Icon,Menu,message } from 'antd';
import api from "@/api";

class homePage extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
            data_type:[],
            data_time:[],
            columns:[{
            title: '排行',
            dataIndex: 'index',
            }, {
            title: '播主',
            dataIndex: 'avatar_url',
            width:'50px',
            render: (text,record) => (<img src={record.avatar_url} style={{width:"30px"}} key={text}/>)//这里放后台返回的图片的路径或者整个<img/>  
            },{
            title: '',
            dataIndex: 'nickname',
            }, {
            title: '粉丝数',
            dataIndex: 'follower_count',
            },{
            title: '集均点赞',
            dataIndex: 'average_favorited',
            },{
            title: '热度指数',
            dataIndex: 'hot_index',
            }],
            page:1,
            pageSize:20,
            type:1,
            time:[]
        }
    }
    componentDidMount(){
        this.getaidouList()
        this.getDataType()
        this.getTimeData()
    }
    getaidouList() {
        api.aidou.aidouList({
            page: this.state.page,
            pageSize: this.state.pageSize
        }).then((res) => {
            this.setState({
                data:res.data
            })
            let newData = this.state.data.map((item,index)=>{
                return {
                            ...item,
                            page:this.state.page,
                            pageSize:this.state.pageSize,
                            index: index+1
                        }
            })
            console.log(newData,9999999)
            this.setState({
                data:newData,
                // pagination:{
                //     total:0,
                //     current:1,
                //     pageSize:res.pageSize
                // }
            })
        })
    }
    getDataType(){
        api.aidou.aidouType().then((res)=>{
            this.setState({
                data_type:res.data
            })
        })
    }
    getTimeData(){
        api.aidou.aidouTime().then((res)=>{
            this.setState({
                data_time:res.data
            })
        })
    }
    handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
      }
    // fliterChange(fliter){
    //     console.log(123)
        // this.setState({
        //     page:1
        // })
        // this.getaidouList(fliter)
    // }
    typeChange=(i,time)=>{
        api.aidou.aidouTime().then((res)=>{
            console.log(res.data,7878)
            this.setState({
                time:res.data
            })
        })
        api.aidou.aidouList({
            page: this.state.page,
            pageSize: this.state.pageSize,
            type:i,
            time:time
        }).then((res)=>{
            console.log(res,5656555)
        })
        
    }
    render(){
        const {data,columns} = this.state;
        const menu = (
            <Menu onClick={this.handleMenuClick}>
            {
                this.state.data_time.map((item,ind)=>{
                    return <Menu.Item key={ind}><Icon type="user" />{item.name}</Menu.Item>
                })
            }
            </Menu>
          );
        return ( 
            <div>
                {/* <div className="time_type"> */}
                {/* {
                    this.state.time.map((item)=>{
                        console.log(item)
                        return (
                            <div>{item}</div>
                        )
                    })
                } */}
                <div className="time_type">
                    <Button type="primary" onClick={()=>this.typeChange(1)}>日榜</Button>
                    <Button type="primary" onClick={()=>this.typeChange(2)}>周榜</Button>
                    <Button type="primary" onClick={()=>this.typeChange(3)}>月榜</Button>
                    <Dropdown overlay={menu}>
                        <Button style={{ marginLeft: 8 }}>
                            Button <Icon type="down" />
                        </Button>
                    </Dropdown>
                </div>  
                   
                
                <div className="data_type">
                {
                    this.state.data_type.map((item,index)=>{
                        return <Button key={index}>{item.title}</Button>
                    })
                }
                </div>
                <Table columns={columns} dataSource={data} size="middle" />
            </div>    
        )
    }
   
}
export default homePage