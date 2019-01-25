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
            // this.setDefaultIndex()
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
            //     const left = navItem.offsetLeft;
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
        width: 100px;
        height: 100%;
        background: #f7f7f7;
        .nav {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            height: 50px;
            line-height: 50px;
            text-align: center;
            background: #f7f7f7;
            a {
                font-size: 14px;
                color: rgba(0, 0, 0, 0.5);
            }
        }
    }
    
    .active {
        background: #fff;
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