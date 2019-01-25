/*
 * @Author: PengHuaRong 
 * @Date: 2018-10-13 11:21:20 
 * @Last Modified by: PengHuaRong
 * @Last Modified time: 2018-10-14 20:43:53
 */
import React, { Component } from 'react';
export default class HomeRight extends Component{
    detailimg=(id1,id2)=>{
        this.props.history.push(`/detail/${id1}/${id2}`)
    }
    render(){
        return(
            <ul className="right">
            {
                this.props.data.length && this.props.data.map((file,index)=>{
                    return(index===this.props.ind? <li key={index}>
                    <h3> {file.tit} </h3>
                    {file.pic.map((item,i)=>{
                        return <img key={i} src={item.img} alt="" onClick={()=>this.detailimg(file.id,item.id)}/>
                    })}
                    </li>:<li key={index} style={{display:"none"}}></li>)
                })
            }
            </ul>
        )
    }
}