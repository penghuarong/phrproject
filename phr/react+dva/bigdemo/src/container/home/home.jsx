/*
 * @Author: PengHuaRong 
 * @Date: 2018-10-13 11:21:12 
 * @Last Modified by: PengHuaRong
 * @Last Modified time: 2018-10-14 20:48:27
 */
import React, { Component } from 'react';
import "../../mock/mock.js";
import axios from "axios";
import HomeLeft from "./homeleft.jsx";
import HomeRight from "./homeright.jsx";
import "../../css/amazon.css";
import "../../js/flexible.js";
export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            data:"",
            ind:0
        }
    }
    componentDidMount(){
        axios.get("/amazon").then((res)=>{
            this.setState({
                data:res.data
            })
        })
    }
    change=(ind)=>{
        this.setState({
            ind:ind
        })
    }
    render(){
        return(
            <div className="wraper">
                <HomeLeft title={this.state.data} change={this.change}></HomeLeft>
                <HomeRight data={this.state.data} history={this.props.history} ind={this.state.ind}></HomeRight>
            </div>
        )
    }
}