<template>
    <div class="scroll-wrap" ref="wrap">
      <div class="scroll-content">
        <slot></slot>
        <div class="loading-bar">
          <b v-show="isPullUpLoad">加载</b>
        </div>
      </div>
    </div>
    </template>
<script>
    import BScroll from 'better-scroll'

    export default {
        name: 'Scroll',
        props: {
            scrollX: Boolean,
            scrollY: {
                type: Boolean,
                default: true
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                scroll: '',
                isPullUpLoad: false
            }
        },
        mounted() {
            this.initScroll()
            if (this.pullUpLoad) {
                this.initpullingUp()
            }
        },
        methods: {
            initScroll() {
                this.scroll = new BScroll(this.$refs.wrap, {
                    scrollY: this.scrollY,
                    scrollX: this.scrollX,
                    click: true,
                    pullUpLoad: this.pullUpLoad
                })
            },
            refresh() {
                this.scroll.finishPullUp()
                this.isPullUpLoad = false
                this.scroll.refresh()
            },
            initpullingUp() {
                this.scroll.on('pullingUp', () => {
                    this.isPullUpLoad = true
                    this.$emit('pullingUp')
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .loading-bar {
        height: 100px;
        width: 100%;
    }
</style>