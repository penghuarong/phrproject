<template>
        <div class="toplist_wrap">
            <ul class="toplist_list">
                <li v-for="v in toplist">
                    <img :src="v.picUrl" alt="">
                    <div class="toplist_right">
                        <h2>{{v.topTitle}}</h2>
                        <p v-for="(a,i) in v.songList">
                            <span>{{i+1}}</span><b>{{a.songname}}</b><i>-{{a.singername}}</i>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
</template>
<script>
    import axios from "axios";
    export default {
        name: "app",
        data() {
            return {
                toplist: []
            }
        },
        mounted() {
            this.getJson();
        },
        methods: {
            getJson() {
                const url = "http://localhost:8888/api";
                axios.get(url).then((res) => {
                    this.toplist = res.data.data.data.topList;
                })
            }
        }
    }
</script>
<style>
    @import "../../css/toplist.css";
</style>