<template>
    <div class="aaa" ref="tableft_scroll">
        <div>
            <ul class="left" v-for="a in leftdata">
                <li v-for="(c,d) in a" @click="tabchange(d)" :class="{'active':flag==d}">{{c.tit}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
    import BScroll from "better-scroll";
    export default {
        name: "app",
        props: {
            leftdata: {},
            flag: {}
        },
        mounted() {
            this.$nextTick(() => {
                new BScroll(this.$refs.tableft_scroll, {
                    click: true
                })
            })
        },
        methods: {
            tabchange(index) {
                this.$emit("updata", index);
            }
        }
    }
</script>
<style>

</style>
<!-- <template>
<div class="aaa" ref="left_scroll">
      <div>
            <ul class="left" v-for="(list,index) in nav" :key="index">
                <li v-for="(a,b) in list" @click="changeTab(b)" :class="{'active':b==flag}">{{a.tit}}</li>
            </ul>
      </div>
    </div>
</template>  -->
<!-- <script>
 import BScroll from "better-scroll";
    export default {
        name: "app",
        props: {
            nav: {
                required: true
            },
            flag: {
                type: Number,
                default: 0
            }
        },
        mounted() {
            this.$nextTick(() => {
                new BScroll(this.$refs.left_scroll, {
                    click: true
                })
            })
        },
        methods: {
            changeTab($index) {
                this.$emit("updata", $index)
            }
        }
    }
</script> -->