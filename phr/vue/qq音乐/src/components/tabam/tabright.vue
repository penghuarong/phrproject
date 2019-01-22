<template>
    <div ref="tabright_scroll">
        <div>
            <div class="right" v-for="a in rightdata">
                <div class="right_box" v-for="(b,i) in a" v-show="i==flag">
                    <h2>{{b.tit}}</h2>
                    <ol class="right_pic" v-for="c in b">
                        <li v-for="d in c">
                            <img :src="d.img" alt="">
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import BScroll from "better-scroll";
    export default {
        name: "app",
        props: {
            rightdata: {},
            flag: {}
        },
        mounted() {
            this.$nextTick(() => {
                new BScroll(this.$refs.tabright_scroll)
            })
        }
    }
</script>
<style></style>
<!-- <template>
    <div ref="scroll_aa">
        <div>
            <div class="right" v-for="(c,d) in nav" >
                <div class="right_box" v-for="(a,b) in c" v-show="b==flag" :key="b">
                    <h2>{{a.tit}}</h2>
                    <ol class="right_pic" v-for="(pic,d) in a" :key="d">
                    <li v-for="aa in pic">
                        <img :src="aa.img">
                    </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import BScroll from "better-scroll"
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
                new BScroll(this.$refs.scroll_aa, {})
            })
        },
    }
</script>
<style>

</style> -->