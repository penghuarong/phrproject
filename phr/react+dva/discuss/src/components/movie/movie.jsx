import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from "react-router-dom";
import Hot from "./hot.jsx";
import Will from "./will.jsx";
import "../../css/index.css";
class Movie extends Component {
    render() {
        return (
            <Router>
            <div>
                <header className="headMovie">猫眼电影</header>
                <ul className="navList">
                    <li><Link to="/hot">正在热映</Link></li>
                    <li><Link to="/will">即将上映</Link></li>
                </ul>
               <div>
                    <Switch>
                       <Route exact path="/hot" component={Hot}></Route>
                       <Route exact path="/will" component={Will}></Route>
                       <Redirect to="/hot"></Redirect>
                    </Switch>
               </div>
            </div>
            </Router>
        );
    }
}
export default Movie;