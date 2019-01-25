<template>
        <div class="scroll">
            <Scroll class="car_con">
                <div class="car_car_scroll">
                        <div class="car_address">
                                <div class="car_add_left">
                                    <div class="dot_line"></div>
                                    <p>
                                        <span>{{usermessage.name}}</span>
                                        <span>{{usermessage.tel}}</span>
                                    </p>
                                    <p>{{usermessage.add}}{{usermessage.address}}</p>
                                </div>
                                <span class="iconfont icon-angle-right" style="color:rgba(0, 0, 0, 0.5)"></span>
                            </div>
                            <div class="shopping_car">
                                <div class="shopcar_head">
                                    <div class="input">
                                        <input type="checkbox" v-model="checkAll" @change="checkAllChoose">
                                        <label>√</label>
                                    </div>
                                    <div class="shopcar_center">
                                        <span class="iconfont icon-01" style="color:#ff7b38"></span>
                                        <span>多点超市（安河桥北）</span>
                                    </div>
                                    <span class="iconfont icon-angle-right" style="color:rgba(0, 0, 0, 0.5)"></span>
                                </div>
                                <ul class="shopcar_content">
                                    <li v-for="(v,i) in arr" :key="i">
                                        <div class="input">
                                            <input type="checkbox" v-model="v.data.showPlayIcon" @change="check(i)">
                                            <label>√</label>
                                        </div>
                                        <div class="shopcar_con_center">
                                            <p class="product_name">{{v.data.name}}</p>
                                            <p style="margin-top:5px"><sub>￥</sub><span class="price">{{v.data.price}}</span></p>
                                        </div>
                                        <div class="shopcar_con_right">
                                            <span class="reduce" @click="reduce(i)">-</span>
                                            <b>{{v.data.count}}</b>
                                            <span class="add" @click="add(i)">+</span>
                                        </div>
                                    </li>
                                </ul>
                                <div class="shopcar_total">
                                    <div class="shopcar_total_l">
                                        <p>合计：￥{{total}}（不含运费）</p>
                                        <p>促销以抵扣金额：￥0.00</p>
                                    </div>
                                    <div class="shopcar_total_r">
                                        <button @click="orderSure">选好了</button>
                                    </div>
                                </div>
                            </div>
                </div>
            </Scroll>
            <Mark v-if="flag" @click="sure" @cancel="cancel"/>
            <Footer/>
        </div>
</template>
<script>
    import Footer from "../../components/footer.vue";
    import Scroll from "@/components/scroll";
    import Mark from "@/components/mark";
    import {
        mapState
    } from "vuex"
    export default {
        name: "App",
        components: {
            Footer,
            Scroll,
            Mark
        },
        computed: {
            ...mapState(["arr"])
        },
        data() {
            return {
                usermessage: null,
                total: 0,
                checkAll: false,
                flag: false
            }
        },
        created() {
            this.usermessage = JSON.parse(window.localStorage.getItem("usermsg"))[0]
        },
        mounted() {
            // this.arr = JSON.parse(window.localStorage.getItem("arr"))
        },
        methods: {
            reduce(index) {
                this.$store.state.arr[index].data.count--
                    if (this.$store.state.arr[index].data.count < 1) {
                        this.$store.state.arr[index].data.count = 1
                        this.flag = true;
                    }
                this.tot()
            },
            add(index) {
                this.$store.state.arr[index].data.count++;
                this.tot()
            },
            tot() {
                let sum = 0;
                let num = 0;
                this.$store.state.arr.forEach((item, index) => {
                    if (item.data.showPlayIcon) {
                        num += item.data.count
                        sum += item.data.count * item.data.price
                    }
                })
                this.total = sum
                this.$store.state.num = num
            },
            check(index) {
                let newArr = []
                this.$store.state.arr.forEach((item) => {
                    if (item.data.showPlayIcon) {
                        newArr.push(item)
                    }
                })
                if (newArr.length == this.$store.state.arr.length) {
                    this.checkAll = true
                } else {
                    this.checkAll = false
                }
                this.tot()
            },
            checkAllChoose() {
                this.$store.state.arr.forEach((item) => {
                    item.data.showPlayIcon = this.checkAll
                })
                this.tot()
            },
            orderSure() {
                this.$router.push("/orderSure")
            },
            cancel() {
                this.flag = false;
            },
            sure() {
                this.flag = false;
                this.$store.state.arr.forEach((item) => {
                        console.log(item.data.count)
                            // if(item.data.count=0){

                        // }
                    })
                    // console.log(this.$store.state.arr[index])
            }
        }
    }
</script>
<style lang="scss" scoped>
    .scroll {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    
    .car_con {
        flex: 1;
    }
    
    .input {
        width: 50px;
        position: relative;
        input {
            position: absolute;
            width: 30px;
            height: 30px;
            z-index: 898989;
            opacity: 0;
            &:checked {
                +label {
                    background: #ff712b;
                    color: #fff;
                    border: 0;
                }
            }
        }
        label {
            width: 25px;
            height: 25px;
            border: 1px solid #ddd;
            border-radius: 50%;
            position: absolute;
            z-index: 99;
            text-align: center;
            line-height: 25px;
            color: transparent;
            left: 8px;
            top: -6px;
        }
    }
    
    .car_con {
        flex: 1;
        background: #f7f7f7;
        display: flex;
        flex-direction: column;
    }
    
    .car_address {
        width: 100%;
        height: 80px;
        display: flex;
        padding: 0 10px;
        font-size: 14px;
        align-items: center;
        justify-content: space-between;
        background: #fff;
        flex-shrink: 0;
        position: relative;
        .car_add_left {
            >p:nth-child(2) {
                font-size: 16px;
                span {
                    color: #000;
                }
            }
            >p:nth-child(3) {
                margin-top: 10px;
                color: rgba(0, 0, 0, .6);
            }
        }
        .dot_line {
            position: absolute;
            top: 0;
            width: 100%;
            height: 2px;
            background: url("https://static.dmall.com/kayak-project/cart/dist/cart/common/image/shoppingline.png");
        }
    }
    
    .shopping_car {
        flex: 1;
    }
    
    .shopcar_head {
        display: flex;
        height: 50px;
        align-items: center;
        background: #fff;
        margin-top: 10px;
        font-size: 16px;
        padding: 0 10px;
    }
    
    .shopcar_head input {
        width: 50px;
        height: auto;
    }
    
    .shopcar_center {
        flex: 1;
    }
    
    .shopcar_head span {
        width: 50px;
        text-align: center;
    }
    
    .shopcar_content {
        flex: 1;
    }
    
    .shopcar_content li {
        display: flex;
        align-items: center;
        height: 80px;
        font-size: 14px;
        padding: 0 10px;
        background: #fff;
        border-bottom: 1px solid #f6f6f6;
    }
    
    .shopcar_content li input {
        width: 50px;
    }
    
    .shopcar_content li .shopcar_con_right {
        width: 80px;
    }
    
    .shopcar_content li .shopcar_con_center {
        flex: 1;
        margin-right: 5px;
    }
    
    .product_name {
        font-size: 16px;
        letter-spacing: 2px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        word-break: break-all;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .price {
        font-size: 16px;
        font-weight: bold;
    }
    
    .shopcar_con_right {
        width: 100px;
        display: flex;
        justify-content: space-between;
    }
    
    .shopcar_con_right span {
        width: 25px;
        height: 25px;
        border: 1px solid #ff7b38;
        text-align: center;
        line-height: 23px;
        color: #ff7b38;
    }
    
    .shopcar_total {
        height: 60px;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        background: #fff;
        border-top: 1px solid #f6f6f6;
    }
    
    .shopcar_total .shopcar_total_l p:nth-child(1) {
        line-height: 30px;
        font-size: 16px;
        color: #ff7b38;
    }
    
    .shopcar_total .shopcar_total_l p:nth-child(2) {
        line-height: 30px;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.4)
    }
    
    .shopcar_total .shopcar_total_r button {
        width: 80px;
        height: 40px;
        background: #ff7b38;
        color: #fff;
        border: 0;
        outline: none;
    }
</style>