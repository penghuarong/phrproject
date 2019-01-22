import React, { Component } from 'react';

class Head extends Component {
    render() {
        return (
            <header>
                <span>北京<i className="iconfont icon-angle-down"></i></span>
                <form action="">
                <span className="iconfont icon-fangdajing"></span>
                    <input type="text" placeholder="请输入商品名称"/>
                </form>
                <p><span className="iconfont icon-gerenxinxi"></span><span>我的</span></p>
            </header>
        );
    }
}

export default Head;
