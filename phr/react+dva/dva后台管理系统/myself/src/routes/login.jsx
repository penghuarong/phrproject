import React,{Component} from 'react';
import { connect } from 'dva';
import styles from "./car.css";
import { Input , Button,message} from 'antd';
import {getUsermsg} from "../services/users";
const mapStateToprops = (state)=>{
  const example = state.example;
  return {
    ...example
  }
}
@connect(mapStateToprops)
class LoginPage extends Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }
    handleSubmit=()=>{
        if(this.refs.userName.state.value === "" || this.refs.password.state.value === ""){
            message.success("用户名和密码不能为空！！")
        }else{
            getUsermsg({
                phone:this.refs.userName.state.value,
                password:this.refs.password.state.value
            }).then((res)=>{
                window.localStorage.setItem("token",123)
                this.props.history.push("/admin")
            })
        }
    }
  render(){
    return (
      <div>
        <div className={styles.loginHeader} >
            <img src="data:image/png;base64,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" alt=""/>
        </div>
        <div className={styles.loginCon}>
            <div className={styles.login_form} style={{width:"400px",height:"200px",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",padding:"10px 50px"}}>
                <Input placeholder="请输入用户名" ref="userName" />
                <Input placeholder="请输入密码" ref="password"/>
                <Button type="primary" block onClick={this.handleSubmit} style={{background:"rgb(64, 106, 152)"}}>登录</Button>
            </div>
        </div>
      </div>
    );
  }
}
export default LoginPage;