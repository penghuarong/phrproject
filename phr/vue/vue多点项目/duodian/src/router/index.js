import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Classify from "@/view/classify"
import Car from "@/view/car"
import Member from "@/view/member"
import My from "@/view/my"
import Location from "@/view/location"
import Selectmap from "@/view/selectmap"
import Loading from "@/components/loading"
import NewAddAddress from "@/components/newaddaddress"
import ModifyAddress from "@/components/modifyAddress"
import Detail from "@/components/detail"
import OrderSure from "@/components/ordersure"
Vue.use(Router)
const router = new Router({
        routes: [{
            path: "/",
            redirect: "/home"
        }, {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: {
                title: '首页'
            }
        }, {
            path: '/hh',
            name: 'Hh',
            component: () =>
                import ("@/components/hyzhead")
        }, {
            path: '/classify',
            name: 'Classify',
            component: Classify,
            meta: {
                title: '分类'
            }
        }, {
            path: '/car',
            name: 'Car',
            component: Car,
            meta: {
                title: '购物车'
            }
        }, {
            path: '/myself',
            name: 'My',
            component: My,
            meta: {
                title: '我的'
            }
        }, {
            path: '/member',
            name: 'Member',
            component: Member,
            meta: {
                title: '会员'
            }
        }, {
            path: '/location',
            name: 'Location',
            component: Location,
            meta: {
                title: '地图'
            }
        }, {
            path: '/selectmap',
            name: 'Selectmap',
            component: Selectmap,
            meta: {
                title: '选择'
            }
        }, {
            path: '/loading',
            name: 'Loading',
            component: Loading,
            meta: {
                title: '选择'
            }
        }, {
            path: '/newaddaddress',
            name: 'NewAddAddress',
            component: NewAddAddress,
            meta: {
                title: '新增地址'
            }
        }, {
            path: '/modifyAddress',
            name: 'ModifyAddress',
            component: ModifyAddress,
            meta: {
                title: '修改地址'
            }
        }, {
            path: '/detail',
            name: 'Detail',
            component: Detail,
            meta: {
                title: '详情'
            }
        }, {
            path: '/orderSure',
            name: 'OrderSure',
            component: OrderSure,
            meta: {
                title: '订单详情'
            }
        }]
    })
    // 导航守卫
const loginPath = ['/myself'];
const gpsPath = ['/location', 'selectlocation'];
router.beforeEach((to, from, next) => {
    console.log("进入前")
    if (to.path !== '/location') {
        if (!window.localStorage.getItem('location')) {
            next(`/location?callback=${to.path}`)
        } else {
            if (loginPath.indexOf(to.path) !== -1) {
                if (document.cookie.indexOf('token') !== -1) {
                    console.log(document.cookie, "90--------")
                    next()
                } else {
                    console.log(document.cookie, "0--------=")
                    next("/member")
                }
            } else {
                next()
            }
        }
    } else {
        next()
    }
})
router.afterEach((to, from) => {
    console.log("进入")
})
export default router