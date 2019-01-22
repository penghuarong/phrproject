<template>
    <div class="home_header_bar">
        <div class="headerbar_left">
            <span class="iconfont icon-dingwei"></span>
            <showLocation :changeAddress="this.$route.query.address" :changeFlag="flag"/>
        </div>
        <div class="headerbar_right">
            <span class="iconfont icon-fangdajing"></span>
            <img src="https://img.dmallcdn.com/store/201710/c857696b-13f8-40c7-95cf-34d552065f2e" alt="">
        </div>
    </div>
</template>
<script>
    import showLocation from "../components/showLocation.vue"
    export default {
        name: "App",
        data() {
            return {
                flag: false
            }
        },
        components: {
            showLocation
        },
        mounted() {
            console.log(this.$route.query.address, 9090)
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../../static/scss/_mixin.scss';
    @import '../../../static/scss/common.scss';
    .home_header_bar {
        width: 100%;
        height: 50px;
        flex-shrink: 0;
        display: flex;
        padding: 0 10px;
    }
    
    .headerbar_left {
        flex: 1;
        display: flex;
        align-items: center;
    }
    
    .headerbar_left input {
        flex: 1;
        margin-left: 10px;
        border: 0;
    }
    
    .headerbar_left span.iconfont,
    .headerbar_right span.iconfont {
        font-size: 16px;
        color: #ccc;
        margin-right: 10px;
    }
    
    .headerbar_right {
        width: 60px;
    }
    
    .headerbar_right img {
        width: 30px;
    }
    
    .headerbar_right {
        display: flex;
        align-items: center;
        margin-left: 10px;
        justify-content: space-around;
    }
</style>