<template>
    <div class="footer">
        <Two :title="title" @aaa="bbb"></Two>
        <div class="updown">
            <span class="iconfont icon-shoucang1"></span>
            <span class="foot_text">收藏</span>
        </div>
        <div class="go" @click="go">去挑战</div>
        <div class="updown">
            <span class="iconfont icon-fenxiang3"></span>
            <span class="foot_text">分享</span>
        </div>
    </div>
</template>
<script>
    import Two from "./two.vue";
    export default {
        data() {
            return {
                goFlag: true,
                title: "huahua"
            }
        },
        components: {
            Two
        },
        methods: {
            go() {
                Bus.$emit("goChallenge", this.goFlag)
            },
            bbb(res) {
                console.log(res, 123)
            }
        }
    }
</script>
<style>
    @import "../fonts/iconfont.css";
    .footer {
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        align-items: center;
        background: #3099fc;
    }
    
    .updown {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .footer .iconfont {
        color: #fff;
    }
    
    .go {
        width: 100px;
        height: 40px;
        font-size: 16px;
        color: #fff;
        background: #fd6e49;
        border-radius: 20px;
        text-align: center;
        line-height: 40px;
    }
    
    .foot_text {
        font-size: 12px;
        color: #fff;
    }
</style>