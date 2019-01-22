<template>
    <div class="ordersure">
        <Comhead :title="title"></Comhead>
            <Scroll class="order_con">
            <div class="order_scroll">
                <div class="car_address">
                    <div class="car_add_left">
                        <div class="dot_line"></div>
                        <p>
                            <span>{{usermessage.name}}</span>
                            <span>{{usermessage.tel}}</span>
                        </p>
                        <p>{{usermessage.add}}{{usermessage.address}}</p>
                    </div>
                    <span class="iconfont icon-zixun" style="color:rgba(0, 0, 0, 0.5)" @click="fix"></span>
                </div>
                <hr style="height:10px;border:0">
                <Sendmsg text1="配送方式" text2="多点配送" icons="icon-angle-right"></Sendmsg>
                <Sendmsg text1="配送时间" text2="立即送达，大约21:00前送达" icons="icon-angle-right"></Sendmsg>
                <hr style="height:10px;border:0">
                <Sendmsg text1="在线支付" icons="icon-yibangding" color="#ff712b"></Sendmsg>
                <hr style="height:10px;border:0">
                <Sendmsg text1="优惠券/优惠码" text2="0张可用" icons="icon-angle-right" ></Sendmsg>
                <hr style="height:10px;border:0">
                <Sendmsg text1="可用余额/多点卡" text3="(总金额：￥0.24，抵扣：￥0.24)" icons="icon-yibangding" color="#ff712b"></Sendmsg>
                <hr style="height:10px;border:0">
                <Sendmsg text1="备注" text3="填写安全存放地址，请按门铃等配送相关"></Sendmsg>
                <div class="order_money">
                    <h2>订单价格</h2>
                    <div>
                        <p><span>商品金额</span><span>￥24.50</span></p>
                        <p><span>商品金额</span><span>￥24.50</span></p>
                        <p><span>商品金额</span><span>￥24.50</span></p>
                        <p><span>商品金额</span><span>￥24.50</span></p>
                        <p><span>商品金额</span><span>￥24.50</span></p>
                        <p><span>商品金额</span><span>￥24.50</span></p>
                        <p>购物满79元，减6元服务费</p>
                    </div>
                    <h2><span>实际支付</span><span class="price">￥30.26</span></h2>
                </div>
                <div class="relative_product">
                    <ul>
                        <li>
                            <img src="https://img.dmallcdn.com/20181122/3e69037d-7c7a-48fb-b094-a329a8cf6984_200x200" alt="">
                            <span>1</span>
                        </li>
                        <li>
                            <img src="https://img.dmallcdn.com/20181122/3e69037d-7c7a-48fb-b094-a329a8cf6984_200x200" alt="">
                            <span>1</span>
                        </li>
                        <li>
                            <img src="https://img.dmallcdn.com/20181122/3e69037d-7c7a-48fb-b094-a329a8cf6984_200x200" alt="">
                            <span>1</span>
                        </li>
                    </ul>
                    <span>共3件<i class="iconfont icon-angle-right"></i></span>
                </div>
                <hr style="height:10px;border:0">
                <Sendmsg text1="发票" text2="去发票中心开具发票"></Sendmsg>
                <hr style="height:10px;border:0">
                <div class="telprotect">
                    <h3>
                        <p>号码保护</p>
                        <span>123</span>
                    </h3>
                    <p>对商家、配送员隐藏小主的真实手机号，</p>
                    <p>小主要注意接听010-8621开头的号码哦！</p>
                </div>
    </div>
</Scroll>
       <div class="orderfooter">
            <p>合计：￥123</p>
            <cbutton :wid="100" :hei="50">提交订单</cbutton>
       </div>
    </div>
</template>
<script>
    import Sendmsg from "@/components/sendmsg"
    import Comhead from "@/components/comhead"
    import cbutton from "@/components/cbutton"
    import Scroll from "@/components/scroll"
    export default {
        data() {
            return {
                title: "订单确认",
                name: '',
                tel: '',
                add: '',
                address: ''
            }
        },
        created() {
            this.usermessage = JSON.parse(window.localStorage.getItem("usermsg"))[0]
        },
        mounted() {
            JSON.parse(window.localStorage.getItem("usermsg")).forEach((item) => {
                this.name = item.name;
                this.tel = item.tel;
                this.add = item.add;
                this.address = item.address
            })
        },
        components: {
            Comhead,
            Sendmsg,
            cbutton,
            Scroll
        },
        methods: {
            fix() {
                this.$router.push({
                    name: "ModifyAddress",
                    query: {
                        name: this.name,
                        tel: this.tel,
                        add: this.add,
                        address: this.address
                    }
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .ordersure {
        width: 100%;
        height: 100%;
        background: #f8f8f8;
        display: flex;
        flex-direction: column;
    }
    
    .order_con {
        flex: 1;
        overflow: hidden;
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
            .dot_line {
                position: absolute;
                top: 0;
                width: 100%;
                height: 2px;
                background: url("https://static.dmall.com/kayak-project/cart/dist/cart/common/image/shoppingline.png");
            }
            .car_add_left {
                p:nth-child(2) {
                    margin-bottom: 10px;
                    font-size: 16px;
                }
                p:nth-child(3) {
                    color: rgba(0, 0, 0, 0.5)
                }
            }
        }
    }
    
    .orderfooter {
        width: 100%;
        height: 50px;
        flex-shrink: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        padding: 0 10px;
        p {
            font-size: 14px;
            color: #ff712b;
        }
    }
    
    .order_money {
        margin-top: 10px;
        width: 100%;
        padding: 0 10px;
        background: #fff;
        h2 {
            font-size: 18px;
            height: 50px;
            font-weight: normal;
            line-height: 50px;
            border: 1px solid #f7f7f7;
            display: flex;
            justify-content: space-between;
            .price {
                color: #ff712b;
            }
        }
        >div {
            p {
                font-size: 14px;
                height: 30px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: rgba(0, 0, 0, .5)
            }
        }
    }
    
    .relative_product {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        background: #fff;
        padding: 10px 0;
        margin-top: 10px;
        ul {
            flex: 1;
            display: flex;
            li {
                position: relative;
                border: 1px solid #f7f7f7;
                border-radius: 10px;
                margin: 0 2px;
                text-align: center;
                img {
                    width: 80%;
                    margin: 0 auto;
                }
                span {
                    position: absolute;
                    right: 0;
                    top: 0;
                    width: 20px;
                    height: 20px;
                    border: 1px solid #ff712b;
                    border-radius: 50%;
                    font-size: 12px;
                    text-align: center;
                    line-height: 20px;
                    color: #ff712b;
                }
            }
        }
        >span {
            width: 90px;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            i.iconfont {
                color: #ddd;
            }
        }
    }
    
    .telprotect {
        width: 100%;
        padding: 10px;
        font-size: 14px;
        background: #fff;
        h3 {
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: normal;
        }
        >p {
            color: rgba(0, 0, 0, .6);
        }
    }
</style>