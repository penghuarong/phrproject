<template>
        <div class="wrapper">
            <div class="head">
                购物车
            </div>
            <ul class="car">
                <input type="checkbox" class="checkAll" v-model="checkAllState" @change="checkAll">
                <li v-for="(v,i) in this.carlistnew">
                    <input type="checkbox" v-model="v.isCheck" @change="checkitem">
                    <img :src="v.img" alt="">
                    <div class="car_right">
                        <h3>{{v.tit}}</h3>
                        <h4>
                            <span>￥{{v.price}}</span>
                            <div class="counter">
                                <span @click="reduce(i)">-</span>
                                <input type="text" :value="v.count">
                                <span @click="add(i)">+</span>
                            </div>
                        </h4>
                    </div>
                </li>
            </ul>
            <div class="car_foot">
                <span>共<b>{{sum}}</b>件</span>
                <span>总价：<b>{{total}}</b>元</span>
            </div>
            <ol class="footer">
                    <router-link to="/">
                        <li>
                            <img src="https://j-image.missfresh.cn/img_20180519045804300.png" alt="">
                            <span>首页</span>
                          </li>
                    </router-link>
                    <router-link to="/">
                        <li>
                            <img src="https://j-image.missfresh.cn/img_20180803183109191.png" alt="">
                            <span>会员</span>
                        </li>
                    </router-link>
                    <router-link to="/car">
                        <li>
                            <img src="https://j-image.missfresh.cn/img_20180519050032927.png" alt="">
                            <span>购物车</span>
                        </li>
                    </router-link>
                    <router-link to="/">
                        <li>
                            <img src="https://j-image.missfresh.cn/img_20180829111205019.png" alt="">
                            <span>发现</span>
                        </li>
                    </router-link>
                    <router-link to="/">
                        <li>
                            <img src="https://j-image.missfresh.cn/img_20180519050154989.png" alt="">
                            <span>我的</span>
                        </li>
                    </router-link>
                  </ol>
        </div>
      </template>
<script>
    import axios from "axios";
    export default {
        name: 'app',
        data() {
            return {
                carlist: [],
                checkAllState: false,
                carlistnew: [],
                sum: 0,
                total: 0
            }
        },
        mounted() {
            this.carlist = JSON.parse(window.localStorage.getItem("list"));
            this.carlistsure();
        },
        methods: {
            carlistsure() {
                this.carlist.forEach((item) => {
                    if (item.count > 0) {
                        this.carlistnew.push(item);
                    }
                })
            },
            add(index) {
                this.carlistnew[index].count++;
            },
            reduce(index) {
                if (this.carlistnew[index].count <= 1) return;
                this.carlistnew[index].count--;
            },
            checkAll() {
                this.carlistnew.forEach((file) => {
                    file.isCheck = this.checkAllState
                })
                this.calculate()
            },
            checkitem() {
                let arr = [];
                this.carlistnew.forEach((file) => {
                    if (file.isCheck) {
                        arr.push(file)
                    }
                })
                if (arr.length == this.carlistnew.length) {
                    this.checkAllState = true
                } else {
                    this.checkAllState = false
                }
                this.calculate()
            },
            calculate() {
                let summ = 0;
                let tot = 0;
                this.carlistnew.forEach((file) => {
                    if (file.isCheck) {
                        summ += file.count;
                        tot += file.count * file.price;
                    }
                })
                this.sum = summ;
                this.total = tot.toFixed(2);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    @import "../css/index.css";
</style>