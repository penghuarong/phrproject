<template>
    <div class="aa">
        <div class="head">
            组件Tab切换
        </div>
        <div class="content">
            <tableft :leftdata="tabdata" :flag="flag" @updata="onupdata"></tableft>
            <tabright :rightdata="tabdata" :flag="flag"></tabright>
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    import tableft from "./tableft.vue";
    import tabright from "./tabright.vue";
    export default {
        name: "app",
        data() {
            return {
                tabdata: [],
                flag: 0
            }
        },
        mounted() {
            this.getJson();
        },
        methods: {
            getJson() {
                const url = "http://localhost:8888/tabam"
                axios.get(url).then((res) => {
                    this.tabdata = res.data;
                })
            },
            onupdata(index) {
                this.flag = index
            }
        },
        components: {
            tableft,
            tabright
        }
    }
    // import axios from "axios";
    // import tableft from "./tableft.vue";
    // import tabright from "./tabright.vue";
    // export default {
    //     name: "app",
    //     data() {
    //         return {
    //             flag: 0,
    //             tabdata: [],
    //         }
    //     },
    //     mounted() {
    //         this.getJson();
    //     },
    //     methods: {
    //         getJson() {
    //             const url = "http://localhost:8888/tabam"
    //             axios.get(url).then((res) => {
    //                 this.tabdata = res.data;
    //             })
    //         },
    //         onUpdata($index) {
    //             this.flag = $index
    //         }
    //     },
    //     components: {
    //         tableft,
    //         tabright
    //     }
    // }
</script>
<style>
    @import "../../css/tab.css";
    .active {
        background: #f5f5f5;
        border-left: 2px solid orange;
    }
</style>