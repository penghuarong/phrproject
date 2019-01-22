/*
 * @Author: PengHuaRong
 * @Date: 2018-10-13 11:21:24
 * @Last Modified by: PengHuaRong
 * @Last Modified time: 2018-10-13 11:49:33
 */
import React, { Component } from 'react';
export default class Homeleft extends Component{
    render(){
        return(
            <ul className="left">
                    {
                        this.props.title.length && this.props.title.map((file,index)=>{
                            return <li key={index} onClick={()=>this.props.change(index)}>{file.tit}</li>
                        })
                    }
            </ul>
        )
    }
}