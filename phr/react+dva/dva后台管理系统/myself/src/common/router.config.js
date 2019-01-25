import dynamic from "dva/dynamic";
const routes = [{
        path: '/admin',
        title: "admin",
        component: () =>
            import ('../layout/HomeLayout'),
        isAuthorized: true,
        children: [{
                path: '/admin',
                title: "商品管理",
                children: [{
                        path: '/admin',
                        title: "商品列表",
                        component: () =>
                            import ('../routes/users')
                    },
                    {
                        path: '/addList',
                        title: "商品添加",
                        // component: () =>
                        //     import ('../routes/list')
                    },
                    {
                        path: '/detail/:id',
                        title: "商品详情",
                        // component: () =>
                        //     import ('../routes/detail')
                    }
                ]
            },
            {
                path: '/admin/users',
                title: "会员管理",
                children: [{
                        path: '/admin/users/userList',
                        title: "用户列表",
                        component: () =>
                            import ('../routes/list')
                    },
                    {
                        path: '/admin/users/addUser',
                        title: "用户添加",
                        // component: () =>
                        //     import ('../routes/addList')
                    },
                    {
                        path: '/admin/users/',
                        title: "会员档案",
                        // component: () =>
                        //     import ('../routes/detail')
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        title: "登录",
        component: () =>
            import ('../routes/login')
    },
    {
        path: '/',
        title: '用户',
        component: () =>
            import ('../layout/BasesLayout'),
        children: [{
                path: '/',
                title: '66快车',
                component: () =>
                    import ('../routes/quickCar'),
                models: []
            }, {
                path: '/addUser',
                title: '添加用户',
                component: () =>
                    import ('../routes/addUser'),
                models: []
            },
            {
                path: '/auditEnter',
                title: '用户认证',
                component: () =>
                    import ('../routes/AuditEnter')
            }
        ]
    }
]

const routesToObj = (routes) => {
    const obj = {};

    routes.forEach((item) => {
        obj[item.path] = []
        if (item.children) {
            obj[item.path] = obj[item.path].concat(...Object.values(routesToObj(item.children)))
        }
        if (item.component && !item.children) {
            obj[item.path].push(item)
        }
    })

    return obj;
}

const routesObj = routesToObj(routes)

export const getRouteLayout = (app) => {
    const layout_routes = routes.map((item, index) => {
        const route = dynamic({
            app,
            models: item.models ? () => item.models.map((module) => (
                import (`../models/${module}`)
            )) : [],
            component: item.component
        })

        return {
            ...item,
            component: route
        }
    });

    return layout_routes;
}


export const getChildRouter = (app, path) => {
    const routes = routesObj[path]

    return routes.map((item, index) => {

        const route = dynamic({
            app,
            models: item.models ? () => item.models.map((module) => (
                import (`../models/${module}`)
            )) : [],
            component: item.component
        })

        return {
            ...item,
            component: route
        }
    });
}