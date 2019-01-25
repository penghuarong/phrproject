import axios from 'axios'
axios.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    return response.data
}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error)
})

const api = {
    home: {
        banner: (data_type = 0) => axios.get('http://localhost:3000/api/home/banner', {
            params: {
                data_type
            }
        })
    },
    nav: {
        nav: (data_type = 0) => axios.get('http://localhost:3000/api/home/nav', {
            params: {
                data_type
            }
        })
    },
    user: {
        msgCode: (phone) => axios.get('http://localhost:3000/api/user/get_msg_code', {
            params: {
                phone
            }
        }),
        login_in: (phone, code) => axios.get('http://localhost:3000/api/user/login_in', {
            params: {
                phone,
                code
            }
        })
    },
    category: {
        category_list: () => axios.get("http://localhost:3000/api/category/category")
    },
    product: {
        product_list: ({
            page,
            page_size,
            category_id
        }) => axios.get("http://localhost:3000/api/product/product", {
            params: {
                page,
                page_size,
                category_id
            }
        })
    }

}

export default {
    install(Vue) {
        Vue.prototype.$api = api
    }
}