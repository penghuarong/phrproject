<template>
    <div class="newadd_wrap">
        <Comhead :title="title"></Comhead>
        <ul class="msg_list">
            <li>
                <label>联系人</label>
                <div>
                    <input type="text" placeholder="请输入联系人" v-model="name">
                </div>
            </li>
            <li>
                <label>手机号</label>
                <div>
                    <input type="text" placeholder="请输入手机号" v-model="tel">
                </div>
            </li>
            <li id="write_address">
                <label>地址</label>
                <div>
                    <span>北京市</span>
                    <input type="text" placeholder="请输入地址" v-model="add">
                </div>
            </li>
            <li>
                <label>详细地址</label>
                <div>
                    <input type="text" placeholder="请输入详细地址" v-model="address">
                </div>
            </li>
        </ul>
        <p v-show="flag" class="yztel">{{con}}</p>
        <Cbutton :wid="300" :hei="35" :transparent="false" @click="finish">完成</Cbutton>
    </div>
</template>
<script>
    import Comhead from "./comhead.vue";
    import Cbutton from "./cbutton.vue";
    export default {
        data() {
            return {
                title: "新增地址",
                con: '',
                name: "",
                tel: "",
                add: "",
                address: "",
                usermsg: [],
                flag: false,
                regtel: /^1[3568][0-9]{9}$/
            }
        },
        components: {
            Comhead,
            Cbutton
        },
        methods: {
            finish() {
                if (this.name != '' && this.tel != '' && this.add != '' && this.address != '') {
                    if (this.regtel.test(this.tel)) {
                        this.usermsg.push({
                                name: this.name,
                                tel: this.tel,
                                add: this.add,
                                address: this.address
                            })
                            // console.log(this.usermsg, 7878)
                        window.localStorage.setItem("usermsg", JSON.stringify(this.usermsg))
                        this.flag = false;
                        this.$router.back()
                    } else {
                        this.flag = true;
                        this.con = "手机格式不正确请重新输入！"
                    }
                } else {
                    this.flag = true;
                    this.con = "输入的格式不能为空！"
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .newadd_wrap {
        width: 100%;
        height: 100%;
        background: #f7f7f7;
    }
    
    .msg_list {
        width: 100%;
        #write_address {
            display: flex;
            height: 50px;
            font-size: 14px;
            span {
                margin-right: 10px;
            }
        }
        li {
            display: flex;
            border-bottom: 1px solid rgba(0, 0, 0, .1);
            display: flex;
            align-items: center;
            justify-content: flex-start;
            height: 50px;
            label {
                width: 100px;
                text-align: center;
                color: rgba(0, 0, 0, .7);
                font-size: 14px;
            }
            div {
                display: flex;
                input {
                    border: 0;
                    background: #f7f7f7;
                    outline: none;
                }
            }
        }
    }
    
    .yztel {
        width: 100%;
        height: 30px;
        background: rgba(255, 0, 0, .3);
        color: #f00;
        line-height: 30px;
        text-align: center;
        font-size: 12px;
        letter-spacing: 2px;
    }
</style>