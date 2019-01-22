import React, { Component } from 'react';
import axios from "axios";
class Will extends Component {
    constructor(props){
        super(props)
        this.state={
            moviedata:""
        }
    }
    componentDidMount(){
        axios.get("/movie").then((res)=>{
            this.setState({
                moviedata:res.data[1].result
            })
        })
    }
    render() {
        return (
            <ul className="content">
            {
                this.state.moviedata.length && this.state.moviedata.map((item,ind)=>{
                    return(
                        <li key={ind}>
                            <img src={item.img} alt=""/>
                            <div className="center">
                                <h2>{item.name}</h2>
                                <p>{item.actor}</p>
                            </div>
                            <div className="r">
                                <button style={{background:item.state==="购票"?"#f03d37":"#3c9fe6"}}>{item.state}</button>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
        );
    }
}
export default Will;