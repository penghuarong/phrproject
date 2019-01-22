<template>
  <div class="wrapper">
    <header>每日优选</header>
    <section>
        <img src="https://j-image.missfresh.cn/img_20180915032501993.gif?iopcmd=thumbnail&type=4&width=640" alt="" width="100%">
        <ul >
            <li v-for="(con,index) in fruitdata">
              <img :src="con.img" alt="" @click="clickimg(index)">
              <div class="right">
                <h3>{{con.tit}}</h3>
                <h4>
                  <span>￥{{con.price}}</span>
                  <div class="counter">
                    <span @click="reduce(index)">-</span>
                    <input type="text" :value="con.count">
                    <span @click="add(index)">+</span>
                </div>
              </h4>
              </div>
            </li>
          </ul>
    </section>
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
      <marksmall :carlistnew="carlistnew" :init="init"></marksmall>
  </div>
</template>

<script>
    import axios from "axios";
    import marksmall from "./small.vue";
    export default {
        name: 'app',
        data() {
            return {
                fruitdata: [],
                init: false,
                carlistnew: []
            }
        },
        mounted() {
            this.getJson();
        },
        methods: {
            getJson() {
                const url = "http://localhost:8081/api";
                axios.get(url).then((res) => {
                    this.fruitdata = res.data.data;
                    console.log(this.fruitdata);
                })
            },
            add(index) {
                this.fruitdata[index].count++;
                window.localStorage.setItem("list", JSON.stringify(this.fruitdata));
            },
            reduce(index) {
                if (this.fruitdata[index].count < 1) return;
                this.fruitdata[index].count--;
            },
            clickimg(index) {
                this.init = true;
                this.fruitdata.forEach((file) => {
                    if (file.id - 1 == index) {
                        this.carlistnew.push(file);
                    }
                });
            }
        },
        components: {
            marksmall
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    @import "../css/index.css";
</style>