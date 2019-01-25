<template>
    <div class="wrap">
        <header>购物车</header>
        <section>
            <input type="checkbox" class="checkall" v-model="checkAllFile" @change="checkAll">全选
            <list :shopcarlist="shopcarlist" @update="onUpdate"></list>
        </section>
        <footer>
                <span>共<b>{{total}}</b>件</span>
                <span>总价：<b>{{sumhe}}</b>元</span>
        </footer>
    </div>
</template>
<script>
    import axios from "axios";
    import list from "./list.vue";
    export default {
        name: "app",
        data() {
            return {
                checkAllFile: false,
                shopcarlist: [],
                total: 0,
                sumhe: 0
            }
        },
        mounted() {
            this.getJson()
        },
        methods: {
            onUpdate() {
                const arr = [];
                this.shopcarlist.forEach((item) => {
                    if (item.isCheck) {
                        arr.push(item);
                    }
                })
                if (arr.length == this.shopcarlist.length) {
                    this.checkAllFile = true
                } else {
                    this.checkAllFile = false
                }
                this.calculate();
            },
            checkAll() {
                this.shopcarlist.forEach((file) => {
                    file.isCheck = this.checkAllFile;
                })
                this.calculate();
            },
            calculate() {
                let tot = 0;
                let sum = 0;
                this.shopcarlist.forEach((item) => {
                    if (item.isCheck) {
                        tot += item.count;
                        sum += item.count * item.price
                    }
                })
                this.total = tot;
                this.sumhe = sum;
            },
            getJson() {
                let url = "http://localhost:8888/shopcar";
                axios.get(url).then((res) => {
                    this.shopcarlist = res.data.data;
                })
            }
        },
        components: {
            list
        }
    }
</script>
<style>
    @import "../../css/shopcar.css";
    header {
        background: #FF4E22;
    }
</style>