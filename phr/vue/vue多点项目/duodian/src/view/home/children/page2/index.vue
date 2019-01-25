<template>
    <div class="page_con">
        <Banner :list="bannerList"/>
        <Nav :navList="navList" />
        <img src="https://img.dmallcdn.com/mIndex/201809/13336179-8c72-43f9-9cd0-e6bca5b74fcc_750H" alt="" class="titlebarimg">
        <Product :colnum="3" :list="list"/>
        <!-- <Title tit="极致圣贤" bg="orangered"></Title>
        <Product :colnum="3"/> -->
    </div>
</template>
<script>
    import Banner from "../../components/swiper.vue";
    import Nav from "../../components/nav.vue";
    import Product from "@/components/productList.vue"
    import Title from "@/components/title.vue";
    import axios from "axios"
    export default {
        data() {
            return {
                bannerList: [],
                navList: [],
                list: []
            }
        },
        components: {
            Banner,
            Nav,
            Product,
            Title
        },
        created() {
            this.getBannerList()
            this.getNavList()
        },
        mounted() {
            axios.get("/apiindex").then((res) => {
                this.list = res.data.data.pageModules[14].dataList;
            })
        },
        methods: {
            getBannerList() {
                this.$api.home.banner(2).then((res) => {
                    this.bannerList = res.data
                })
            },
            getNavList() {
                this.$api.nav.nav(2).then((res) => {
                    this.navList = res.data
                })
            }
        }
    }
</script>
<style>

</style>