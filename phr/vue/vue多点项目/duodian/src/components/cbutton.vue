<template>
    <button class="d-btn" 
    @click.prevent="btnClick" 
    :class="[type, {transparent: transparent}]" 
    :disabled="disabled" 
    :style="{width:wid+'px'}">
    <slot></slot>
</button>
</template>
<script>
    export default {
        props: {
            type: {
                type: String,
                default: 'default'
            },
            transparent: Boolean,
            disabled: Boolean,
            wid: Number,
            hei: Number
        },
        methods: {
            btnClick() {
                this.$emit('click')
            }
        }
    }
</script>
<style lang="scss" scoped>
    .d-btn {
        border: 0;
        background: #ff712b;
        border-radius: 10px;
        text-align: center;
        line-height: 40px;
        color: #fff;
        outline: none;
        &.transparent {
            background: transparent;
            border: 1px solid #ff712b;
            color: #ff712b;
        }
        &:disabled {
            opacity: 0.3;
        }
    }
</style>