/*
 * @Author: PengHuaRong 
 * @Date: 2018-10-13 11:21:40 
 * @Last Modified by: PengHuaRong
 * @Last Modified time: 2018-10-14 20:13:58
 */
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from "../container/home/home.jsx";
import List from "../container/list/list.jsx";
import Detail from "../container/detail/detail.jsx";
class RouterView extends Component {
    // props无状态组件的props 相当于 this.props
    //{match} = this.props.match
    // goList = ({match})=>{
    //   console.log(match.url);
    //   return [
    //     <Route path={`${match.url}`} component={List} key="1"></Route>
    //   ]
    // }
    render() {
      return (
        <Router>
            <Switch>
                {/* <Route exact path="/" component={Home}></Route>
                <Route path="/list" component={this.goList}></Route>
                <Route path="/list/:id" component={Detail}></Route> */}
                <Route exact path="/" component={Home}></Route>
                <Route path="/list" component={List}></Route>
                <Route path="/detail/:id1/:id2" component={Detail}></Route>
            </Switch>
        </Router>
      );
    }
  }
  export default RouterView;