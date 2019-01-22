import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from "../container/home/home.jsx";
import Detail from "../components/detail/detail.jsx";
import Movie from "../components/movie/movie.jsx";
import Login from "../components/login/login.jsx";
class RouterLink extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Login}></Route>
                        <Route exact path="/home" component={Home}></Route>
                        <Route exact path="/detail/:id" component={Detail}></Route>
                        <Route exact path="/movie/:tit" component={Movie}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}
export default RouterLink;
