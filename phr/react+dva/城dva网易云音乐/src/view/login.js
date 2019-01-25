import React, { Component } from 'react';
import styles from '../style/login.scss';
import {connect} from 'dva'
class Login extends Component {
    constructor () {
        super();
        this.state={
            phone:'13439299426',
            password:'cheng.'
        }
    }
    changeIpt = (e,val) => {
        this.setState({
            [val]:e.target.value
        })
    }
    //判断手机号和密码判断  触发库里登录函数
    getLogin = () => {
        let {dispatch} =this.props;
        let {phone,password} =this.state;
        if(!(/^\d{11}$/.test(phone)) || phone===''){
            alert('手机号格式错误')
        }else if(!(/^\w{5,20}\.$/.test(password)) || password===''){
            alert('密码格式错误')
        }else{
            //登陆的时候同时触发登录和账号信息库里的方法，让账户那个仓库也拿到该请求所返回的值
            //方法二:可以通过effects中的select直接获取登录的库里的数据(比较简单)
            //方法三:登陆库里面进行了cookie的操作，可以把需要的值存储上，然后再账户信息的库里取值
            dispatch({
                type:'loginStore/login',
                obj:{
                    phone,
                    password
                }
            })
            dispatch({
                type:'messageStore/getMymessageId',
                obj:{
                    phone,
                    password
                }
            })
        }
    }
    render() {
        let {phone,password}=this.state;
        return (
            <div className={styles.wrap}>
                <div>
                    <p>用户名:<input value={phone} onChange={(e)=>{this.changeIpt(e,'phone')}}/></p>
                    <p>密码:<input  value={password} onChange={(e)=>{this.changeIpt(e,'password')}}/></p>
                    <button onClick={this.getLogin}>登录</button>
                </div>   
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return {...state.loginStore}
}
export default connect(mapStateToProps)(Login);