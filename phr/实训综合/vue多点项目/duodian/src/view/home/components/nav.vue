<template>
    <div class="nav">
        <ul class="nav_nav">
            <li v-for="(v,ind) in navList" :key="ind">
                <img :src="v.imageUrl" alt="">
                <span>{{v.remark}}</span>
            </li>
        </ul>
    </div>  
  </template>
<script>
    export default {
        props: ["navList"],
        data() {
            return {

            }
        },
        components: {

        },
    }
</script>
<style lang="scss" scoped>
    * {
        padding: 0;
        margin: 0;
        list-style: none;
        box-sizing: border-box;
    }
    
    .nav {
        width: 100%;
    }
    
    .nav_nav {
        padding: 0 10px;
        width: 100%;
        display: flex;
        /* flex-direction: column; */
        flex-wrap: wrap;
        /* justify-content: space-between; */
        /* align-items: center; */
    }
    
    .nav_nav li {
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    img {
        width: 100%;
    }
    
    span {
        font-size: 12px;
        color: rgba(0, 0, 0, .7);
        padding: 5px 0;
    }
</style>