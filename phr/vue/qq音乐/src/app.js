import Vue from "vue";
import App from "./app.vue";
import router from "./router";
import Element from "element-ui";

Vue.use(Element);
window.EventBus = new Vue();
new Vue({
    el: "#app",
    router: router, //4
    render: h => h(App),
    components: {
        App
    },
    template: "<App/>"
})