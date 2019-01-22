import React, { Component } from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import UserLayout from "@/layout/UserLayout";
import BaseLayout from "@/layout/BaseLayout";
import Loadable from 'react-loadable';
import Loading from '@/components/LoadingComponent';
import authorization from "@/components/authorization";
// import Login from "@/container/Login/index.jsx"
export default class Router extends Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/login" exact render={()=>{
                        const RouterComponent = Loadable({
                            loader:()=>import('@/container/Login'),
                            loading:Loading
                        })
                        return <RouterComponent />
                    }}></Route>
                    <Route path="/user" component={UserLayout}></Route>
                    <Route path="/" component={authorization(BaseLayout)}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}