import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import Car from "@/components/car.vue";
import Lunbo from "@/components/lunbo.vue";
import Day17 from "@/components/day17.vue";
import Day18 from "@/components/day18.vue";
import Day19 from "@/components/day19.vue";
import Day18detail from "@/components/day18detail.vue";
import Login from "@/components/login.vue";
import Same1 from "@/components/same1.vue";
import LoginDetail from "@/components/Logindetail.vue";

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/car',
            name: 'car',
            component: Car
        },
        {
            path: '/lunbo',
            name: 'lunbo',
            component: Lunbo
        }, {
            path: '/day17',
            name: 'day17',
            component: Day17
        }, {
            path: '/day18',
            name: 'day18',
            component: Day18
        }, {
            path: '/day19',
            name: 'day19',
            component: Day19
        },
        {
            path: '/day18detail/:id',
            name: 'day18detail',
            component: Day18detail
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }, {
            path: "/logindetail",
            name: "logindetail",
            component: LoginDetail
        }, {
            path: "/same1",
            name: "same1",
            component: Same1
        }
    ]
})