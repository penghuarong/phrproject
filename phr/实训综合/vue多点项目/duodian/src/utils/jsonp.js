const jsontoparams = (data) => {
    let params = ''
    for (let key in data) {
        params += key + '=' + JSON.stringify(data[key]) + '&'
    }
    return params.substr(0, params.length - 1)
}

const jsonp = (url, data) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        const fnName = 'a' + (+new Date())
        script.src = url + jsontoparams(data) + '&callback=' + fnName
        window[fnName] = (data) => {
            console.log(data)
            resolve(data)
            window[fnName] = null
        }
        document.body.appendChild(script)
    })
}
export default jsonp