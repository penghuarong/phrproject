import React, { Component } from 'react';
import axios from "axios";
class Detail extends Component {
    constructor(props){
        super(props)
        this.state={
            detailData:""
        }
    }
    componentDidMount(){
        const id = this.props.location.query.id;
        // console.log(id,9090);
        const objid = {id:id}
        axios.get("/ListDataDetail").then((res)=>{
              const result = res.data.filter((item) => {
                    return item.id === objid.id
        })[0]
        this.setState({
            detailData:result
        })
        })
    }
    back=()=>{
        window.history.go(-1)
    }
    render() {
        let {detailData} = this.state;
        return (
            <div className="detail">
               {
                    <div>
                        <button onClick={this.back}>返回</button>
                        <img src={detailData.img} alt=""/>
                        <p>{detailData.tit}</p>
                        <h6>{detailData.detail}</h6>
                        <h5>{detailData.price}元</h5>
                    </div>
               }
            </div>
        );
    }
}
export default Detail;