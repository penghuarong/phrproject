// import Login from "@/container/Login/index.jsx";
// import Home from "@/container/Home/index.jsx";
// import OrderList from "@/container/Order/OrderList";
// import ChartKeyboard from "@/container/Chart/ChartKeyboard";
// import ChartLine from "@/container/Chart/ChartLine";
// import MixChart from "@/container/Chart/MixChart";
const routers = {
    "/user": [{
        path: "/user/login",
        component: () =>
            import ("@/container/Login/index.jsx")
    }],
    "/": [{
        path: "/home",
        component: () =>
            import ("@/container/Home/index.jsx")
    }, {
        path: "/order",
        children: [{
            path: "/order/list",
            component: () =>
                import ("@/container/Order/OrderList")
        }]
    }, {
        path: "/chart",
        children: [{
                path: "/chart/line",
                component: () =>
                    import ("@/container/Chart/ChartLine")
            },
            {
                path: "/chart/keyboard",
                component: () =>
                    import ("@/container/Chart/ChartKeyboard")
            }, {
                path: "/chart/mixchart",
                component: () =>
                    import ("@/container/Chart/MixChart")
            }
        ]
    }]
}
export default routers