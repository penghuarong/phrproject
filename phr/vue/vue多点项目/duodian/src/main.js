// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "@/utils/rem"
import "@/fonts/iconfont.css";
import api from './api'
import store from "./store/index"
window.Bus = new Vue()
Vue.config.productionTip = false
    /* eslint-disable no-new */
Vue.use(api)
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})