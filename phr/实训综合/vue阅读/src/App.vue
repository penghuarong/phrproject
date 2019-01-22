<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
    import "./js/better-scroll.js";
    export default {
        name: 'App'
    }
</script>

<style>
    #app,
    .wrapper,
    body,
    html {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    
    body {
        background: #e0f0ff;
    }
    
    * {
        padding: 0;
        margin: 0;
        list-style: none;
        box-sizing: border-box;
    }
</style>