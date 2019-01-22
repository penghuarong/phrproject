import React, { Component } from 'react';
import ReactSwipe from "react-swipe";
import {Link} from "react-router-dom";
class Carousel extends Component {
    constructor(props){
        super(props)
        this.state={
            saveNav:[]
        }
    }
    render() {
        const {navData} = this.props;
        return (
            <ReactSwipe className="carousel" swipeOptions={{continuous:false}}>
            {
                navData.length && navData.map((file,ind)=>{
                    return(
                       <ul key={ind}>
                           {file.data.length && file.data.map((item,index)=>{
                                return(<Link key={index} to={{
                                    pathname:`/movie/${item.tit}`,
                                    // query:{
                                    //     id:item.id
                                    // }
                                }}>
                                    <li>
                                        <img src={item.img} alt=""/>
                                        <span>{item.tit}</span>
                                    </li>
                                </Link>
                                )
                           })}
                       </ul>
                    )
                })
            }
            </ReactSwipe>
        );
    }
}
export default Carousel;