<template>
    <div class="temp">
        <el-carousel :interval="2000" height="200px">
            <el-carousel-item v-for="a in carouselList">
            <img :src="a.picUrl" alt="" width=100%>
            </el-carousel-item>
        </el-carousel>
        <ul class="song_list" ref="song_list_scroll">
            <div>
                <li v-for="(song,i) in songsList">
                    <span>{{i+1}}</span>
                    <img :src="`//y.gtimg.cn/music/photo_new/T002R300x300M000${song.data.albummid}.jpg?max_age=2592000`
                    " alt="">
                    <router-link :to="`/music/rank/${song.data.albummid}.html`">
                        <h2>
                            <p>{{song.data.songname}}</p>
                            <span v-for="(a,b) in song">
                                <b v-for="(c,d) in a.singer">{{c.name}}</b>
                            </span>
                        </h2>
                    </router-link>
                </li>
            </div>
        </ul>
    </div>
</template>
<script>
    import BScroll from "better-scroll";
    import {
        getCarousel,
        getSongs
    } from "../../api/rank";
    export default {
        name: "app",
        data() {
            return {
                songsList: [],
                carouselList: []
            }
        },
        mounted() {
            this.getCarouselList();
            this.getSongsList();
            this.$nextTick(() => {
                new BScroll(this.$refs.song_list_scroll, {
                    click: true,
                    scrollbar: true
                })
            })
        },
        methods: {
            getCarouselList() {
                getCarousel().then(res => {
                    this.carouselList = res.data.data;
                })
            },
            getSongsList() {
                getSongs().then((res) => {
                    this.songsList = res.songlist;
                })
            }
        }
    }
</script>
<style>
    .temp {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    
    .song_list {
        flex: 1;
        width: 100%;
        overflow: hidden;
    }
    
    .song_list li {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
        padding-left: 10px;
    }
    
    .song_list li img {
        width: 80px;
        margin: 0 20px;
    }
    
    .song_list a {
        color: rgba(0, 0, 0, .7);
    }
    
    .song_list li h2 {
        flex: 1;
        display: flex;
    }
    
    .song_list b {
        margin-left: 100px;
    }
</style>