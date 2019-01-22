<template>
    <div class="day_wrap">
        <div class="day_head">
            header
        </div>
        <div class="day_sec">
            <ul class="first">
                <li v-for="con in dayseven.gift">
                    <h3>{{con.name}}</h3>
                    <p>{{con.info}}</p>
                    <img :src="con.img" alt="">
                </li>
            </ul>
            <ul class="second">
                <li v-for="con in dayseven.food">
                    <img :src="con.img" alt="">
                    <div class="sec_right">
                            <h3>{{con.tit}}</h3>
                            <p>{{con.info}}</p>
                    </div>
                </li>
            </ul>
            <ul class="third">
                <li v-for="con in dayseven.utils">
                    <img :src="con.img" alt="">
                    <h3>{{con.tit}}</h3>
                </li>
            </ul>
        </div>
        <div class="day_foot">
            footer
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        name: "app",
        data() {
            return {
                dayseven: []
            }
        },
        mounted() {
            this.getJson();
        },
        methods: {
            getJson() {
                const url = "http://localhost:8081/apiday17";
                axios.get(url).then((res) => {
                    this.dayseven = res.data.data[0]

                })
            }
        }
    }
</script>
<style>
    @import "../css/day17.css";
</style>