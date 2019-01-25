const objToString = (obj) => {
    let str = "";
    Object.keys(obj).forEach((key) => {
        str += `${key}=${obj[key]}&`
    })
    return str.substring(0, str.length - 1)
}
const request = (url, data, method) => {
    const options = {
        method: method,
        mode: 'cors',
        credentials: 'include'
    }
    if (method === "GET") {
        url += url + "?" + objToString(data)
    } else {
        if (data instanceof FormData) {
            options.body = data
        } else {
            options.headers = {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
            options.body = JSON.stringify(data)
        }
    }
    return fetch(url, options).then((res) => {
        if (res.ok) {
            return res.json()
        } else {
            if (res.status === 401) {
                // window.location.href = "/login";
                window.history.pushState("/login")
            }
            return Promise.reject(res)
        }
    })
}
export default {
    get(url, data) {
        return request(url, data, 'Get')
    },
    post(url, data) {
        return request(url, data, 'POST')
    }
}