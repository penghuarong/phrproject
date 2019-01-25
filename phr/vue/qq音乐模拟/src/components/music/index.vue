<template>
    <div class="wrap">
        <header>QQ音乐</header>
        <section>
            <ul class="nav">
                <li>
                    <router-link to="/music/rank">推荐</router-link>
                </li>
                <li>
                    <router-link to="/music/toplist">排行榜</router-link>
                </li>
                <li>
                    <router-link to="/music/search">搜索</router-link>
                </li>
            </ul>
            <transition mode="out-in" enter-active-class="animated zoomIn" leave-active-class="animated rollOut">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </section>
    </div>
</template>
<script>
    export default {
        name: "app"
    }
</script>
<style scoped>
    @import "../../css/qq.css";
    section {
        flex: 1;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    
    header {
        background: #31c27c;
    }
    
    .router-link-active {
        color: #31c27c;
        border-bottom: 2px solid #31c27c;
    }
</style>