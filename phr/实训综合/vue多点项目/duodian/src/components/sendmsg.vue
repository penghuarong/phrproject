<template>
    <div class="sendMsg">
        <p>
            <span>{{text1}}</span>
            <span class="text3">{{text3}}</span>
            <span>{{text2}}<i :class="icons" class="iconfont" :style="{color:color}"></i></span>
        </p>
    </div>
</template>
<script>
    export default {
        props: {
            text1: {
                type: String
            },
            text2: {
                type: String
            },
            icons: {
                type: String
            },
            text3: {
                type: String
            },
            color: {
                type: String
            }
        }
    }
</script>
<style lang="scss" scoped>
    .sendMsg {
        width: 100%;
        background: #fff;
        p {
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 10px;
            font-size: 16px;
            border-bottom: 1px solid #f7f7f7;
            color: rgba(0, 0, 0, .7)
        }
        i.iconfont {
            font-size: 20px;
            color: rgba(0, 0, 0, .4)
        }
    }
    
    .text3 {
        color: #ccc;
        font-size: 12px;
    }
</style>