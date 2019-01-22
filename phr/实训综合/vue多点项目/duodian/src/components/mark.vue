<template>
    <div class="dialog">
        <div class="dialog_small">
            <p>确认删除该商品吗？</p>
            <p><span @click="cancel">取消</span><span @click="sure">确认</span></p>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            cancel() {
                console.log("1")
                this.$emit("cancel")
            },
            sure() {
                this.$emit("click")
            }
        }
    }
</script>
<style lang="scss" scoped>
    .dialog {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .4);
        position: fixed;
        top: 0;
        .dialog_small {
            width: 200px;
            height: 100px;
            background: #fff;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -100px;
            margin-top: -50px;
            font-size: 14px;
            border-radius: 10px;
            p {
                height: 50px;
                line-height: 50px;
                text-align: center;
                border-top: 1px solid #ddd;
            }
            p:nth-child(2) {
                display: flex;
                justify-content: space-around;
                span {
                    flex: 1;
                }
                span:nth-child(2) {
                    display: inline-block;
                    color: red;
                    border-left: 1px solid #ddd;
                }
            }
        }
    }
</style>