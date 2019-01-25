import React, { Component } from "react";
import { Input , Button} from 'antd';
import { withRouter } from "react-router-dom";
import {connect} from "react-redux";
import {
    getUserInfo
} from "@/store/action/user"
import api from "@/api";

class loginPage extends Component {
    constructor(props){
        super(props)
        this.state={
            userName:"",
            password:""
        }
    }
    handleSubmit=()=>{
        const {userName,password} = this.state;
        this.props.dispatch(
            getUserInfo({
                phone:userName,
                password:password
            })
        ).then(()=>{
            console.log("成功")
            console.log(this.props.history)
            this.props.history.push("/home")
        })
    }
    render(){
        return (
            <div className="login_box">
                <div className="login_form" style={{width:"350px",height:"200px",border:"1px solid #000",borderRadius:"5px",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",padding:"10px 30px"}}>
                    <Input placeholder="请输入用户名" value={this.state.userName} onChange={(e)=>{this.setState({userName:e.target.value})}}/>
                    <Input placeholder="请输入密码" value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}}/>
                    <Button type="primary" block onClick={this.handleSubmit}>登录</Button>
                </div>
            </div>
        )
    }
    
}
export default connect((state)=>{
    return {
        user:state.user.info
    }
})(withRouter(loginPage))