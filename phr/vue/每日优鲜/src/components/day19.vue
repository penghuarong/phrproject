<template>
    <div class="ninewrap">
        <div class="nine_head">
            京东集团
        </div>
        <div class="nine_sec">
            <ul class="change">
                <li v-for="(list,index) in ninedata" @click="tabchange(index)" :class="{'act':index==flag}">{{list.tit}}</li>
            </ul>
            <div class="nine_con" v-for="(list,index) in ninedata" v-show="flag==index">
                <ol>
                    <li v-for="(item,i) in list.con" @click="itemchange(i)" :class="{'active':i==ind}">{{item.name}}</li>
                </ol>
                <div class="icon_head">
                    <div class="nav" >
                        <p v-for="(file,i) in list.recommend" @click="changeicon(i)" :class="{'act':i==count}">{{file.re_name}}</p>
                    </div>
                    <div class="icon_content" v-for="(file,ii) in list.recommend" v-show="isshow">
                        <h4 v-for="v in file.re_list">{{v}}</h4>
                    </div>
                </div>
                <ul class="icon_con" v-for="(file,i) in list.con" v-show="ind==i" :class="{'mark':mark}">
                    <li v-for="(title,i) in file.info">
                        <h2>{{title.work}}</h2>
                        <p>{{title.address}}</p>
                        <h3><img :src="title.img" alt=""><b>{{title.mz}}</b></h3>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        name: "app",
        data() {
            return {
                ninedata: [],
                flag: 0,
                ind: 0,
                mark: false,
                count: {},
                isshow: true,
            }
        },
        mounted() {
            this.getJson();
        },
        methods: {
            getJson() {
                const url = "http://localhost:8081/apiday19";
                axios.get(url).then((res) => {
                    this.ninedata = res.data.data
                })
            },
            tabchange(index) {
                this.flag = index
            },
            itemchange(i) {
                this.ind = i
            },
            changeicon(ind) {
                this.isshow = !this.isshow;
                if (this.isshow) {
                    this.count = ind
                    this.mark = true
                } else {
                    this.mark = false
                }

            }
        }
    }
</script>
<style>
    @import "../css/day19.css";
    .active {
        background: aqua;
        color: #fff;
    }
    
    .act {
        border-bottom: 2px solid aqua;
    }
    
    .mark {
        background: rgba(0, 0, 0, .5);
    }
</style>