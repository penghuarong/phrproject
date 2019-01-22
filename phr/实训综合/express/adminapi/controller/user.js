const user = require('../model/user')
const jwt = require('jsonwebtoken')

// 用户登录
const login_do = async(req, res, next) => {
    const {
        phone,
        password
    } = req.body;
    const userInfo = await user.selectUser(phone, password) // 查询用户
    if (phone == '' || password == '') {
        res.json({
            code: 0,
            msg: "用户名和密码不能为空"
        })
    }
    if (userInfo) {
        const token = jwt.sign({...userInfo }, 'huahua') // 使用jwt进行加密
        res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 24 * 30 });
        res.json({
            code: 1,
            ...userInfo,
            msg: '登录成功'
        })
    } else {
        res.json({
            code: 0,
            msg: '用户不存在'
        })
    }
}

// 用户信息
const info = (req, res, next) => {
    const userInfo = req.userInfo
    res.json(userInfo)
}

const selectFruit = async(req, res, next) => {
    const data = await user.selectFruit()
    res.json({
        code: 1,
        data
    })
}

const page = async(req, res, next) => {
    const { min, max } = req.body;
    console.log(111)
    console.log(req.body, "body")
    const list = await user.page(min, max)
    res.json({
        code: 1,
        list
    })
}
module.exports = {
    login_do,
    info,
    selectFruit,
    page
}