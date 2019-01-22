<template>
        <div class="eight_wrap">
           <eighthead msg="详情页"></eighthead>
            <div class="eight_sec">
                <img :src="eightdetail.img" alt="">
                <div class="bottom">
                    <h2>{{eightdetail.tit}}</h2>
                    <p>
                        <span>${{eightdetail.price}}</span>
                        <b>{{eightdetail.cheap}}</b>
                    </p>
                </div>
            </div>
            <div class="eight_foot">
                    名品折扣
            </div>
        </div>
</template>
<script>
    import axios from "axios";
    import eighthead from "./day18head.vue";
    export default {
        name: "app",
        data() {
            return {
                eightdetail: []
            }
        },
        mounted() {
            this.getJson();
        },
        components: {
            eighthead
        },
        methods: {
            getJson() {
                this.eightdetail = this.$route.query.con
            }
        }
    }
</script>
<style>
    @import "../css/day18.css";
</style>