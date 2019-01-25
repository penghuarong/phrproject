<template>
    <div class="page_home">
        <headBar />
            <Scroll class="scroll_home">
                    <Tabbar :navList="nav" @changes="navChange" :activeIndex="activeIndex"/>
                    <swiper ref="mySwiper" :options="swiperOption">
                        <swiper-slide>
                            <pageOne />
                        </swiper-slide>
                        <swiper-slide>
                            <pageTwo />
                        </swiper-slide>
                    </swiper>
            </Scroll>
        <Footer />
    </div>
</template>
<script>
    import {
        swiper,
        swiperSlide
    } from "vue-awesome-swiper";
    import headBar from "./components/homeHeadBar";
    import Tabbar from "../../components/tabBar.vue";
    import Footer from "../../components/footer.vue";
    import pageOne from "./children/page1";
    import pageTwo from "./children/page2";
    import Scroll from "@/components/scroll"
    import axios from "axios";
    export default {
        name: "App",
        data() {
            return {
                pageOneData: [],
                nav: [{
                    text: '多点超市'
                }, {
                    text: '全球精选'
                }],
                activeIndex: 0,
                swiperOption: {
                    on: {
                        slideChange: () => {
                            this.activeIndex = this.swiper.activeIndex
                        }
                    }
                }
            }
        },
        components: {
            headBar,
            Tabbar,
            swiper,
            swiperSlide,
            pageOne,
            pageTwo,
            Footer,
            Scroll
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        methods: {
            navChange(index, item) {
                this.swiper.slideTo(index, 200, false)
            }
        }
    }
</script>
<style>
    @import "../../../node_modules/swiper/dist/css/swiper.css";
    .page_home {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    
    .scroll_home {
        flex: 1;
        overflow: hidden;
    }
    
    .page_con {
        width: 100%;
        height: auto;
    }
</style>