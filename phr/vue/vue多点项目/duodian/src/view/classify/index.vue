<template>
        <div class="scroll">
            <div class="classify_con">
                <div class="classify_head">
                    <Tabbar :navList="nav" @changes="navChange" :activeIndex="activeIndex" label="categoryName"/>
                    <span class="iconfont icon-fangdajing"></span>
                </div>
               <div class="classify_content">
                <div class="left_menu">
                    <Tabbars :navList="leftList" label="categoryName" @changes="leftChange" ref="leftmenu"/>
                </div>
                   <div class="right_menu">
                        <Tabbar :navList="rightList" @changes="rightChange" ref="rightmenu" :activeIndex="activeIndex" label="categoryName"/>
                        <span class="iconfont icon-fenxiang4" @click="choose"></span>
                            <Scroll class="rightcon">
                                <Product :list="list" @click="addnum"/>
                                <Producttwo :list="newlist" @click="addnum"/>
                            </Scroll>
                   </div>
               </div>
            </div>
            <div class="mark" v-if="flag_mark" @click="mark_box">
                <div class="mark_choose">
                    <p class="sort">智能排序</p>
                    <p class="volumn">销量从高到底</p>
                    <p class="high" @click="pricehigh">价格从高到底</p>
                    <p class="low" @click="pricelow">价格从低到高</p>
                </div>   
            </div>
            <Footer :num="$store.state.num"/>
        </div>
</template>
<script>
    import Footer from "../../components/footer.vue";
    import Tabbar from "../../components/tabBar.vue";
    import Tabbars from "../../components/tabBars.vue";
    import Classifypage from "./components/classifypage.vue";
    import Product from "@/components/productList.vue";
    import Scroll from "@/components/scroll.vue";
    import Producttwo from "@/components/product2"
    import axios from "axios"
    import {
        swiper,
        swiperSlide
    } from "vue-awesome-swiper";
    export default {
        name: "App",
        data() {
            return {
                nav: [],
                leftList: [],
                rightList: [],
                product_list: [],
                activeIndex: 0,
                category_id: 0,
                flag_mark: false,
                list: [],
                newlist: []
            }
        },
        components: {
            Footer,
            Tabbar,
            Classifypage,
            Tabbars,
            Product,
            Scroll,
            Producttwo
        },
        created() {
            this.category()
            this.getProductList()
        },
        mounted() {
            axios.get("/apiindex").then((res) => {
                this.list = res.data.data.pageModules[14].dataList;
            })
        },
        methods: {
            navChange(index, item) {
                this.leftList = item.children
                this.rightList = item.children[0].children
                this.$refs.leftmenu.activeIndex = 0
                this.$refs.rightmenu.activeIndex = 0
                this.getProductList();
            },
            leftChange(index, item) {
                this.rightList = item.children
                this.$refs.rightmenu.activeIndex = 0
                this.category_id = item.categoryId
                    // console.log(this.category_id, item.categoryId, "left")
            },
            rightChange(index, item) {
                this.category_id = item.categoryId;
            },
            category() {
                this.$api.category.category_list().then(({
                    data
                }) => {
                    this.nav = data;
                    this.leftList = data[0].children;
                    this.rightList = data[0].children[0].children;
                    this.category_id = this.leftList[0].categoryId;
                    this.getProductList()
                })
            },
            getProductList() {
                this.$api.product.product_list({
                    page: 1,
                    page_size: 10,
                    category_id: this.category_id
                }).then((res) => {
                    console.log(res.data, 123888888)
                    this.newlist = res.data
                })
            },
            choose() {
                this.flag_mark = true;
            },
            mark_box() {
                this.flag_mark = false
            },
            pricehigh() {
                this.list = this.list.sort((a, b) => {
                    return b.data.price - a.data.price
                })
            },
            pricelow() {
                this.list = this.list.sort((a, b) => {
                    return a.data.price - b.data.price
                })
            },
            addnum(index, spId) {
                this.$store.state.num++;
                this.$store.state.arr.push(this.list[index]);
                // console.log(index, spId, this.$store.state.arr);
                // let newarr = []
                // this.$store.state.arr.forEach((item, i) => {
                //     item.data.count++
                //         console.log(item.data.count, "123")
                //     if (item.data.count > 1) {
                //         item.data.count++
                //     } else {
                //         newarr.push(item)
                //     }
                // if (newarr.indexOf(item)) {
                // console.log(item)
                // item.data.count++
                //     newarr.push(item);
                // }
                // })
                // console.log(newarr, "newarr")
                // let aa = [12, 3, 3, 3, 3, 56, 9];
                // let bb = Array.from(new Set(aa))
                // console.log(bb, "bb")
                // window.localStorage.setItem("arr", JSON.stringify(this.$store.state.arr))
                // console.log(this.$store.state.arr)
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../../node_modules/swiper/dist/css/swiper.css";
    .scroll {
        width: 100%;
        height: 100%;
        display: flex;
        overflow: hidden;
        flex-direction: column;
    }
    
    .classify_con {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    
    .classify_head {
        display: flex;
        height: 50px;
        align-items: center;
        margin: 0 20px 0 0;
        box-sizing: border-box;
    }
    
    .classify_content {
        flex: 1;
        display: flex;
        .left_menu {
            width: 100px;
            height: 100%;
            background: #f7f7f7;
            overflow-y: scroll;
        }
        .right_menu {
            flex: 1;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
            span.iconfont {
                position: absolute;
                top: 5px;
                right: 5px;
                z-index: 99999
            }
            .rightcon {
                flex: 1!important;
                display: flex;
                flex-direction: column;
            }
        }
    }
    
    .mark {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 99999999999999999;
        background: rgba(0, 0, 0, .5);
        .mark_choose {
            width: 150px;
            height: 200px;
            background: #fff;
            border-radius: 10px;
            position: absolute;
            top: 50px;
            right: 50px;
            p {
                font-size: 16px;
                height: 50px;
                line-height: 50px;
                text-align: center;
            }
        }
    }
</style>m,