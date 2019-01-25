<template>
    <div class="header">
        <span class="iconfont icon-xiangzuo"></span>
        <span class="iconfont icon-set" @click="mark"></span>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                flag: true
            }
        },
        methods: {
            mark() {
                Bus.$emit("aa", this.flag)
                this.flag = !this.flag
                    // this.$emit("mark")
            }
        }
    }
</script>
<style>
    @import "../fonts/iconfont.css";
    .header {
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        align-items: center;
    }
    
    .header .icon-xiangzuo,
    .header .icon-set {
        color: #b7cfec;
    }
</style>