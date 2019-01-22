<template>
    <div class="load_box">
        <div class="move_box">
            
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style>
    .load_box {
        background: rgba(0, 0, 0, .3);
        width: 100%;
        height: 100%;
        display: flex;
    }
    
    @keyframes tutu {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: -1088px 0;
        }
    }
    
    .move_box {
        margin: 130px auto;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background: url("http://img.dmallcdn.com/common/2add440a-12a9-40c1-b9a3-bad9dea816db") #fff no-repeat;
        animation: tutu 1s steps(17) infinite;
        background-size: auto 64px;
    }
</style>