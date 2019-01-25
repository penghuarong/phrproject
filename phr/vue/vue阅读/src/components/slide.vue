<template>
    <transition name="slide-fade">
            <div class="slide" v-show="ischallengeshow" ref="slide">
                    <div class="slide_head">
                        <h3>挑战题</h3>
                        <span class="close" @click="close">x</span>
                    </div>
                    <div class="tab">
                            <!-- :class="[tabbg === 1?'active':'']" -->
                        <div  :class="[tabbg?'':'active']" @click="changeTab(0)">1</div>
                        <div  :class="[tabbg?'active':'']" @click="changeTab(1)">2</div>
                    </div>
                    <swiper :options="swiperOption" ref="mySwiper">
                        <div class="swiper-pagination" slot="pagination"></div>
                        <swiper-slide>
                            <div class="question">
                                <p>
                                    <span class="ask">问</span>
                                    <span class="asked">柳树为什么没长大？</span>
                                </p>
                                <ul>
                                    <li>
                                        <span>A:</span>
                                        <p>因为小柳树没有经受成长的历练，也没有获得足够的营养。</p>
                                    </li>
                                    <li>
                                        <span>B:</span>
                                        <p>因为小柳树没有经受成长的历练，也没有获得足够的营养。</p>
                                    </li>
                                    <li>
                                        <span>C:</span>
                                        <p>因为小柳树没有经受成长的历练，也没有获得足够的营养。</p>
                                    </li>
                                    <li>
                                        <span>D:</span>
                                        <p>因为小柳树没有经受成长的历练，也没有获得足够的营养。</p>
                                    </li>
                                </ul>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="question">
                                    <p>
                                        <span class="ask">问</span>
                                        <span class="asked">小柳树留在妈妈身边能得分到什么？</span>
                                    </p>
                                    <ul>
                                        <li>
                                            <span>A:</span>
                                            <p>爷爷奶奶的保护。</p>
                                        </li>
                                        <li>
                                            <span>B:</span>
                                            <p>爷爷奶奶的保护。</p>
                                        </li>
                                        <li>
                                            <span>C:</span>
                                            <p>爷爷奶奶的保护</p>
                                        </li>
                                        <li>
                                            <span>D:</span>
                                            <p>爷爷奶奶的保护</p>
                                        </li>
                                    </ul>
                                </div>
                        </swiper-slide>
                    </swiper>
                </div>
    </transition>
</template>
<script>
    import {
        swiper,
        swiperSlide
    } from "vue-awesome-swiper";
    export default {
        data() {
            return {
                startY: 0,
                tabbg: 0,
                ischallengeshow: false,
                activeid: 0,
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    on: {
                        slideChangeTransitionEnd: function(swiper) {
                            this.tabbg = this.activeIndex
                                // console.log("tabbg", this.tabbg, "index", this.activeIndex)
                        },
                        // slideChange: function() {
                        //     console.log(11, this.activeIndex);
                        //     this.tabbg = this.activeIndex
                        //     console.log(this.tabbg, 78)
                        // }
                    },

                }
            }
        },
        mounted() {
            // this.tabbg = this.activeid;
            // console.log(this.tabbg, 77777777777777)
            Bus.$on("goChallenge", (aa) => {
                this.ischallengeshow = aa
            })
            this.slideMove()
        },
        components: {
            swiper,
            swiperSlide
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        methods: {
            close() {
                this.ischallengeshow = false
            },
            changeTab(index) {
                this.tabbg = index;
                this.swiper.slideTo(index, 500, false)
            },
            slideMove() {
                const slide = this.$refs.slide;
                // console.log(this.$refs.slide.offsetHeight, "----------------")
                slide.addEventListener('touchstart', (e) => {
                    this.startY = e.changedTouches[0].pageY
                })
                slide.addEventListener('touchmove', (e) => {
                    this.dvalueY = e.changedTouches[0].pageY - this.startY;
                    if (this.dvalueY < 0) {
                        this.dvalueY = 0
                    }
                    this.$refs.slide.style.bottom = -this.dvalueY + 'px';
                })
            }
        }
    }
</script>
<style>
    @import "../../node_modules/swiper/dist/css/swiper.css";
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    
    .slide-fade-enter,
    .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */
    
    .my-bullet {
        border-radius: .02rem;
        width: .04rem;
        height: .04rem;
        margin: 0 .03rem;
        display: inline-block;
        background: rgba(0, 0, 0, 0.20);
    }
    
    .tab {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    
    .tab div {
        width: 50%;
        text-align: center;
        line-height: 50px;
        height: 50px;
        background: #e0f0ff;
    }
    
    .my-bullet-active {
        background: #3CDBC0;
        width: .16rem;
    }
    
    .slide {
        width: 100%;
        background: #fff;
        position: absolute;
        bottom: 0;
        border-radius: 10px 10px 0 0;
        overflow: hidden;
    }
    
    .slide_head {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        box-sizing: border-box;
        height: 50px;
        background: #2f9afc;
    }
    
    h3 {
        font-weight: normal;
        color: #fff;
    }
    
    .close {
        color: #fff;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
    }
    
    .question {
        padding: 0 20px;
    }
    
    .question .ask {
        color: #fff;
        display: inline-block;
        width: 35px;
        height: 30px;
        border-radius: 5px;
        background: #fe7c5b;
        text-align: center;
        line-height: 30px;
        margin-top: 10px;
        font-weight: bold;
    }
    
    .asked {
        font-weight: bold;
    }
    
    .question ul li {
        display: flex;
        align-items: center;
        padding: 10px;
        box-shadow: 0 0 5px skyblue;
        margin: 10px 0;
    }
    
    .question ul li span {
        width: 50px;
        text-align: center;
    }
    
    .question ul li p {
        flex: 1;
        color: rgba(0, 0, 0, .7)
    }
    
    .active {
        background: #b8dafb!important;
    }
</style>