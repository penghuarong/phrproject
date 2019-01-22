<template>
    <div class="lunbo">
        <!-- <el-carousel :interval="4000" height="200px">
            <el-carousel-item v-for="item in lunbodata">
                <img :src="item.img" alt="" width="100%">
            </el-carousel-item>
        </el-carousel> -->
        
        <!-- <swiper :options="obj">
            <swiper-slide v-for="item in lunbodata">
                <img :src="item.img" alt="" width="100%">
            </swiper-slide>
        </swiper> -->
    </div>
</template>

<script>
    import axios from "axios";
    import {
        swiper,
        swiperSlide
    } from "vue-awesome-swiper";
    export default {
        name: 'app',
        data() {
            return {
                obj: {
                    loop: true,
                    autoplay: true
                },
                lunbodata: []
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        mounted() {
            this.getJson();
        },
        methods: {
            getJson() {
                const url = "http://localhost:8081/api/lunbo";
                axios.get(url).then((res) => {
                    this.lunbodata = res.data.data
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    @import "../../node_modules/swiper/dist/css/swiper.css";
    * {
        padding: 0;
        margin: 0;
        list-style: none;
        box-sizing: border-box;
    }
</style>