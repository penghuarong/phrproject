<template>
    <div class="tab-bar">
        <div class="nav">
            <a href="javascript:;" 
            :class="{active:activeIndex == index}" 
            v-for="(item,index) in navList" 
            @click="handleChangeTab(index,item)" 
            ref="navItem"
            :key="index">
                {{item[label]}}
            </a>
            <div class="active_line" :style="barStyle"></div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            navList: Array,
            label: {
                type: String,
                default: "text"
            },
            defaultIndex: 0
        },
        components: {
            // Scroll
        },
        data() {
            return {
                activeIndex: 0,
                barStyle: {
                    width: 0,
                    left: 0
                }
            }
        },
        watch: {
            defaultIndex(index) {
                this.setDefaultIndex(index)
            },
            activeIndex(index) {
                // this.setBarStyle(index)
            }
        },
        created() {
            this.setDefaultIndex()
        },
        mounted() {
            // this.setBarStyle(this.defaultIndex)
        },
        methods: {
            setDefaultIndex(index) {
                this.activeIndex = index ? index : 0
            },
            handleChangeTab(index, item) {
                this.activeIndex = index;
                this.$emit("changes", index, item)
            },
            // setBarStyle(index) {
            //     const navItem = this.$refs['navItem'][index];
            //     const width = navItem.clientWidth;
            //     console.log(width, "width")
            //     const left = navItem.offsetLeft;
            //     console.log(left, "left")
            //     this.barStyle = {
            //         width: width + "px",
            //         left: left + 'px'
            //     }
            // }
        }
    }
</script>
<style lang="scss" scoped>
    .tab-bar {
        width: 100%;
        height: 40px;
        padding: 0 10px;
        z-index: 11;
        background: #fff;
    }
    
    .tab-bar .nav {
        height: 40px;
        display: flex;
        align-items: center;
        position: relative;
        a {
            display: inline-block;
            font-size: 16px;
            margin: 0 10px;
            color: #000;
            height: 40px;
            line-height: 40px;
            flex-shrink: 0;
        }
    }
    
    .active {
        color: #000!important;
        font-size: 18px!important;
        font-weight: bold;
    }
    
    .active_line {
        width: 10px;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        background: #ff8143;
        transition: all .5s ease;
    }
</style>