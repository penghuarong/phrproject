<template>
      <div class="home_pageone">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(v,i) in list" :key="i">
                <img :src="v.imageUrl" alt="" class="pageone_swiper_img">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>  
</template>
<script>
    import {
        swiper,
        swiperSlide
    } from "vue-awesome-swiper";
    export default {
        props: ["list"],
        data() {
            return {
                swiperOption: {
                    autoplay: true,
                    speed: 1000,
                    loop: true,
                    loopAdditionalSlides: 3,
                    pagination: {
                        el: '.swiper-pagination'
                    }
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        },
    }
</script>
<style>
    @import "../../../../node_modules/swiper/dist/css/swiper.css";
    .pageone_swiper_img {
        width: 100%;
    }
</style>