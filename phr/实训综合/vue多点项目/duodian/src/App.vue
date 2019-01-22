<template>
  <div id="app">
      <!-- <keep-alive> -->
            <router-view/>
      <!-- </keep-alive> -->
  </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    * {
        padding: 0;
        margin: 0;
        list-style: none;
        box-sizing: border-box;
        text-decoration: none;
    }
    
    html,
    body {
        width: 100%;
        height: 100%;
        /* overflow: hidden; */
    }
    
    #app {
        width: 100%;
        height: 100%;
        /* overflow: hidden; */
    }
    
    #app {
        display: flex;
        flex-direction: column;
    }
</style>