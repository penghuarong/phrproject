<template>
    <div @click="msg">
        {{title}}
    </div>
</template>
<script>
    export default {
        props: ["title"],
        methods: {
            msg() {
                this.$emit("aaa", 189)
            }
        }
    }
</script>
<style>

</style>