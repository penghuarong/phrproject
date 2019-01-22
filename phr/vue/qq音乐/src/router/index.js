import Vue from "vue";
import VueRouter from "vue-router"; //1
Vue.use(VueRouter); //2
import Home from "../components/home/index.vue";
import Music from "../components/music/index.vue";
import Rank from "../components/music/rank.vue";
import RankDetail from "../components/music/rankdetail.vue";
import Toplist from "../components/music/toplist.vue";
import Search from "../components/music/search.vue";
import ShopCar from "../components/prac/shopCar.vue";
import Tab from "../components/tabam/tab.vue"


const router = new VueRouter({ //3
    routes: [{
            path: "/",
            redirect: "/music"
        },
        {
            path: "/",
            name: "home",
            component: Home
        }, {
            path: "/shopCar",
            name: "shopCar",
            component: ShopCar
        }, {
            path: "/tab",
            name: "tab",
            component: Tab
        }, {
            path: "/music",
            name: "music",
            component: Music,
            children: [{
                    path: "",
                    redirect: "/music/rank"
                }, {
                    path: "/music/rank",
                    component: Rank
                },
                {
                    path: "/music/toplist",
                    component: Toplist
                },
                {
                    path: "/music/rank/:id.html",
                    component: RankDetail
                }, {
                    path: "/music/search",
                    component: Search
                },
            ]
        }
    ]
});
export default router;