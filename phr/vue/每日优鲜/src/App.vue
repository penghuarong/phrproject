<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld'
    import "./js/flexible.js"
    export default {
        name: 'App',
        render: h => h(App),
        components: {
            app
        }
    }
</script>

<style>
    @import "../node_modules/element-ui/lib/theme-chalk/index.css";
    html,
    body {
        width: 100%;
        height: 100%;
    }
    
    * {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    
    #app {
        width: 100%;
        height: 100%;
    }
</style>