<template>
    <transition name="text-fade">
        <div class="set" v-show="isshow">
            <div class="fontSize">
                <p class="fs">字体大小</p>
                <div class="smbig">
                    <Range :min="10" :max="30" leftText="小" rightText="大" @changefz="changefz"/>
                </div>
            </div>
            <div class="bgColor">
                <p>背景颜色</p>
                <ul class="color">
                    <li style="background-color: rgb(255,255,255);" @click="colors('#fff')" ></li>
                    <li style="background-color: rgb(199, 237, 204);" @click="colors('#c9ecce')"></li>
                    <li style="background-color: rgb(247, 239, 210);" @click="colors('#f8eed3')"></li>
                    <li style="background-color: rgb(234, 232, 221);" @click="colors('#eae8dc')"></li>
                    <li style="background-color: #b2dfe5;" @click="colors('#b2dfe5')"></li>
                </ul>
            </div>
        </div>
    </transition>
</template>
<script>
    import Range from "./range.vue";
    export default {
        data() {
            return {
                isshow: false,
                size: 14
            }
        },
        watch: {
            size(newVal) {
                this.$emit('sizeChange', newVal)
            }
        },
        components: {
            Range
        },
        methods: {
            changefz(a) {
                Bus.$emit('fsize', a)
            },
            // changeSmall() {
            //     if (this.fz > 10) {
            //         this.fz -= 2
            //         Bus.$emit('sfz', this.fz)
            //     }
            // },
            // changeBig() {
            //     if (this.fz < 30) {
            //         this.fz += 2
            //         Bus.$emit('bfz', this.fz)
            //     }
            // },
            colors(col) {
                Bus.$emit("col", col)
            }
        },
        mounted() {
            Bus.$on("aa", (flag) => {
                this.isshow = flag
            })

        }
    }
</script>
<style>
    @import "../fonts/iconfont.css";
    .text-fade-enter-active,
    .text-fade-leave-active {
        transition: all .6s ease;
    }
    
    .text-fade-leave-active {
        opacity: 0;
        background: rgba(7, 17, 27, 0);
    }
    
    .text-fade-enter,
    .text-fade-leave-to {
        opacity: 0;
        background: rgba(7, 17, 27, 0);
    }
    
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
    
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    
    .slide-fade-enter,
    .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */
    
    {
        transform: translateX(10px);
        opacity: 0;
    }
    
    .set {
        width: 92%;
        height: 150px;
        position: absolute;
        top: 45px;
        background: #fff;
        margin-left: 4%;
        border-radius: 15px;
    }
    
    .smbig {
        flex: 1;
        margin-left: 10px;
    }
    
    .fs {
        width: 80px;
        text-align: center;
    }
    
    .fontSize,
    .bgColor {
        height: 75px;
        display: flex;
        align-items: center;
        padding: 0 20px;
    }
    
    .color {
        margin-left: 10px;
        flex: 1;
        display: flex;
        justify-content: space-between;
    }
    
    .color li {
        width: 30px;
        height: 30px;
        border: 1px solid #ccc;
    }
</style>