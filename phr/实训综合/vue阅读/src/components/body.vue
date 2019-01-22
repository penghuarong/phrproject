<template> 
        <div class="body" ref="bg">
            <div class="scroll">
                <h2>小柳树</h2>
                <p class="er">530ER</p>
                <p class="count">段文字数：420</p>
                <div class="chabox">
                    <button class="challenge">具有挑战</button>
                </div>
                <div class="content">
                    <p  v-for="v in list" :style="{fontSize:aa+'px'}">{{v.tit}}</p>
                    <!-- <p >    小河边，生活着一棵头发长长的、绿绿的柳树妈妈。</p>
                    <p>    有一天，柳絮宝宝对妈妈说：“妈妈，我已经成熟了，让风姐姐带我到远方去旅行扎根吧。”</p>
                    <p>    “不，孩子，你离开妈妈的照顾，离开周围爷爷奶奶们的保护，是长不好的，还是留在我身边吧。”</p>
                    <p>    但是柳絮宝宝的兄弟姐妹都随风姐姐到远处的开阔地扎根落土了。</p>
                    <p>    春天到了，柳絮宝宝从泥土里钻出来，看看妈妈高大的身躯，再看周围爷爷奶奶们巨大的枝干，一种安全感油然而生。柳絮宝宝变成了小柳树。</p>
                    <img src="https://xykj-koala-demo.oss-cn-beijing.aliyuncs.com/books/images/8d245f0f848141cf8e63486d2554d707.jpg" alt="" width="100%">
                    <p>    大风刮来，呼呼作响，有爷爷奶奶们的包围，小柳树安然无恙；暴雨如注，有妈妈做伞，小柳树如在温室。</p>
                    <p>    小柳树心想，幸亏我没随风姐姐到远处去落土，不然我该怎样抵挡风雨啊！</p>
                    <p>    可是，当小柳树要吸吮土壤中养分的时候，营养已被爷爷奶奶们吸走；他要迎接阳光雨露，却被妈妈的高大身躯遮住。</p>
                    <p>    这样，一年又一年地过去了，小柳树还是那么小，他成了长不大的小不点啦。</p>
                    <p>    这一天，风姐姐告诉小柳树，它的哥哥姐姐们早已长成参天大树的时候，小柳树可羡慕啦！它也好想像哥哥姐姐们一样啊！</p> -->
                </div>
            </div>
        </div>
    </template>
<script>
    import BScroll from "better-scroll";
    import axios from "axios";
    export default {
        data() {
            return {
                list: [],
                aa: null
            }
        },
        mounted() {
            Bus.$on("fsize", (fontsize) => {
                this.aa = fontsize
            })
            Bus.$on("col", (colo) => {
                    this.$refs.bg.style.background = colo
                })
                // Bus.$on("sfz", (sfzs) => {
                //     console.log(this.$refs.fzs.style, 989)
                //     this.$refs.fzs.style.fontSize = `${sfzs}px`
                // })
                // Bus.$on("bfz", (bfzs) => {
                //     this.aa = `${bfzs}px`;
                //     console.log(this.aa);
                //     this.$refs.fzs.style.fontSize = `${bfzs}px`
                // })
            this.$nextTick(() => {
                new BScroll(this.$refs.bg, {
                    click: true,
                    scrollbar: true
                })
            })
            this.getJson()
        },
        methods: {
            getJson() {
                const url = "http://localhost:8081/api";
                axios.get(url).then((res) => {
                    this.list = res.data.data
                })
            }
        }
    }
</script>
<style>
    .body {
        width: 90%;
        height: 100%;
        background: #fff;
        margin-left: 5%;
        border-radius: 5px;
        position: relative;
        overflow: hidden;
    }
    
    h2 {
        font-weight: normal;
        height: 80px;
        line-height: 80px;
        padding-left: 20px;
    }
    
    .er,
    .count {
        color: #999999;
        padding-left: 20px;
    }
    
    .chabox {
        width: 100%;
        height: 40px;
    }
    
    .chabox .challenge {
        width: 100px;
        height: 35px;
        border-radius: 20px;
        text-align: center;
        line-height: 35px;
        color: #fff;
        background: #5fda9f;
        border: 0;
        outline: none;
        float: right;
        margin-right: 20px;
    }
    
    .content {
        width: 100%;
        padding: 0 10px;
        /* font-size: 18px!important; */
    }
    
    .content p {
        text-indent: 2em;
        letter-spacing: 3px;
        color: #495060;
        font-size: 14px;
    }
</style>