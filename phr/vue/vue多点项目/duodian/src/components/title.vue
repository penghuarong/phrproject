<template>
    <div class="title" :style="{background:bg}">
        <h2>{{tit}}</h2>
    </div>
</template>
<script>
    export default {
        props: {
            tit: {
                type: String
            },
            bg: {
                type: String
            }
        }
    }
</script>
<style>
    .title {
        height: 30px;
        background: pink;
        border-radius: 10px;
        margin: 0 10px;
        box-sizing: border-box;
    }
    
    .title h2 {
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 16px;
        font-weight: normal;
        color: #fff;
    }
</style>