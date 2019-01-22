import React, { Component } from "react";
import routers from "@/router/router.config";
import {Route,Switch} from "react-router-dom";
const UserLayout = (props)=>{
    const baseRouters = routers['/user']
    return(
        <div>
            登陆
            <Switch>
                {
                   baseRouters.map((item,index)=>{
                    if(item.children){
                        return <Route path={item.path} key={index} component={item.component}></Route>
                    }
                   }) 
                }
            </Switch>
        </div>    
    )
}
export default UserLayout