<template>
    <div id="selectmap">
        <div class="select_head">
            <span class="iconfont icon-xiangzuo" @click="back"></span>
            <h2>北京市</h2>
            <span></span>
        </div>
        <div class="select_input">
            <div class="select_form">
                <i class="iconfont icon-fangdajing"></i>
                <input type="text" v-model="val" placeholder="小区、街道、大厦">
            </div>
        </div>
        <ul class="selectbox">
            <li v-for="(v,i) in addressList" :key="i" @click="selectAddress(i)" ref="selectAddress">
                {{v.address}}
            </li>
        </ul>
        <div class="current_address" @click="currentAdd">
            <span class="iconfont icon-dingwei"></span>
            定位到当前城市
        </div>
        <div class="historyAddress" v-if="ifaddress">
            <h2>历史地址</h2>
            <div class="history_box">
                <input type="radio">
                <div class="add_con">
                    <p>{{name}}</p>
                    <p>{{tel}}</p>
                    <p><span>{{add}}</span><span>{{address}}</span></p>
                </div>
                <span class="iconfont icon-fuzhi" @click="modify"></span>
            </div>
        </div>
        <div class="newAddAddress" @click="newaddAddress">
            +新增地址
        </div>
        <Loading v-if="loadingFlag" />
        <CurrentAddress v-if="flag" @bbb="cancels" :oldadd="oldadd"/>
    </div>
</template>
<script>
    import AMap from "AMap";
    import CurrentAddress from "@/components/currentaddress";
    import Loading from "@/components/loading";
    export default {
        data() {
            return {
                val: '',
                placeSearch: '',
                addressList: [],
                flag: false,
                loadingFlag: false,
                oldadd: [],
                ifaddress: false,
                name: '',
                tel: '',
                add: '',
                address: ''
            }
        },
        watch: {
            val(newVal) {
                this.search(newVal)
            }
        },
        mounted() {
            AMap.plugin('AMap.PlaceSearch', () => {
                this.placeSearch = new AMap.PlaceSearch({
                    // city 指定搜索所在城市，支持传入格式有：城市名、citycode和adcode
                    city: '010'
                })
            })
            if (window.localStorage.getItem("usermsg")) {
                this.ifaddress = true
            }
            JSON.parse(window.localStorage.getItem("usermsg")).forEach((item) => {
                this.name = item.name;
                this.tel = item.tel;
                this.add = item.add;
                this.address = item.address
            })
        },
        components: {
            CurrentAddress,
            Loading
        },
        methods: {
            search(val) {
                this.placeSearch.search(val, (status, result) => {
                    // 查询成功时，result即对应匹配的POI信息
                    this.addressList = result.poiList.pois
                    window.localStorage.setItem("result", JSON.stringify(this.addressList))
                })
            },
            back() {
                this.$router.back()
            },
            selectAddress(index) {
                this.$router.push({
                    name: "Home",
                    query: {
                        address: this.$refs.selectAddress[index].innerHTML
                    }
                })
            },
            cancels(res) {
                this.flag = res
            },
            currentAdd() {
                this.loadingFlag = true
                setTimeout(() => {
                    this.loadingFlag = false
                    setTimeout(() => {
                        this.flag = !this.flag
                    }, 300)
                }, 1000)
            },
            newaddAddress() {
                this.$router.push("/newaddaddress")
            },
            modify() {
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
    #selectmap {
        width: 100%;
        height: 100%;
        background: #f7f7f7;
    }
    
    .select_head {
        display: flex;
        height: 50px;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        box-sizing: border-box;
        background: #fff;
        span.iconfont {
            width: 30px;
            height: 30px;
            background: rgba(0, 0, 0, .6);
            color: #fff;
            border-radius: 50%;
            text-align: center;
            line-height: 30px;
        }
        h2 {
            font-size: 14px;
        }
    }
    
    .select_input {
        width: 100%;
        background: #fff;
        padding: 10px 0;
    }
    
    .select_form {
        width: 95%;
        margin: 0 auto;
        height: 35px;
        border: 1px solid #ccc;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        background: #fff;
        i.iconfont {
            margin: 0 10px;
            color: #ccc;
        }
        input {
            flex: 1;
            width: 100%;
            height: 100%;
            border: 0;
            outline: none;
        }
    }
    
    .selectbox {
        width: 100%;
        li {
            height: 50px;
            line-height: 50px;
            padding: 0 10px;
            box-sizing: border-box;
            font-size: 14px;
        }
    }
    
    .current_address {
        margin-top: 10px;
        font-size: 14px;
        height: 50px;
        line-height: 50px;
        padding: 0 10px;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        background: #fff;
        color: rgba(0, 0, 0, .4);
    }
    
    .newAddAddress {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 50px;
        color: #ff712b;
        font-size: 16px;
        line-height: 50px;
        background: #fff;
        text-align: center;
    }
    
    .historyAddress {
        width: 100%;
        h2 {
            font-size: 14px;
            color: rgba(0, 0, 0, .5);
            height: 50px;
            line-height: 50px;
            padding: 0 20px;
        }
        .history_box {
            padding: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            background: #fff;
            input {
                width: 50px;
            }
            .add_con {
                flex: 1;
                color: rgba(0, 0, 0, .7);
            }
            span.iconfont {
                width: 50px;
                font-size: 25px;
                color: #ccc;
            }
        }
    }
</style>