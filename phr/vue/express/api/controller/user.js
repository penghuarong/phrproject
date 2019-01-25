const user = require('../model/user')
const jwt = require('jsonwebtoken')
let msgcode = ''
const getMsgCode = async(req, res, next) => {
    const {
        phone
    } = req.query;


    while (msgcode.length < 6) {
        msgcode += parseInt(Math.random() * 10)
    }

    res.json({
        code: 1,
        msg: "短信验证码成功发送至" + phone + "用户验证码是" + "[" + msgcode + "]"
    })
}
const login_in = async(req, res, next) => {
    const {
        phone,
        code
    } = req.query;
    if (msgcode === code) {
        const userInfo = await user.selectUser(phone)
        if (userInfo, res) {
            const token = jwt.sign({...userInfo }, 'huahua')
            console.log(token, 99999999999)
            res.cookie("token", token, { maxAge: 1000 * 60 * 60 * 24 * 30 })
            res.json({
                ...userInfo,
                msg: "登陆成功！！"
            })
        } else {
            res.json({
                msg: "用户不存在！！"
            })
        }
    } else {
        res.status(401).json({
            msg: "验证码不正确"
        })
    }
}
module.exports = {
    getMsgCode,
    login_in
}