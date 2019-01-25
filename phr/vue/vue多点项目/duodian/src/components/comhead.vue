<template>
    <div class="comhead_head">
            <span class="iconfont icon-xiangzuo" @click="back"></span>
            <h2>{{title}}</h2>
            <span></span>
    </div>
</template>
<script>
    export default {
        props: ["title"],
        methods: {
            back() {
                this.$router.back()
            }
        }
    }
</script>
<style lang="scss" scoped>
    .comhead_head {
        display: flex;
        height: 50px;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        box-sizing: border-box;
        background: #fff;
        border-bottom: 1px solid #f8f8f8;
        flex-shrink: 0;
        span.iconfont {
            width: 30px;
            height: 30px;
            background: rgba(0, 0, 0, .6);
            color: #fff;
            border-radius: 50%;
            text-align: center;
            line-height: 30px;
        }
        h2 {
            font-size: 16px;
            font-weight: normal;
        }
    }
</style>