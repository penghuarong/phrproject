const home = require('../model/home')

const banner = async(req, res, next) => {
    const {
        data_type,
        callback
    } = req.query;
    try {
        const data = await home.selectBanner(data_type)
        if (callback) {
            res.send(callback + '(' + JSON.stringify(data) + ')')
        } else {
            res.json({
                code: 1,
                data: data
            })
        }
    } catch (e) {
        res.code(402).json({
            name: '',
            message: '请求失败'
        })
    }
}
const nav = async(req, res, next) => {
    const {
        data_type,
        callback
    } = req.query;
    try {
        const data = await home.selectNav(data_type)
        if (callback) {
            res.send(callback + '(' + JSON.stringify(data) + ')')
        } else {
            res.json({
                code: 1,
                data: data
            })
        }
    } catch (e) {
        res.code(402).json({
            name: '',
            message: '请求失败'
        })
    }
}
module.exports = {
    banner,
    nav
}