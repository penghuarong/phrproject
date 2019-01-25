import React, { Component } from 'react';
import {Link} from "react-router-dom";
class List extends Component {
    render() {
        const {saveList} = this.props;
        return (
            <div>
                <ul className="list">
                    {
                        saveList.length && saveList.map((item)=>{
                            return (
                                <Link to={{
                                    pathname:`/detail/${item.id}`,
                                    query:{
                                        id:item.id
                                    }
                                }} key={item.id}>
                                    <li>
                                        <img src={item.img} alt=""/>
                                        <div className="right">
                                            <p>{item.tit}</p>
                                            <h4>{item.detail}</h4>
                                            <span>{item.price}元</span>
                                        </div>
                                    </li>
                                </Link>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
export default List;