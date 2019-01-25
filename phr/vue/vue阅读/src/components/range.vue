<template>
    <div class="process">
        <b>{{leftText}}</b>
        <div class="process_bar" ref="processBar">
            <div class="process_color" ref="processColor"></div>
            <span class="process_btn" ref="processBtn" :style="{left:left+'px'}"></span>
        </div>
        <b>{{rightText}}</b>
    </div>
</template>
<script>
    export default {
        props: {
            leftText: String,
            rightText: String,
            min: Number,
            max: Number
        },
        data() {
            return {
                left: 0,
                start: 0,
                end: 0,
                dvalue: 0,
                boxwidth: 0
            }
        },
        mounted() {
            this.addTouch()
        },
        methods: {
            addTouch() {
                const processBtn = this.$refs.processBtn;
                // console.log(this.$refs.processBar.offsetWidth, 89899999)
                this.boxwidth = this.$refs.processBar.offsetWidth;
                processBtn.addEventListener('touchstart', (e) => {
                    this.start = e.changedTouches[0].pageX
                }, false)
                processBtn.addEventListener('touchmove', (e) => {
                    this.dvalue = e.changedTouches[0].pageX - this.start;
                    if (this.dvalue < 0) {
                        this.dvalue = 0
                    };
                    if (this.dvalue > 100) this.dvalue = this.boxwidth;
                    this.$refs.processColor.style.width = this.dvalue + 'px';
                    this.$refs.processBtn.style.left = this.dvalue + 'px';
                    let scale = 100 / (30 - 10);
                    this.$emit("changefz", Math.floor(this.dvalue / scale + 10))
                }, false)
                processBtn.addEventListener('touchend', () => {}, false)
            }
        }
    }
</script>
<style>
    .process {
        display: flex;
        align-items: center;
    }
    
    .process b {
        width: 30px;
        text-align: center;
        line-height: 50px;
    }
    
    .process_bar {
        flex: 1;
        height: 2px;
        background: #ccc;
        position: relative;
    }
    
    .process_color {
        width: 10px;
        background: skyblue;
        height: 2px;
    }
    
    .process_btn {
        position: absolute;
        left: -7px;
        top: -7px;
        width: 15px;
        height: 15px;
        background: skyblue;
        border-radius: 50%;
    }
</style>