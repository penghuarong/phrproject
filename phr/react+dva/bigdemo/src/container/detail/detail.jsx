import React, { Component } from 'react';
import axios from "axios";
export default class Detail extends Component{
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
    render(){
      let datas =  this.state.data.length && this.state.data.filter((itm)=>{
            return itm.id == this.props.match.params.id1
        })[0].pic.filter((item)=>{
            return item.id == this.props.match.params.id2
        })[0]
        return(
            <div>
              <img src={datas.img} alt=""/>
            </div>
        )
    }
}