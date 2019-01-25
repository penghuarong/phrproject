import React, { Component } from 'react';
import axios from "axios";
class Login extends Component {
    jump=()=>{
        const username=this.refs.user.value;
        const pwd = this.refs.pwd.value;
        axios.get("/user").then((res)=>{
            let result = res.data;
            let code = result.filter((file)=>{
                return file.name === username && file.pwd === pwd
            })
            if(code.length){
                // console.log("成功");
                this.props.history.push("/home");
            }else{
                alert("用户名或密码不正确，请重新登录！！！");
                console.log("失败")
            }
        })
        console.log(username,pwd);
    }
    render() {
        return (
            <div style={{padding:"0 30px"}}>
                <input type="text" ref="user" placeholder="请输入用户名" style={{border:"1px solid #ccc",width:"100%",height:"50px"}}/>
                <input type="password" ref="pwd" placeholder="请输入密码" style={{border:"1px solid #ccc",width:"100%",height:"50px",margin:"30px 0"}}/>
                <button onClick={this.jump} style={{border:"0",width:"100px",height:"50px",background:"skyblue",color:"#fff",fontSize:"20px"}}>登录</button>
                <button style={{border:"0",width:"100px",height:"50px",background:"red",color:"#fff",fontSize:"20px"}}>重置</button>
            </div>
        );
    }
}
export default Login;