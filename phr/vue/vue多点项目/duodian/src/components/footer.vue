<template>
    <div class="footer">
        <router-link to="/home">
            <i class="iconfont icon-shouye"></i>
            <span>首页</span>
        </router-link>
        <router-link to="/classify">
            <i class="iconfont icon-fenlei-xuanzhong"></i>
            <span>分类</span>
        </router-link>
        <router-link to="/member">
            <i class="iconfont icon-shouye"></i>
            <span>会员</span>
        </router-link>
        <router-link to="/car">
            <i class="iconfont icon-gouwuche"></i>
            <b class="num">{{$store.state.num}}</b>
            <span>购物车</span>
        </router-link>
        <router-link to="/myself">
            <i class="iconfont icon-gerenxinxi"></i>
            <span>我的</span>
        </router-link>
    </div>
</template>
<script>
    export default {
        props: {
            num: {
                type: Number
            }
        }
    }
</script>
<style>
    @import "../fonts/iconfont.css";
    .footer {
        width: 100%;
        display: flex;
        height: 50px;
        flex-shrink: 0;
        background: #fff;
        z-index: 999999999;
    }
    
    .footer a {
        width: 20%;
        display: inline-block;
        color: #000;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    .num {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: red;
        text-align: center;
        line-height: 20px;
        font-size: 12px;
        color: #fff;
        position: absolute;
        right: 21%;
        bottom: 30px;
    }
    
    .footer i.iconfont {
        font-size: 18px;
        color: #ccc;
    }
    
    .footer span {
        font-size: 12px;
        color: #ccc;
    }
</style>