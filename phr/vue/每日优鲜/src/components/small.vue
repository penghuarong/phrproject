<template>
    <div class="mark" v-show="init==true">
        <div class="small" v-for="a in carlistnew">
            <h4><i></i>弹框购物车<span @click="cancel">x</span></h4>
            <img :src="a.img" alt="">
            <h3>商品名称：<span>{{a.tit}}</span></h3>
            <p>价格：<span>{{a.price}}</span></p>
        </div>
    </div>
</template>
<script>
    export default {
        name: "app",
        props: {
            carlistnew: {},
            init: {}
        },
        methods: {
            cancel() {
                this.init = false
            }
        }
    }
</script>
<style></style>