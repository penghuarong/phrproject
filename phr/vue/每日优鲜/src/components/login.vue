<template>
    <div class="login">
        <div class="login_header">
            login
        </div>
        <div class="login_section">
                <form>
                    <div>
                        <label for="username">用户名</label>
                        <input type="text" id="username" v-model="username">
                    </div>
                    <div>
                        <label for="password">密码</label>
                        <input type="password" id="password" v-model.number="password">
                    </div>
                    <div class="btn">
                        <button type="submit" @click.prevent="submitfrom" style="background: greenyellow">登录</button>
                        <button type="reset" style="background: gray">重置</button>
                    </div>
                </form>
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    import qs from "qs";
    export default {
        name: "app",
        data() {
            return {
                username: "huahua",
                password: 123
            }
        },
        mounted() {

        },
        methods: {
            submitfrom() {
                const url = "http://localhost:8081/userinfo";
                axios.post(url, qs.stringify({
                    username: this.username,
                    password: this.password
                }), {
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded;charset=UTF-8",
                        'Access-Control-Allow-Origin': ""
                    }
                }).then((res) => {
                    if (res.data.code == 0) {
                        this.$cookies.set("certificate", res.data.result);
                        this.$router.push("/logindetail")
                    }
                }).catch((err) => {
                    console.log(err);
                })
            }
        }
    }
</script>
<style>
    @import "../css/login.css";
</style>