import React, { Component } from 'react';
import Carousel from "../../components/carousel/index.jsx";
import List from "../../components/list/list.jsx";
import {connect} from "react-redux";
import axios from "axios";
import "../../mock/mock.js";
import * as opt from "../../store/action/action.js";
import Head from "../../components/head/head.jsx";
class Home extends Component {
    componentDidMount(){
        this.getNav()
        this.getList()
    }
    getNav(){
        const {saveNav} = this.props;
        axios.get("/swiperData").then((res)=>{
            saveNav(res.data)
        })
    }
    getList(){
        const {saveList} = this.props;
        axios.get("/ListData").then((res)=>{
            saveList(res.data)
        })
    }
    render() {
        const {navData,listData} = this.props
        return (
            <div>
                <Head></Head>
                <Carousel navData={navData}></Carousel>
                <List saveList={listData}></List>
            </div>
        );
    }
}
export default connect((store)=>{
    return store.DiscussStore
},(dispatch)=>{
    return{
        saveNav(payload){
            dispatch(opt.saveNav(payload))
        },
        saveList(payload){
            dispatch(opt.saveList(payload))
        }
    }
})(Home)