import dynamic from 'dva/dynamic';
import { Route } from 'dva/router';

// baseLayout中所有页面路由
const routes = [{
        path: '/home',
        component: () =>
            import ('../routes/home'),
        models: ['home']
    },
    {
        path: '/users',
        component: () =>
            import ('../routes/users'),
        models: ['users']
    },
    {
        path: "/addUser",
        component: () =>
            import ('../routes/addUser.jsx'),
        models: ['addUser']
    },
    {
        path: "/login",
        component: () =>
            import ('../routes/login.jsx'),
        models: ['login']
    },
    {
        path: '/car',
        component: () =>
            import ('../routes/quickCar'),
        models: ['car']
    }, {
        path: '/product',
        component: () =>
            import ('../routes/productList'),
        models: ['product']
    }
]

/**
 * 获取模板下对应的路由
 * @param {String} path  获取规则 
 */
export const getBaseRoute = (app) => {
    const routesComponent = routes.map((item, index) => {
        const route = dynamic({
            app,
            models: () => item.models.map((module) => (
                import (`../models/${module}`)
            )),
            component: item.component
        })

        return ( <
            Route path = { item.path }
            exact component = { route }
            key = { index }
            />
        )
    });

    return routesComponent;
}


export default routes;