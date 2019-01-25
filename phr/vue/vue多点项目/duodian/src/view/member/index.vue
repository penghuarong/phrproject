<template>
        <div class="scroll">
            <div class="head_login">
                <span class="iconfont icon-xiangzuo"></span>
                <h2>验证手机</h2>
                <span></span>
            </div>
            <div class="my_con">
                <img src="//img.dmallcdn.com/common/1b1dac60-5a99-450c-b18c-c5f576fedcb9_750H" alt="">
                <div class="ipt_yz">
                    <div>
                        <input type="text" placeholder="请输入手机号" v-model="phone"> 
                        <Cbutton v-if="isGetcode" :transparent="true" >{{time}}</Cbutton>
                        <Cbutton v-else :transparent="true" :disabled="isphone" :wid="80" :hei="25" @click="getCode">获取验证码</Cbutton>
                    </div>
                    <div>
                        <input type="text" placeholder="请输入验证码" v-model="code">
                    </div>
                </div>
                <Cbutton @click="login_in" :transparent="false" :disabled="isLogin" :wid="320" :hei="35">登录</Cbutton>
            </div>
            <Footer/>
        </div>
</template>
<script>
    import Footer from "../../components/footer.vue";
    import Cbutton from "../../components/cbutton.vue";
    export default {
        data() {
            return {
                phone: "",
                code: "",
                isGetcode: false,
                time: 60,
                timer: null
            }
        },
        computed: {
            isphone() {
                const reg = /1[3456](\d{9})$/
                return !reg.test(this.phone)
            },
            isLogin() {
                if (!this.isphone && this.code != '') {
                    return false
                } else {
                    return true
                }
            }
        },
        components: {
            Footer,
            Cbutton
        },
        methods: {
            rendCode() {
                let code = ''
                while (code.length < 6) {
                    code += parseInt(Math.random() * 10)
                }
                return code;
            },
            getCode() {
                this.$api.user.msgCode(this.phone).then(() => {
                    this.isGetcode = true;
                    this.timedown()
                })
            },
            timedown() {
                this.timer = setInterval(() => {
                    this.time--;
                    if (this.time <= 0) {
                        clearInterval(this.timer)
                    }
                }, 1000)
            },
            login_in() {
                this.$api.user.login_in(
                    this.phone,
                    this.code
                ).then((res) => {
                    console.log(res, "lgin")
                    const path = this.$route.query.callback || '/home'
                    console.log(this.$route.query.callback, path, "path123")
                })
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
        background: #f7f7f7;
    }
    
    .head_login {
        /* overflow-y: scroll; */
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        flex-shrink: 0;
        span.iconfont {
            font-size: 14px;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: #000;
            color: #fff;
            text-align: center;
            line-height: 30px;
        }
        h2 {
            font-size: 16px;
            font-weight: normal;
        }
    }
    
    .my_con {
        flex: 1;
        img {
            width: 100%;
        }
    }
    
    .ipt_yz {
        width: 100%;
        display: flex;
        flex-direction: column;
        background: #fff;
        margin-top: 10px;
        &>div {
            display: flex;
            align-items: center;
            height: 50px;
            padding: 10px;
            box-sizing: border-box;
            justify-content: space-between;
            input {
                border: 0;
                outline: none;
            }
        }
    }
</style>