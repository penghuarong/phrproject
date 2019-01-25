const menuConfig = [{
        path: '/home',
        text: "首页"
    },
    {
        text: "订单",
        path: '/order',
        children: [{
            path: "/order/list",
            text: "订单列表"
        }]
    },
    {
        text: "统计",
        path: '/chart',
        children: [{
                path: "/chart/line",
                text: "柱状图"
            },
            {
                path: "/chart/keyboard",
                text: "钢琴图"
            },
            {
                path: "/chart/mixchart",
                text: "混合图"
            }
        ]
    },
]
export default menuConfig