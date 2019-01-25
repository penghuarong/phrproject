<template>
    <div class="containter">
            <router-view></router-view>
    </div>
</template>
<script>
</script>
<style>
    @import "../node_modules/element-ui/lib/theme-chalk/index.css";
    @import "../src/css/animate.css";
    .containter {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
</style>