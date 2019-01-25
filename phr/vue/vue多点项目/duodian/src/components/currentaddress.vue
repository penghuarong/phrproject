<template>
    <transition name="fade">
        <div class="near">
            <div class="head_near">
                <span></span>
                <h2>您附近的地址</h2>
                <span @click="cancels">取消</span>
            </div>
            <div class="head_con">
                <ul>
                    <li v-for="(v,i) in newResult" :key="i" @click="selectAddress(i)" ref="selectAddress">
                        {{v.address}}
                    </li>
                </ul>
            </div>
        </div>
    </transition>
</template>
<script>
    import AMap from "AMap";

    export default {
        data() {
            return {
                newResult: ''
            }
        },
        components: {},
        mounted() {
            this.newResult = JSON.parse(window.localStorage.getItem("result"));
            console.log(this.newResult)
        },
        methods: {
            cancels() {
                this.$emit("bbb", false)
            },
            selectAddress(index) {
                this.$router.push({
                    name: "Home",
                    query: {
                        address: this.$refs.selectAddress[index].innerHTML
                    }
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
    }
    
    .fade-enter,
    .fade-leave-to
    /* .fade-leave-active below version 2.1.8 */
    
    {
        opacity: 0;
    }
    
    .near {
        width: 100%;
        height: auto;
        font-size: 14px;
        position: fixed;
        bottom: 0;
        background: #fff;
        .head_near {
            display: flex;
            justify-content: space-between;
            height: 50px;
            align-items: center;
            padding: 0 10px;
            h2 {
                font-weight: normal;
                font-size: 16px;
            }
            span {
                color: #ff712b;
                font-size: 14px;
            }
        }
    }
    
    .head_con {
        width: 100%;
        height: 300px;
        overflow: hidden;
        ul {
            padding: 0 10px;
            width: 100%;
            height: auto;
            overflow-y: auto;
            li {
                height: 50px;
                line-height: 50px;
            }
        }
    }
</style>