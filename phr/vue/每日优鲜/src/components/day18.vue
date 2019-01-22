<template>
    <div class="eight_wrap">
        <eighthead msg="民品折扣"></eighthead>
        <div class="eight_sec">
            <ul>
                <li v-for="list in eightdata">
                    <router-link :to="{path:`/day18detail/${list.tit}`,query:{con:list}}">
                        <img :src="list.img" alt="">
                        <div class="bottom">
                            <h2>{{list.tit}}</h2>
                            <p>
                                <span>${{list.price}}</span>
                                <b>{{list.cheap}}</b>
                            </p>
                        </div>
                    </router-link>
                </li>
            </ul>
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
                eightdata: []
            }
        },
        mounted() {
            this.getJson();
        },
        components: {
            eighthead,
        },
        methods: {
            getJson() {
                const url = "http://localhost:8081/apiday18"
                axios.get(url).then((res) => {
                    this.eightdata = res.data.data;
                })
            }
        }
    }
</script>
<style>
    @import "../css/day18.css";
</style>