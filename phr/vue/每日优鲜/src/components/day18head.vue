<template>
    <div class="eight_head">
        <span @click="back"><</span>
        <span>{{msg}}</span>
        <span></span>
    </div>
</template>
<script>
    export default {
        name: "app",
        props: ["msg"],
        methods: {
            back() {
                history.go(-1);
            }
        }
    }
</script>